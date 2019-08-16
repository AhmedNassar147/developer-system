import { put, takeLatest, all, select } from "redux-saga/effects";
import { FETCH_MY_WORK_SPACES, ON_CREATE_WORK_SPACE } from "./types";
import { fetchWorkSpacesFinished, onCreateWorkSpaceFinished } from "./actions";
import { getUserDataFinished } from "../../Profile/modules/actions";
import { setToStorage } from "../../../utils/localStorage";
import { db } from "../../../utils/firebase";

const formSelecter = state => state.get("workSpaces").toJS();
const profileSelecter = state => state.get("userProfile").toJS();

function* requestWorkSpaces({ uuid }) {
  try {
    const ref = db.ref(`workspaces/${uuid}`);
    let result = yield ref.once("value", snapshot => snapshot);
    result = result.val();
    if (Boolean(result)) {
      yield put(fetchWorkSpacesFinished({ data: formatWs(result) }));
    } else {
      yield put(fetchWorkSpacesFinished());
    }
  } catch (error) {
    return yield put(
      fetchWorkSpacesFinished({ requestError: "Oops, something went wrong" })
    );
  }
}

const formatWs = (ws = {}) => {
  const ids = Object.keys(ws);
  return ids.map(id => ({
    id,
    name: ws[id].name
  }));
};

function* requestCreateWorkSpace() {
  try {
    const { uuid, workSpaces } = yield select(profileSelecter);
    const { workSpaceName, data } = yield select(formSelecter);
    if (workSpaceName && workSpaceName.length > 5) {
      const newWsItem = { name: workSpaceName };
      const snapshot = yield db
        .ref(`/workspaces/${uuid}`)
        .push(newWsItem)
        .once("value");
      const id = snapshot.key;
      const newWorkSpacesIds = [...(workSpaces || []), id];
      yield db.ref(`users/${uuid}/`).update({
        wsIds: newWorkSpacesIds
      });
      yield put(getUserDataFinished({ workSpaces: newWorkSpacesIds }));
      yield setToStorage("user", {
        uuid,
        wsIds: newWorkSpacesIds
      });
      yield put(
        onCreateWorkSpaceFinished({
          data: [...(data || []), newWsItem],
          workSpaceName: undefined
        })
      );
    } else {
      return yield put(
        onCreateWorkSpaceFinished({
          formError: "spaceWork must be at least 5 characters"
        })
      );
    }
  } catch (error) {
    console.log("error", error);
  }
}

export default function* workSpacesSaga() {
  yield all([takeLatest(FETCH_MY_WORK_SPACES, requestWorkSpaces)]);
  yield all([takeLatest(ON_CREATE_WORK_SPACE, requestCreateWorkSpace)]);
}
