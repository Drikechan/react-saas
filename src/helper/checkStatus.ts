import { message } from "antd";
/**
 * @description 不同code提示不同
 * @param {Number} status
 * @return void
 */

export const checkStatus = (status: number): void => {
  const config = [
    {
      code: 400,
      message: message.error("请求失败！请您稍后重试"),
    },
    {
      code: 401,
      message: message.error("登录失效！请您重新登录"),
    },
    {
      code: 403,
      message: message.error("当前账号无权限访问！"),
    },
    {
      code: 404,
      message: message.error("你所访问的资源不存在！"),
    },
    {
      code: 405,
      message: message.error("请求方式错误！请您稍后重试"),
    },
    {
      code: 408,
      message: message.error("请求超时！请您稍后重试"),
    },
    {
      code: 500,
      message: message.error("服务异常！"),
    },
    {
      code: 502,
      message: message.error("网关错误！"),
    },
    {
      code: 503,
      message: message.error("服务不可用！"),
    },
    {
      code: 504,
      message: message.error("网关超时！"),
    },
  ];
  config.find((item) => item.code === status)?.message ||
    message.error("请求失败！");
};
