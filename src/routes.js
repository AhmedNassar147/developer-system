import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import WorkspacesPage from "./pages/WorkSpaces";

export default () => (
  <Switch>
    <Route path="/" exact component={AuthPage} />
    <Route path="/workspaces" exact component={WorkspacesPage} />
  </Switch>
);
