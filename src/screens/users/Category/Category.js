import React, { Component } from "react";

export default class Category extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      console.log(param); // yields ['start', '5']
    }
  }

  render() {
    return <div>Category</div>;
  }
}
