import React, { Component } from "react";
import Category from '../../../components/Category/Category';
import Product from '../../../components/Product/Product';

export default class Categories extends Component {

  state ={
    categories: [
      {
        name: 'Quan Ao Dai',
        imageURL: 'https://media3.scdn.vn/img2/2018/1_12/quan-ao-dai-truyen-thong-ong-rong-nhiu-mau-du-size-co-size-lon-xxl-1m4G3-Xc4Wyx_simg_ab1f47_350x350_maxb.jpg',
        description: 'Full sizes and colors of Quan Ao Dai'
      },
      {
        name: 'Ao Dai',
        imageURL: 'https://www.dhresource.com/0x0s/f2-albu-g7-M01-9C-1F-rBVaSlt6MGyAesRyAAEyfeKeycQ006.jpg/traditional-vietnam-ao-dai-elegant-slim-long.jpg',
        description: 'Ao Dai in many sizes and colors'
      }
    ],
    displayQuery: null
  };


  render() {
    let categories = (
        this.state.categories.map((category)=> {
          return <Category key={category.name} name={category.name} imageURL={category.imageURL} description={category.description}/>
        })
    );

    return (
        <div>
          {categories}
        </div>
    );
  }
}
