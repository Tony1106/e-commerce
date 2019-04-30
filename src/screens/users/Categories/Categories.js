import React, { Component } from "react";
import Category from "../../../components/Category/Category";
// import Product from '../../../components/Product/Product';
import { connect } from "react-redux";
import * as A from "../../../redux/product/action";
import styles from "./styles.module.css";
class Categories extends Component {
  state = {
    categories: [
      {
        name: "Quan Ao Dai",
        price: "20$",
        imageURL:
          "https://media3.scdn.vn/img2/2018/1_12/quan-ao-dai-truyen-thong-ong-rong-nhiu-mau-du-size-co-size-lon-xxl-1m4G3-Xc4Wyx_simg_ab1f47_350x350_maxb.jpg",
        description: "Full sizes and colors of Quan Ao Dai"
      },
      {
        name: "Quan Ao Dai",
        price: "20$",
        imageURL:
          "https://media3.scdn.vn/img2/2018/1_12/quan-ao-dai-truyen-thong-ong-rong-nhiu-mau-du-size-co-size-lon-xxl-1m4G3-Xc4Wyx_simg_ab1f47_350x350_maxb.jpg",
        description: "Full sizes and colors of Quan Ao Dai"
      },
      {
        name: "Quan Ao Dai",
        price: "20$",
        imageURL:
          "https://media3.scdn.vn/img2/2018/1_12/quan-ao-dai-truyen-thong-ong-rong-nhiu-mau-du-size-co-size-lon-xxl-1m4G3-Xc4Wyx_simg_ab1f47_350x350_maxb.jpg",
        description: "Full sizes and colors of Quan Ao Dai"
      },
      {
        name: "Ao Dai",
        price: "50$ ",
        imageURL:
          "https://www.dhresource.com/0x0s/f2-albu-g7-M01-9C-1F-rBVaSlt6MGyAesRyAAEyfeKeycQ006.jpg/traditional-vietnam-ao-dai-elegant-slim-long.jpg",
        description: "Ao Dai in many sizes and colors"
      }
    ],
    displayQuery: null
  };
  componentDidMount(){
    this.props.fetchProduct();
  }

  render() {
    const products = this.props.products.data;
    console.log(products, 'product');
    let categories = products&&products.map(product => {
      return (
        <Category
          key={product._id}
          _id={product._id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      );
    });

    return <div className={styles.container}>{categories}</div>;
  }
}
const mapStateToProps = state => ({
  products: state.product
});
export default connect(
  mapStateToProps,
  dispatch => {
    return {
      fetchProduct: product => dispatch(A.fetchProduct.request(product))
    };
  }
)(Categories);