import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import styles from "./Category.module.css";

class Category extends Component {
  // console.log(props);

  viewProductsHandler = () => {
    this.props.history.push(
      "/products?category=" + this.props.name.replace(/ /g, "")
    );
  };
  handleClick = () => {

  }


  render() {
    const { image, description, name, price, _id } = this.props;
    return (
      <Link className={styles.child} to={"/item-detail/"+_id} params={{productID:_id}}>
        <Image src={(image&&image[0].src) || 'https://www.groupize.com/wp-content/uploads/2018/06/image-demo-b-2-400x320.png'} size="small" />
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </Link>
    );
  }
}

export default withRouter(Category);
