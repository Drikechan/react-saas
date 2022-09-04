import produce from "immer";
import { GlobalState } from "@/types/store";
import * as types from "@/store/mutation-types";
import { AnyAction } from "redux";

const globalState = {
  token: "",
  assemblySize: "middle",
};

const global = (state: GlobalState = globalState, action: AnyAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token;
        break;
      case types.SET_ASSEMBLY_SIZE:
        draftState.assemblySize = action.assemblySize;
        break;
      default:
        return draftState;
    }
  });
};

export default global;
