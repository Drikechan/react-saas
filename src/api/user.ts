import request from "@/utils/request";
import { LoginType, MenuList } from "@/types/login";
import { JUPITER_AUTH_SERVER } from "@/config/request";

export function login(params: Omit<LoginType, "verificationCode">) {
  return request.post<Omit<LoginType, "verificationCode">>(
    `${JUPITER_AUTH_SERVER}/login/phone/password`,
    params
  );
}

export function getRouterList(data = {}) {
  return request.post<MenuList[]>(
    `${JUPITER_AUTH_SERVER}/role/getFunctionCodeList`,
    data
  );
}
