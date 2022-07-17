import { message } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FullPageLoading } from "@/libs/index";
// interface HttpMapType {
//   get?: () => AxiosPromise;
//   post?: Function;
// }

const baseURL = location.origin;

const services = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 10000,
});

services.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = window.sessionStorage.getItem("token");
  if (!token && location.hash !== "#/login") {
    window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
    return config;
  }
  if (token && config.headers) {
    FullPageLoading({ spinning: true });
    config.headers.Authorization = "Bearer" + token;
    config.headers["Content-Type"] = "application/json;charset-utf-8";
  }
  return config;
});

services.interceptors.response.use(
  (response: AxiosResponse) => {
    FullPageLoading({ spinning: false });
    const data = response.data;
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
    if (error.response?.status === 401) {
      window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
      return;
    }
    const errData = error.response?.data;
    message.error(errData.message || "请求异常，请稍后再试");
    return Promise.reject(error);
  }
);

export default function request<T>(options: AxiosRequestConfig) {
  return services.request<T>(options);
}

// const http: HttpMapType = {};

// http.get = function (url: string, params: {}, loading: boolean = false) {
//   if (loading) {
//     FullPageLoading({ spinning: true });
//   }

//   return new Promise((resolve, reject) => {
//     services
//       .get(url, { params })
//       .then((res) => {
//         if (loading) {
//           FullPageLoading({ spinning: false });
//         }
//         resolve(res.data);
//       })
//       .catch((e) => {
//         if (loading) {
//           FullPageLoading({ spinning: false });
//         }
//         reject(e);
//       });
//   });
// };

// http.post = function (url: string, params: {}, loading: boolean = false) {
//   if (loading) {
//     FullPageLoading({ spinning: true });
//   }

//   return new Promise((resolve, reject) => {
//     services
//       .post(url, params)
//       .then((res) => {
//         if (loading) {
//           FullPageLoading({ spinning: false });
//         }
//         resolve(res.data);
//       })
//       .catch((e) => {
//         if (loading) {
//           FullPageLoading({ spinning: false });
//         }
//         reject(e);
//       });
//   });
// };

// export default http;
