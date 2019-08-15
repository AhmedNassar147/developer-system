import {
  ON_REQUEST_LOGIN_OR_SIGN_UP,
  ON_REQUEST_LOGIN_OR_SIGN_UP_FINISHED,
  ON_TOGGLE_FORM_VIEW,
  ON_AUTH_FORM_CHANGED
} from "./types";

export const onFormChanged = ({ name, value }) => ({
  type: ON_AUTH_FORM_CHANGED,
  name,
  value
});

export const onToggleView = () => ({
  type: ON_TOGGLE_FORM_VIEW
});

export const onLoginOrSignUp = () => ({
  type: ON_REQUEST_LOGIN_OR_SIGN_UP
});

export const onLoginOrSignUpFinished = newState => ({
  type: ON_REQUEST_LOGIN_OR_SIGN_UP_FINISHED,
  newState
});
