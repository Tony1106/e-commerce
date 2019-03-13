import React, {Component} from 'react';
import {connect} from "react-redux";
import BackDrop from "../UI/Backdrop/Backdrop";
import {Form, Button} from "semantic-ui-react";
import classes from "./AddProductToCart.module.css";
import * as cartActionTypes from "../../redux/cart/action";

const options = [
    { key: '32', text: '32', value: '32' },
    { key: '33', text: '33', value: '33' },
    { key: '34', text: '34', value: '34' },
    { key: '35', text: '35', value: '35' },
    { key: '36', text: '36', value: '36' },
    { key: '37', text: '37', value: '37' },
    { key: '38', text: '38', value: '38' },
    { key: '39', text: '39', value: '39' },
    { key: '40', text: '40', value: '40' }
];
class AddProductToCart extends Component {
    state: {
        selectedProduct: null
    };

    componentWillMount(){
        let selectedProduct = this.props.productsInStock.find(product => this.props.productName === product.name);
        selectedProduct.size = '';
        selectedProduct.quantity = 1;
        this.setState({selectedProduct: selectedProduct});
    }
    componentWillUnmount(){
        this.setState({selectedProduct: null})
    }

    sizeChangeHandler = (e, {value}) => {
        const sizeInput = value;
        const updatedSelectedProduct = {
          ...this.state.selectedProduct,
          size: sizeInput
        };
        this.setState({selectedProduct: updatedSelectedProduct});
    };
    quantityChangeHandler = (e) => {
        const quantityInput = e.target.value;
        const updatedSelectedProduct = {
            ...this.state.selectedProduct,
            quantity: quantityInput
        };
        this.setState({selectedProduct: updatedSelectedProduct})
    };

    render(){
        return (

            <React.Fragment>
                <div className={classes.AddProductToCart}>
                        {this.state.selectedProduct ?  (
                                <Form>
                                    <img src={this.state.selectedProduct.imageURL} alt="Product" width="70%"/>
                                    <h3>{this.state.selectedProduct.name}</h3>
                                    <Form.Group>
                                        <Form.Select options={options}
                                                     label='Size: '
                                                     placeholder='Select'
                                                     onChange={this.sizeChangeHandler}
                                                     defaultValue={this.state.selectedProduct.size}/>
                                        <Form.Field label='Quantity:'
                                                    control='input'
                                                    type='number'
                                                    onChange={this.quantityChangeHandler}
                                                    defaultValue={this.state.selectedProduct.quantity}
                                                    min={1} />
                                    </Form.Group>
                                    <Button  disabled={this.state.selectedProduct.quantity <= 0 || this.state.selectedProduct.size == ''  }
                                             color='green' fluid
                                             onClick={ () => {
                                                 this.props.onAddProductToCart(this.state.selectedProduct);
                                                 this.props.onAddingProductToggle()
                                             }}
                                    >
                                        Add To Cart
                                    </Button>
                                </Form>

                        ): null}
                </div>
                <BackDrop show={this.state.selectedProduct}
                          clicked={this.props.onDeselected}
                />
            </React.Fragment>
    )
    }
}

const mapStateToProps = state => {
    return {
        addedProducts: state.cart.addedProducts,
        productsInStock: state.stock.products
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAddProductToCart: (selectedProduct) => {
            dispatch({type: cartActionTypes.ADD_TO_CART, addingProduct: selectedProduct})
        },
        onAddingProductToggle: () => {
            dispatch({type: cartActionTypes.TOGGLE_ADDING_PRODUCT})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToCart);
