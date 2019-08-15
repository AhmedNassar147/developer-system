import React from "react";
import { ConnectedRouter } from "connected-react-router/immutable";
import history from "./utils/history";
import AppRouter from "./routes";

export default (
  <ConnectedRouter history={history}>
    <AppRouter />
  </ConnectedRouter>
);
