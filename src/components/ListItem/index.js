import React, { useState } from "react";
import styles from "./styles.module.css";
import { Icon } from "semantic-ui-react";
function ListItem({ item }) {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <div className={styles.container}>
      <div className={styles.ListItem} onClick={() => setIsShow(!isShow)}>
        <Icon name={item.icon} size="big" color={item.color} />
        <div style={{ color: `${item.color}` }}>{item.title}</div>
        <div className={styles.showDetail}>
          <Icon name={!isShow ? "angle down" : "angle right"} size="large" />
        </div>
      </div>
      {isShow ? (
        <div className={styles.childItemContainer}>
          {item.listItem.map((item, i) => (
            <ChildItem key={i} title={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ChildItem({ title }) {
  return <div className={styles.childItem}>{title}</div>;
}

export { ListItem, ChildItem };
