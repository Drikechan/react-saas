import produce from "immer";
import { GlobalState } from "@/types/store";
import * as types from "@/store/mutation-types";
import { AnyAction } from "redux";

const globalState = {
  token: "",
};

const global = (state: GlobalState = globalState, action: AnyAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token;
        break;
      default:
        return draftState;
    }
  });
};

export default global;
