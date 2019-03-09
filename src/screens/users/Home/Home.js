import React, { Component } from "react";
import styles from "./styles.module.css";
export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bannerTop}> </div>
        <ul className={styles.bannerSmall}>
          <li className={styles.banner} />
          <li className={styles.banner} />
          <li className={styles.banner} />
          <li className={styles.banner} />
        </ul>
        <div className={styles.dealOfTheDay}>
          <div className={styles.header}>
            <div>Deals Of The Day</div>
            <div>
              <button>View all</button>
            </div>
          </div>
          <div className={styles.dealItems}>Item 1, 2, 3, 4</div>
        </div>
      </div>
    );
  }
}
