import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.logo}>
              <h2>Thuy Hoang</h2>
          </div>
        <div className={styles.listIcon}>
          <Icon name="search" size="large" />
          <Link to="/cart">
            {" "}
            <Icon name="cart" size="large" />
          </Link>
        </div>
      </div>
    );
  }
}
