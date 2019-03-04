import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../screens/users/SignIn/SignIn";
import SignUp from "../screens/users/SignUp/SignUp";
export default function Admin(props) {
  console.log(props);

  return (
    <div>
      this is user page menu
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </div>
  );
}
