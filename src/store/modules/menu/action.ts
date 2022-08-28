import * as types from "@/store/mutation-types";
import { MenuList } from "@/types/login";

// 更新展开状态
export const updateCollapse = (isCollapse: boolean) => ({
  type: types.UPDATE_COLLAPSE,
  isCollapse,
});

export const setMenuList = (menuList: MenuList) => ({
  type: types.SET_MENULIST,
  menuList,
});
