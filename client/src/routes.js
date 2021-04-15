import React from "react";
import { Switch, Route } from "react-router-dom";
import { Signup, Signin } from "./pages";

function routes() {
  return (
    <Switch>
      <Route exact path="/signup">
        <Signup></Signup>
      </Route>
      <Route exact path="/signin">
        <Signin></Signin>
      </Route>
      <Route exact path="/">
        home
      </Route>
      <Route path="*">Not Found</Route>
    </Switch>
  );
}

export default routes();
