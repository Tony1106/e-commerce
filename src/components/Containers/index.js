import React from "react";
import styles from "./styles.module.css";
function TextContainer(props) {
  return <div className={styles.textContainer}>{props.children}</div>;
}
function FullPageContainer(props) {
  return <div className={styles.fullPageContainer}>{props.children}</div>;
}

export { TextContainer, FullPageContainer };
