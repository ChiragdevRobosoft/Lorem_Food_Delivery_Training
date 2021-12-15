import React, { CSSProperties, FC } from "react";
import "./index.scss";
import Pizzahut from "../../../../assets/restaurantList/Pizzahut.png";
import Kfc from "../../../../assets/restaurantList/Kfc.png";
import ChickenTikka from "../../../../assets/restaurantList/ChickenTikka.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./data.json";
const Carousel = require("react-responsive-carousel").Carousel;

const renderArrow =
  (direction: string) =>
  (onClickHandler: any, shouldBeEnabled: boolean, label: any) => {
    if (!shouldBeEnabled) {
      return;
    }

    const styles: CSSProperties = {
      position: "absolute",
      top: "45%",
      zIndex: 2,
      border: "solid #3E3E3E",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "3.5px",
      boxSizing: "border-box",
      height: "9.45px",
      width: "4.58px",
      opacity: 0.5,
    };

    if (direction === "prev") {
      styles.left = 10;
      styles.transform = "rotate(135deg)";
    } else {
      styles.transform = "rotate(-45deg)";
      styles.right = 10;
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

const BrandsCard = () => {
  return (
    <Carousel
      renderArrowPrev={renderArrow("prev")}
      renderArrowNext={renderArrow("next")}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      className="main-slide"
    >
      <div className="flex-display">
        <>
          <img src={Pizzahut} className="brand-icon" />
          <img src={Kfc} className="brand-icon" />
          <img src={ChickenTikka} className="brand-icon" />
          <img src={Pizzahut} className="brand-icon" />
        </>
        <>
          <div className="brand-name">Pizza Hut</div>
          <div className="brand-name">KFC</div>
          <div className="brand-name">Chicken Tikka</div>
          <div className="brand-name">Pizza Hut</div>
        </>
        <>
          <div className="brand-outlets">2 outlets</div>
          <div className="brand-outlets">5 outlets</div>
          <div className="brand-outlets">5 outlets</div>
          <div className="brand-outlets">3 outlets</div>
        </>
      </div>
    </Carousel>
  );
};

export default BrandsCard;
