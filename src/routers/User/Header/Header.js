import React, { Component } from "react";
import styles from "./styles.module.css";
import { Icon } from "semantic-ui-react";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo} />
        <div className={styles.listIcon}>
          <Icon name="search" size="large" />
          <Icon name="cart" size="large" />
        </div>
      </div>
    );
  }
}
