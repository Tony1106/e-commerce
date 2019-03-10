import React, {Component} from 'react';
import Product from '../../../components/Product/Product.js';
import {Input} from "semantic-ui-react";

class Products extends Component{
    state={
        products: [
            {
                name: 'Quan Ao Dai Xanh Den',
                color: 'Xanh Den',
                category: 'Quan Ao Dai',
                imageURL: 'https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554',
                size: '',
                quantity: 0
            },
            {
                name: 'Quan Ao Dai Vang',
                color: 'Vang',
                category: 'Quan Ao Dai',
                imageURL: 'https://farm8.staticflickr.com/7117/7472625218_12c2b915d2_b.jpg',
                size: '',
                quantity: 0
            },
            {
                name: 'Ao Dai Tim Hue',
                color: 'Tim Hue',
                category: 'Ao Dai',
                imageURL: 'https://i.pinimg.com/736x/fb/88/ff/fb88ff905c7a8150a6b79ed8e1811c35.jpg',
                size: '',
                quantity: 0
            }
        ],
        queriedCategory: null,
        searchValue: null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
          const category = param[1];
          this.setState({queriedCategory: category});
            console.log(category);

        }
    }
    searchColorHandler = (e) => {
        this.setState({searchValue: e.target.value});
    };
    render(){
        let products = null;
        if (this.state.queriedCategory){
            products = (
                //First filter is category based
                this.state.products.filter((prod) => {
                    return prod.category.replace(/ /g, '') === this.state.queriedCategory
                //Second filter is search input based
                }).filter(p => {
                    if (this.state.searchValue){
                        return p.color.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
                    }else {
                        return true
                    }

                }).map( product => {
                return <Product key={product.name}
                                name={product.name}
                                color={product.color}
                                category={product.category}
                                imageURL={product.imageURL}
                                size={product.imageURL}
                                quantity={product.quantity}/>
            }));
        }
        return (
            <div>
                <Input fluid placeholder='Color' onChange={this.searchColorHandler}/>
                {products ? products : null}
            </div>
        )

    }
}

export default Products;
