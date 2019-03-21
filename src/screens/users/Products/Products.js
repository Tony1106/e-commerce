import React, { Component } from "react";
import Product from "../../../components/Product/Product.js";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import AddProductToCart from "../../../components/AddProductToCart/AddProductToCart";
import * as cartActionTypes from "../../../redux/cart/action";

class Products extends Component {
  state = {
    queriedCategory: null,
    searchValue: null,
    productNameSelected: null
  };

  // Get queried category from the param
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      const category = param[1];
      this.setState({ queriedCategory: category });
    }
  }

  searchColorHandler = e => {
    this.setState({ searchValue: e.target.value });
  };

  productSelectedHandler = productName => {
    this.setState({ productNameSelected: productName });
    this.props.onAddingProductToggle();
  };

  productDeselectedHandler = () => {
    this.setState({ productNameSelected: null });
    this.props.onAddingProductToggle();
  };

  render() {
    // Display products based on queried Category
    let products = null;
    if (this.state.queriedCategory) {
      products =
        //First filter is category based
        this.props.products
          .filter(prod => {
            return (
              prod.category.replace(/ /g, "") === this.state.queriedCategory
            );
            //Second filter is search input based
          })
          .filter(p => {
            if (this.state.searchValue) {
              return (
                p.color
                  .toLowerCase()
                  .indexOf(this.state.searchValue.toLowerCase()) !== -1
              );
            } else {
              return true;
            }
          })
          .map(product => {
            return (
              <Product
                key={product.name}
                name={product.name}
                color={product.color}
                category={product.category}
                imageURL={product.imageURL}
                onProductSelected={() => {
                  this.productSelectedHandler(product.name);
                }}
              />
            );
          });
    }

    //addProductToCart Pop Up
    let addProductToCartPopUp = null;
    if (this.state.productNameSelected && this.props.isAddingProducts)
      addProductToCartPopUp = (
        <AddProductToCart
          productName={this.state.productNameSelected}
          show={this.state.productNameSelected}
          onDeselected={this.productDeselectedHandler}
        />
      );

    return (
      <div>
        {addProductToCartPopUp}

        <Input fluid placeholder="Color" onChange={this.searchColorHandler} />
        {products ? products : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.stock.products,
    isAddingProducts: state.cart.isAddingProducts,
    addedProducts: state.cart.addedProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingProductToggle: () => {
      dispatch({ type: cartActionTypes.TOGGLE_ADDING_PRODUCT });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
