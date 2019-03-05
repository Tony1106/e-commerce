import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./routers/Admin/Admin";
import User from "./routers/User/User";
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={User} />
        </Switch>
      </div>
    );
  }
}
