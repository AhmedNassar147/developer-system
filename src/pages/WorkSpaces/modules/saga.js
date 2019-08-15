import { put, takeLatest, all, select } from "redux-saga/effects";
import { FETCH_MY_WORK_SPACES } from "./types";
import { fetchWorkSpacesFinished } from "./actions";
import { db } from "../../../utils/firebase";
import { setToStorage, getFormStorage } from "../../../utils/localStorage";
import { isArrayHasData } from "../../../utils/isThereData";

const validateWorkSpace = value => value;
const formSelecter = state => state.get("workSpaces").toJS();
// const { workSpaceName } = yield select(formSelecter);

function* requestWorkSpaces() {
  try {
    const user = yield JSON.parse(getFormStorage("user"));
    if (Boolean(user)) {
      if (isArrayHasData(user.workSpaces)) {
        return yield put(fetchWorkSpacesFinished({ data: user.workSpaces }));
      } else {
        let data = yield db
          .ref(`users/${user.uuid}`)
          .once("value", snapshot => snapshot.val());
        data = data.toJSON();
        if (data.hasOwnProperty("workSpaces")) {
          setToStorage("user", {
            uuid: user.uuid,
            workSpaces: data.workSpaces
          });
          return yield put(fetchWorkSpacesFinished({ data: data.workSpaces }));
        }
        return yield put(fetchWorkSpacesFinished({ data: undefined }));
      }
    }
    return yield put(fetchWorkSpacesFinished({ nouserFound: "nouserFound" }));
  } catch (error) {
    return yield put(
      fetchWorkSpacesFinished({ requestError: "Oops, something went wrong" })
    );
  }
}

export default function* workSpacesSaga() {
  yield all([takeLatest(FETCH_MY_WORK_SPACES, requestWorkSpaces)]);
}
