import { MenuState } from "@/types/store";
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/store/mutation-types";

const menuState: MenuState = {
  isCollapse: false,
};

export const menu = (state: MenuState = menuState, action: AnyAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.UPDATE_COLLAPSE:
        draftState.isCollapse = action.isCollapse;
        break;
      default:
        return draftState;
    }
  });
};
