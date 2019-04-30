// import React, { PureComponent } from "react";
// import { ListItem } from "../../../components/ListItem/index";
// import { connect } from "react-redux";
// import * as A from "../../../redux/product/action";
// class Category extends PureComponent {
//   state = {
//     category: [
//       {
//         listItem: ["Áo dài", "Quần áo dài", "Áo Sơ Mi"],
//         icon: "female",
//         title: "Women",
//         color: "black"
//       },
//       {
//         listItem: ["Áo thun", "Áo khoác", "Quần Jean"],
//         icon: "male",
//         title: "Men",
//         color: "red"
//       },
//       {
//         listItem: ["Nơ", "Cột tóc", "Bình sữa"],
//         icon: "child",
//         title: "Baby",
//         color: "green"
//       }
//     ]
//   };
//   PureComponentDidMount(){
//     this.props.fetchProduct();
//   }
//   render() {
//     const category = this.props.products;
//     let listItem = category.map((item, i) => <ListItem key={i} item={item} />);
//     return <div style={{ marginTop: "10px" }}>{listItem}</div>;
//   }
// }

// const mapStateToProps = state => ({
//   products: state.product
// });
// export default connect(
//   mapStateToProps,
//   dispatch => {
//     return {
//       fetchProduct: product => dispatch(A.fetchProduct.request(product))
//     };
//   }
// )(Category);
