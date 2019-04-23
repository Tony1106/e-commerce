import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { SIGN_OUT } from "../../../redux/auth/action";
class TabMenu extends PureComponent {
  logout = () => {
    localStorage.removeItem("token");
    this.props.signOut();
  };
  render() {
    const { isLogin } = this.props;
    console.log(isLogin, "is login");

    let checkLoginJSX;
    if (!isLogin) {
      checkLoginJSX = (
        <NavLink to="/user/signin" activeStyle={{ color: "#ffd600" }}>
          <Icon name="sign-out" size="large" />
          <div className={styles.text}>Log In</div>
        </NavLink>
      );
    } else {
      checkLoginJSX = (
        <a onClick={this.logout} href="/">
          <Icon name="sign-out" size="large" />
          <div className={styles.text}>Log Out</div>
        </a>
      );
    }
    return (
      <ul className={styles.container}>
        <li className={styles.item}>
          <NavLink to="/home" activeStyle={{ color: "#ffd600" }}>
            <Icon name="home" size="large" />
            <div className={styles.text}>Home</div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/category" activeStyle={{ color: "#ffd600" }}>
            <Icon name="list ul" size="large" />
            <div className={styles.text}>Category</div>
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/profile" activeStyle={{ color: "#ffd600" }}>
            <Icon name="user" size="large" />
            <div className={styles.text}>Profile</div>
          </NavLink>
        </li>
        <li className={styles.item}>{checkLoginJSX}</li>
      </ul>
    );
  }
}
export default connect(
  state => {
    return {
      isLogin: state.auth.isLogin
    };
  },
  dispatch => {
    return {
      signOut: () => dispatch({ type: SIGN_OUT.success.getType() })
    };
  }
)(TabMenu);
