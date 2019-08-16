import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import history from "../../history";

import authReducer from "../../../pages/Auth/modules/reducer";
import workSpaces from "../../../pages/WorkSpaces/modules/reducer";
import userProfile from "../../../pages/Profile/modules/reducer";

const rootReducer = combineReducers({
  authReducer,
  workSpaces,
  userProfile,
  router: connectRouter(history)
});

export default rootReducer;
