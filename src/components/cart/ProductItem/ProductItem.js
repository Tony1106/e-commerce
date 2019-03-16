import React from "react";
import styles from "./styles.module.css";
export default function ProductItem(props) {
  const { color, imageURL, name, quantity, size } = props.cartData;
  console.log(props, "props");

  return (
    <div className={styles.itemContainer}>
      <div className={styles.container}>
        <div className={styles.left} />
        <div className={styles.right}>
          <div className={styles.titles}>{name}</div>
          <div className={styles.options}>
            <div className={styles.size}>Size: {size}</div>
            <div className={styles.color}>Color: {color}</div>
            <div className={styles.quantity}>Color: {quantity}</div>
          </div>
          <div className={styles.price}>demo$</div>
        </div>
      </div>
      <div className={styles.removeItem}>
        {" "}
        <button className={styles.button}>Remove item</button>{" "}
      </div>
    </div>
  );
}
