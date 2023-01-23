/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import { isElectron } from "shared/helpers/validation";

import Formulario from "pages/Formulario";

export default () => {
  const Router = isElectron() ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Switch>
        <Route path="/formulario" component={Formulario} />
        <Redirect to="/formulario" />
      </Switch>
    </Router>
  );
};
