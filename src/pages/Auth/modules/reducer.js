import { fromJS } from "immutable";
import {
  ON_REQUEST_LOGIN_OR_SIGN_UP,
  ON_REQUEST_LOGIN_OR_SIGN_UP_FINISHED,
  ON_TOGGLE_FORM_VIEW,
  ON_AUTH_FORM_CHANGED
} from "./types";

const initialState = fromJS({
  loading: false,
  password: "",
  username: "",
  email: "",
  isSignUpView: false,
  errors: undefined,
  formError: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_AUTH_FORM_CHANGED:
      return state.merge({
        [action.name]: action.value,
        errors: undefined
      });

    case ON_TOGGLE_FORM_VIEW:
      return state.merge({
        isSignUpView: !state.toJS().isSignUpView
      });

    case ON_REQUEST_LOGIN_OR_SIGN_UP:
      return state.merge({
        loading: true
      });

    case ON_REQUEST_LOGIN_OR_SIGN_UP_FINISHED:
      return state.merge({
        loading: false,
        ...action.newState
      });

    default:
      return state;
  }
};
