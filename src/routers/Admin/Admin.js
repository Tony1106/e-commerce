import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../../screens/admin/SignIn/SignIn";
import SignUp from "../../screens/admin/SignUp/SignUp";
import { FullPageContainer } from "../../components/Containers/index";
export default function Admin(props) {
  return (
    <FullPageContainer>
      <div>
        <h1>Please Sign In or Sign Up to continue</h1>
        <button>Sign In</button>
        <button>Sign Up</button>
        <Switch>
          <Route path="/admin/signin" component={SignIn} />
          <Route path="/admin/signUp" component={SignUp} />
        </Switch>
      </div>
    </FullPageContainer>
  );
}
