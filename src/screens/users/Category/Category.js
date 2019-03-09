import React, { Component } from "react";
import { ListItem } from "../../../components/ListItem/index";
export default class Category extends Component {
  state = {
    category: [
      {
        listItem: ["Áo dài", "Quần áo dài", "Áo Sơ Mi"],
        icon: "female",
        title: "Women",
        color: "green"
      },
      {
        listItem: ["Áo thun", "Áo khoác", "Quần Jean"],
        icon: "male",
        title: "Men",
        color: "red"
      },
      {
        listItem: ["Nơ", "Cột tóc", "Bình sữa"],
        icon: "child",
        title: "Baby",
        color: "green"
      }
    ]
  };
  render() {
    const { category } = this.state;
    let listItem = category.map((item, i) => <ListItem key={i} item={item} />);

    return <div style={{ marginTop: "10px" }}>{listItem}</div>;
  }
}
