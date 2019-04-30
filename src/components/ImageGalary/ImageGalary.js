import React, { Component } from "react";
import styles from "./styles.module.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default class ImageGalary extends Component {
  render() {
    // const images = [
    //   {
    //     original: "http://lorempixel.com/1000/600/nature/1/",
    //     thumbnail: "http://lorempixel.com/250/150/nature/1/"
    //   },
    //   {
    //     original: "http://lorempixel.com/1000/600/nature/2/",
    //     thumbnail: "http://lorempixel.com/250/150/nature/2/"
    //   },
    //   {
    //     original: "http://lorempixel.com/1000/600/nature/3/",
    //     thumbnail: "http://lorempixel.com/250/150/nature/3/"
    //   }
    // ];

    const { images } = this.props;
    images.forEach(item => {
      if (item.hasOwnProperty("url")) {
        item["original"] = item["url"];
        item["thumbnail"] = item["url"];
        item["sizes"] = "320px 190px";
        delete this["url"];
      }
      if (item.hasOwnProperty("src")) {
        item["original"] = item["src"];
        item["thumbnail"] = item["src"];
        item["sizes"] = "320px 190px";
        delete this["url"];
      }
    });
    return (
      <div className={styles.imageContainer}>
        <ImageGallery
          items={this.props.images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
    );
  }
}
