import { put, takeLatest, all, select } from "redux-saga/effects";
import { FETCH_USER_INFO } from "./types";
import { getUserDataFinished } from "./actions";
import { db } from "../../../utils/firebase";

const profileSelecter = state => state.get("userProfile").toJS();

function* requestUserData() {
  try {
    const { uuid } = yield select(profileSelecter);
    const ref = db.ref(`users/${uuid}`);
    const result = yield ref.once("value", snapshot => snapshot);
    yield put(getUserDataFinished(result.val()));
  } catch (error) {
    console.log("error =>", error);
  }
}

export default function* userProfileSaga() {
  yield all([takeLatest(FETCH_USER_INFO, requestUserData)]);
}
