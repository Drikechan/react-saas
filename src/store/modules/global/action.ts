import * as types from "@/store/mutation-types";

// 设置token
export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  token,
});
