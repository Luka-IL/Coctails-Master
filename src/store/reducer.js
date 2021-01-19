import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  shakerList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_SHAKER_LIST:
      return extend(state, {
        shakerList: action.payload
      });
  }
  return state;
};

export {reducer};
