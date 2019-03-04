import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./routers/Admin";
import User from "./routers/User";
export default class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={User} />
      </div>
    );
  }
}
