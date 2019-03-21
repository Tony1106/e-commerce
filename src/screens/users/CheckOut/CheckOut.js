import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import InputCheckOut from "../../../components/Form/InputCheckOut/InputCheckOut";
export default class CheckOut extends Component {
  render() {
    return (
      <div>
        {" "}
        <Header as="h3" block style={{ textAlign: "center" }}>
          Please fill the information below to finish
        </Header>
        <InputCheckOut />
      </div>
    );
  }
}
