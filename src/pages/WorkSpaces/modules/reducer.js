import {
  FETCH_MY_WORK_SPACES,
  FETCH_MY_WORK_SPACES_FINISHED,
  ON_CREATE_WORK_SPACE,
  ON_CREATE_WORK_SPACE_FINISHED,
  TOGGLE_WORK_SPACE_FORM_VISIBLITY,
  WORK_SPACE_FORM_CHANGED
} from "./types";

import { fromJS } from "immutable";

const initialState = fromJS({
  data: undefined,
  loading: false,
  workSpaceName: "",
  showForm: false,
  isCreatingWS: false,
  noUserFound: false,
  requestError: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_WORK_SPACES:
      return state.merge({ loading: true });

    case FETCH_MY_WORK_SPACES_FINISHED:
      return state.merge({ loading: false, ...action.newState });

    case TOGGLE_WORK_SPACE_FORM_VISIBLITY:
      return state.merge({ showForm: !state.toJS().showForm });

    case WORK_SPACE_FORM_CHANGED:
      return state.merge({ workSpaceName: action.value });

    case ON_CREATE_WORK_SPACE:
      return state.merge({ isCreatingWS: true });

    case ON_CREATE_WORK_SPACE_FINISHED:
      return state.merge({ isCreatingWS: false, ...action.newState });

    default:
      return state;
  }
};
