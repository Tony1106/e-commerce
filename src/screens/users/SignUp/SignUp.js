import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Header, Image, Icon, Message, Button, Form } from "semantic-ui-react";
class SignUp extends Component {
  state = {
    username: "",
    password: "",
    avatar: "https://image.flaticon.com/icons/png/512/1680/1680372.png",
    errorMsg: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    axios
      .post("/api/user", user)
      .then(res => {
        if (res.statusText === "OK") {
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
          <Header.Content>Sign up</Header.Content>
        </Header>
        {errorMsg}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Choose your avatar</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                gridRowGap: "20px"
              }}
            >
              <label>
                <input
                  type="radio"
                  value="https://image.flaticon.com/icons/png/512/1680/1680372.png"
                  onChange={this.handleChange}
                  name="avatar"
                  checked
                />
                <Image
                  src="https://image.flaticon.com/icons/png/512/1680/1680372.png"
                  size="tiny"
                  rounded
                  centered
                />
              </label>
              <label>
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="avatar"
                  value="https://image.flaticon.com/icons/svg/1665/1665001.svg"
                />
                <Image
                  src="https://image.flaticon.com/icons/svg/1665/1665001.svg"
                  size="tiny"
                  rounded
                  centered
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="avatar"
                  onChange={this.handleChange}
                  value="https://www.flaticon.com/premium-icon/icons/svg/1090/1090793.svg"
                />
                <Image
                  src="https://www.flaticon.com/premium-icon/icons/svg/1090/1090793.svg"
                  size="tiny"
                  rounded
                  centered
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="avatar"
                  onChange={this.handleChange}
                  value="https://image.flaticon.com/icons/svg/1665/1665013.svg"
                />
                <Image
                  src="https://image.flaticon.com/icons/svg/1665/1665013.svg"
                  size="tiny"
                  rounded
                />
              </label>
            </div>
          </Form.Field>
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
export default withRouter(SignUp);
