import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
export default class TabMenu extends Component {
  render() {
    //Check the history path from props to active the menu hightlight
    console.log(this.props);
    let isHome = false;
    const { pathname } = this.props;
    console.log(this.props.match);
    pathname && pathname === "/home" ? (isHome = true) : (isHome = false);
    return (
      <div className={styles.container}>
        {/* <Link to="/"> */}
        <Link
          to="/"
          className={`${styles.item} ${isHome === true ? styles.active : ""}`}
        >
          <Icon name="home" size="large" />
          <div className={styles.text}>Home</div>
        </Link>
        {/* </Link> */}

        <Link to="/category" className={styles.item}>
          <Icon name="list ul" size="large" />
          <div className={styles.text}>Category</div>
        </Link>

        <Link to="profile" className={styles.item}>
          <Icon name="user" size="large" />
          <div className={styles.text}>Profile</div>
        </Link>
        <Link to="/more" className={styles.item}>
          <Icon name="sign-out" size="large" />
          <div className={styles.text}>More</div>
        </Link>
      </div>
    );
  }
}
