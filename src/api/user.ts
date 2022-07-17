import request from "@/utils/request";
import { LoginType } from "@/types/login";

export function login(params: Omit<LoginType, "verificationCode">) {
  return request({
    url: "/jupiter-auth-server/login/phone/password",
    method: "post",
    data: params,
  });
}
