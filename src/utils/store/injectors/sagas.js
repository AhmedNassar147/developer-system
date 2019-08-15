import { all, fork } from "redux-saga/effects";
import authSaga from "../../../pages/Auth/modules/saga";
import workSpacesSaga from "../../../pages/WorkSpaces/modules/saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(workSpacesSaga)]);
}
