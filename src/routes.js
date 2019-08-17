import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import ProtectedRoute from "./pages/ProtectedRoute";
import Workspaces from "./pages/WorkSpaces";
import MyWorkSpace from "./pages/MyWorkSpace";

const WorkspacesPage = ProtectedRoute(Workspaces);
const MyWorkSpacePage = ProtectedRoute(MyWorkSpace, true);

export default (
  <Switch>
    <Route path="/" exact component={AuthPage} />
    <Route component={WorkspacesPage} exact path="/workspaces" />
    <Route component={MyWorkSpacePage} exact path="/workspace/:wsId" />
  </Switch>
);
