import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../screens/admin/SignIn/SignIn";
import SignUp from "../screens/admin/SignUp/SignUp";
export default function Admin(props) {
  console.log(props);

  return (
    <div>
      this is admin page
      <Switch>
        <Route path="/admin/signin" component={SignIn} />
        <Route path="/admin/signUp" component={SignUp} />
      </Switch>
    </div>
  );
}
