import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
