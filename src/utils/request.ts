import { message } from "antd";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import Nprogress from "@/config/nprogress";
import { FullPageLoading } from "@/libs/index";
import { ContentTypeEnum } from "@/enums";
import { checkStatus } from "@/helper/checkStatus";
import { ResultData } from "@/types";

const baseURL = location.origin;

const config = {
  baseURL: `${baseURL}/api`,
  timeout: 10000,
  withCredentials: true,
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        Nprogress.start();
        const token = window.sessionStorage.getItem("token");
        if (!token && location.hash !== "#/login") {
          window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
          return config;
        }
        if (token && config.headers) {
          FullPageLoading({ spinning: true });
          config.headers.Authorization = "Bearer" + token;
          config.headers["Content-Type"] = ContentTypeEnum.JSON;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        Nprogress.done();
        const { data } = response;
        if (data.code === 200) {
          return Promise.resolve(response.data);
        } else if ([40060, 40061].includes(data.code)) {
          window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
        } else {
          message.error(response.data.message || "请求错误");
          return Promise.reject(response);
        }
      },
      (error) => {
        const { response } = error;
        if (response) return checkStatus(response.status);
        if (error.response?.status === 401) {
          window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
          return;
        }
        const errData = error.response?.data;
        message.error(errData.message || "请求异常，请稍后再试");
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequestHttp(config);
