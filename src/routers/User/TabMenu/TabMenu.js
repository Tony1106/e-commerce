import React, { Component } from "react";
import styles from "./styles.module.css";
import { Icon } from "semantic-ui-react";
export default class TabMenu extends Component {
  render() {
    //Check the history path from props to active the menu hightlight
    return (
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.active}`}>
          <Icon name="home" size="large" />
          <div className={styles.text}>Home</div>
        </div>
        <div className={styles.item}>
          <Icon name="list ul" size="large" />
          <div className={styles.text}>Category</div>
        </div>
        <div className={styles.item}>
          <Icon name="user" size="large" />
          <div className={styles.text}>Profile</div>
        </div>
        <div className={styles.item}>
          <Icon name="sign-out" size="large" />
          <div className={styles.text}>Sign Out</div>
        </div>
      </div>
    );
  }
}
