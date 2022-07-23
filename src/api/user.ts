import request from "@/utils/request";
import { LoginType } from "@/types/login";

export function login(params: Omit<LoginType, "verificationCode">) {
  return request.post<Omit<LoginType, "verificationCode">>(
    "/jupiter-auth-server/login/phone/password",
    params,
    { headers: { noLoading: true } }
  );
}
