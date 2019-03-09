import React, { Component } from "react";
import styles from "./styles.module.css";
export default class Profile extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.avatar}>
          <div className={styles.image} />
          <div className={styles.name}>Tony Bui</div>
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
