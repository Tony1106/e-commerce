import React, { Component } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { Divider, Button, Dropdown } from "semantic-ui-react";
import ImageGalary from "../../../components/ImageGalary/ImageGalary";
import { arrayOfDeffered } from "redux-saga/utils";
import Axios from "axios";
class ItemDetail extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    image: [],
    options: [
      {
        name: "size",
        value: "X"
      },
      {
        name: "color",
        value: "red"
      }
    ],
    quantity: 1
  };
  componentDidMount() {
    const { pathname } = this.props.history.location;
    const productID = pathname.split("/")[2];
    const products = this.props.products.data;
    let isLoadedProducts = false;
    products.forEach(product => {
      if (product._id === productID) {
        isLoadedProducts = true;
        const { name, description, price, image } = product;
        this.setState({
          name,
          description,
          price,
          image
        });
      }
    });
    if (!isLoadedProducts) {
      Axios.get("/api/product/" + productID).then(res => {
        console.log(res);
        const { name, price, description, image } = res.data;

        this.setState({
          name,
          price,
          description,
          image
        });
      });
    }
  }
  handleChangeQuantity(e, data) {
    console.log(data.value, "change");
  }

  render() {
    const { name, description, price, image } = this.state;

    const options = [];
    for (let i = 0; i < 10; i++) {
      let current = 1;
      let option = {};
      option.key = current + i;
      option.text = current + i;
      option.value = current + i;
      options.push(option);
      current++;
    }
    return (
      <div className={styles.imageDetail}>
        <div className={styles.image}>
          <ImageGalary images={image} />
        </div>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price}</div>
        <Divider />
        <div className={styles.option}>
          <h5>Select your size</h5>
          <p>L M CS</p>
          <h5>Select your Color</h5>
          <p>Green Yellow</p>
        </div>

        <Divider />
        <Dropdown
          placeholder="Skills"
          fluid
          onChange={(e, data) => this.handleChangeQuantity(e, data)}
          selection
          defaultValue={1}
          options={options}
        />
        <Divider />
        <div className={styles.description}>{description}</div>
        <Button className={styles.addToCart} color="red">
          Add To Cart
        </Button>
      </div>
    );
  }
}
export default connect(state => {
  return {
    products: state.product
  };
})(ItemDetail);
