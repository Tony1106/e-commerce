import React, { Component } from "react";
import Category from '../../../components/Category/Category'
export default class Home extends Component {
  render() {
    return (
        <React.Fragment >
            <Category title="Quan Ao Dai"
                      description="Full size and color of quan Ao Dai"
                      imageURL="https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554"/>
        </React.Fragment>
    );
  }
}
