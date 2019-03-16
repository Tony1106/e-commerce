import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../../components/cart/ProductItem/ProductItem";
class Cart extends Component {
  render() {
    console.log(this.props.cart);
    const cart = this.props.cart.addedProducts;
    const productInCart = cart.length;
    return (
      <div>
        <h3>Item ({productInCart})</h3>
        {cart.map((item, i) => (
          <ProductItem cartData={item} key={i} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(Cart);
