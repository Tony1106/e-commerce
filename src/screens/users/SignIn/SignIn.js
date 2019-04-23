import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { SIGN_IN } from "../../../redux/auth/action";
import { Header, Message, Icon, Button, Form } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    errorMsg: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    const { username, password } = this.state;
    if (username.length < 6 || password.length < 6) {
      this.setState({
        errorMsg: "Username/Password have to be more than 6 character"
      });
      return;
    }
    const user = {
      username,
      password
    };
    axios
      .post("/api/user/login", user)
      .then(res => {
        if (res.statusText === "OK") {
          const token = res.data;
          localStorage.setItem("token", token);
          this.props.login();
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          errorMsg: err.response.data.message
        });
      });
  };
  render() {
    const errorMsg = this.state.errorMsg ? (
      <Message error header="Error" content={this.state.errorMsg} />
    ) : null;
    return (
      <>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Sign In</Header.Content>
        </Header>
        {errorMsg}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              required
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
              required
            />
          </Form.Field>
          <Button type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default connect(
  null,
  dispatch => {
    return {
      login: () => dispatch({ type: SIGN_IN.success.getType() })
    };
  }
)(SignIn);
