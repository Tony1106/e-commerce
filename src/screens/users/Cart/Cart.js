import React, { Component } from "react";
import { connect } from "react-redux";
import * as A from "../../../redux/cart/action";
import ProductItem from "../../../components/cart/ProductItem/ProductItem";
class Cart extends Component {
  handleDeleteItem = id => {
    console.log(id);
    this.props.deleteCartProduct(id);
  };
  render() {
    console.log(this.props.cart);
    const cart = this.props.cart.addedProducts;
    const productInCart = cart.length;
    return (
      <div>
        <h3>Item ({productInCart})</h3>
        {cart.map((item, i) => (
          <ProductItem
            cartData={item}
            key={i}
            deleteItem={id => this.handleDeleteItem(id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  dispatch => {
    return {
      deleteCartProduct: id => dispatch({ type: A.DELETE_CART_PRODUCT, id })
    };
  }
)(Cart);
