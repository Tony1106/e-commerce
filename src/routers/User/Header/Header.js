import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
class Header extends Component {
  render() {
    const productInCart = this.props.cart.addedProducts.length;
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Thuy Hoang</h2>
        </div>
        <div className={styles.listIcon}>
          <Icon name="search" size="large" />
          <Link to="/cart" className={styles.cart}>
            {" "}
            <Icon name="cart" size="large" />
            <div className={styles.cartLabel}>{productInCart}</div>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(Header);
