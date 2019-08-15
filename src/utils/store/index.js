import { routerMiddleware } from "connected-react-router/immutable";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Map } from "immutable";
import reducers from "./injectors/reducers";
import history from "../history";
// eslint-disable-next-line
import rootSagas from "./injectors/sagas";
const sagaMiddleware = createSagaMiddleware();

const initialState = Map();
const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const store = createStore(reducers, initialState, enhancer);

sagaMiddleware.run(rootSagas);

export default store;
