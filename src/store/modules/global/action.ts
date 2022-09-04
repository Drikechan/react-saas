import * as types from "@/store/mutation-types";

// 设置token
export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  token,
});

// 设置组件大小
export const setAssemblySize = (assemblySize: string) => ({
  type: types.SET_ASSEMBLY_SIZE,
  assemblySize,
});
