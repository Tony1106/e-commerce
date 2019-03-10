import React, { Component } from "react";
import Category from "../../../components/Category/Category";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Category
          name="Quan Ao Dai"
          description="Full size and color of quan Ao Dai"
          imageURL="https://media3.scdn.vn/img2/2018/1_12/quan-ao-dai-truyen-thong-ong-rong-nhiu-mau-du-size-co-size-lon-xxl-1m4G3-Xc4Wyx_simg_ab1f47_350x350_maxb.jpg"
        />
      </React.Fragment>
    );
  }
}
