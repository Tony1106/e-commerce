import React, { Component } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
class Profile extends Component {
  render() {
    const { username } = this.props.user;
    return (
      <div className={styles.container}>
        <div className={styles.avatar}>
          <div className={styles.image} />
          <div className={styles.name}>{username}</div>
        </div>
        <ul className={styles.listMenu}>
          <li className={styles.menuItem}>My Order</li>
          <li className={styles.menuItem}>My WishList</li>
          <li className={styles.menuItem}>My Address</li>
          <li className={styles.menuItem}>Account Setting</li>
        </ul>
      </div>
    );
  }
}
export default connect(state => {
  return {
    user: state.auth
  };
})(Profile);
