import {
  FETCH_MY_WORK_SPACES,
  FETCH_MY_WORK_SPACES_FINISHED,
  ON_CREATE_WORK_SPACE,
  ON_CREATE_WORK_SPACE_FINISHED,
  WORK_SPACE_FORM_CHANGED
} from "./types";

import { fromJS } from "immutable";

const initialState = fromJS({
  data: undefined,
  loading: false,
  workSpaceName: "",
  isCreatingWS: false,
  requestError: undefined,
  formError: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_WORK_SPACES:
      return state.merge({ loading: true });

    case FETCH_MY_WORK_SPACES_FINISHED:
      return state.merge({ loading: false, ...action.newState });

    case WORK_SPACE_FORM_CHANGED:
      return state.merge({ workSpaceName: action.value, formError: undefined });

    case ON_CREATE_WORK_SPACE:
      return state.merge({ isCreatingWS: true });

    case ON_CREATE_WORK_SPACE_FINISHED:
      return state.merge({ isCreatingWS: false, ...action.newState });

    default:
      return state;
  }
};
