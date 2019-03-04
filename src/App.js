import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./routers/Admin/Admin";
import User from "./routers/User";
export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={User} />
      </div>
    );
  }
}
