import { fromJS } from "immutable";
import { FETCH_USER_INFO_FINISHED } from "./types";

const initialState = fromJS({
  uuid: undefined,
  workSpaces: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_FINISHED:
      return state.merge(action.userInfo);

    default:
      return state;
  }
};
