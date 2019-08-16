import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import WorkspacesPage from "./pages/WorkSpaces";
import ProtectedRoute from "./pages/ProtectedRoute";

export default (
  <Switch>
    <Route path="/" exact component={AuthPage} />
    <ProtectedRoute PageComponent={WorkspacesPage} pagePath="/workspaces" />
  </Switch>
);
