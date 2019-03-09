import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
export default class TabMenu extends Component {
  render() {
    return (
      <ul className={styles.container}>
          <li className={styles.item}>
            <NavLink to="/home" activeStyle={{color: '#ffd600'}}>
              <Icon name="home" size="large" />
              <div className={styles.text}>Home</div>
            </NavLink>
          </li>
          <li className={styles.item}>
              <NavLink to='/category' activeStyle={{color: '#ffd600'}}>
                  <Icon name="list ul" size="large" />
                  <div className={styles.text}>Category</div>
              </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to="/profile" activeStyle={{color: '#ffd600'}}>
              <Icon name="user" size="large" />
              <div className={styles.text}>Profile</div>
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/more" activeStyle={{color: '#ffd600'}}>
              <Icon name="sign-out" size="large" />
              <div className={styles.text}>More</div>
            </NavLink>
          </li>
      </ul>
    );
  }
}
