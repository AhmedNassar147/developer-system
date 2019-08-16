import { takeLatest, all, select, put } from "redux-saga/effects";
import { ON_REQUEST_LOGIN_OR_SIGN_UP } from "./types";
import { onLoginOrSignUpFinished } from "./actions";
import { push } from "connected-react-router";
import { validateAuthForm } from "../../../utils/validations";
import { auth, db } from "../../../utils/firebase";
import { setToStorage } from "../../../utils/localStorage";

const formSelecter = state => state.get("authReducer").toJS();

function* requestLoginOrSignUp() {
  try {
    const formdata = yield select(formSelecter);
    const errors = validateAuthForm(formdata);
    if (errors) {
      return yield put(onLoginOrSignUpFinished({ errors }));
    }
    if (formdata.isSignUpView) {
      const done = yield handleSignUp(formdata);
      if (done) {
        yield put(push("/workspaces"));
      }
    } else {
      yield handleSignIn(formdata);
      return yield put(push("/workspaces"));
    }
  } catch (error) {
    return yield put(
      onLoginOrSignUpFinished({ formError: "Oops, something went wrong" })
    );
  }
}

const handleSignIn = async ({ email, password }) => {
  let { user } = await auth.signInWithEmailAndPassword(email, password);
  user = await user.toJSON();
  const uuid = user.uid;
  console.log("user =>", user);
  await setToStorage("user", {
    wsIds: user.wsIds,
    uuid
  });
  return uuid;
};

const handleSignUp = async ({ email, password }) => {
  let isCreated = false;
  let done = false;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    isCreated = true;
  } catch (error) {
    isCreated = false;
  }
  if (isCreated) {
    const uuid = await handleSignIn({ email, password });
    await db.ref(`users/${uuid}`).set({
      displayName: "",
      email,
      phoneNumber: "",
      photoURL: "",
      password,
      wsIds: []
    });
    // console.log("result", result);
    done = true;
  }
  return done;
};

export default function* authSaga() {
  yield all([takeLatest(ON_REQUEST_LOGIN_OR_SIGN_UP, requestLoginOrSignUp)]);
}
