import React, { useState, FC, CSSProperties } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "../../../assets/restaurantDetails/cancel.png";
import Image from "../../common/image";
import FoodImage1 from "../../../assets/restaurantDetails/gallery_food_image1.png";
import FoodImage2 from "../../../assets/restaurantDetails/gallery_food_image2.png";
import nextButton from "../../../assets/common/carousels/next_button.png";
import disabledNextButton from "../../../assets/common/carousels/nextButtonDisabled.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sizes, colors, fontFamilies } from "../../../variables";
import Label from "../../common/label";
const Carousel = require("react-responsive-carousel").Carousel;

const GalleryPopover: FC<{
  open: boolean;
  handleClose: () => void;
  selected: number;
}> = ({ open, handleClose, selected }) => {
  const modalStyles = {
    maxWidth: "1100px",
    margin: "0",
    padding: "0",
    background: "transparent",
    boxShadow: "none",
  };
  const renderArrow =
    (direction: string) =>
    (
      onClickHandler: React.MouseEventHandler<HTMLInputElement>,
      shouldBeEnabled: boolean
    ) => {
      const carouselStyles: CSSProperties = {
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 2,
        display: "inline-block",
        boxSizing: "border-box",
        height: "57px",
        width: "55px",
        backgroundImage: `url(${disabledNextButton})`,
        backgroundPosition: "center",
      };
      if (direction === "prev") {
        carouselStyles.right = 56;
        carouselStyles.borderRight = `1px solid ${colors.grey_979797}`;
      } else {
        carouselStyles.right = 0;
        carouselStyles.borderRight = `1px solid ${colors.grey_979797}`;
      }
      if (!shouldBeEnabled) {
        if (direction === "next") {
          carouselStyles.transform = "scaleX(-1)";
        }
        return <div style={carouselStyles}></div>;
      }
      carouselStyles.backgroundImage = `url(${nextButton})`;
      if (direction === "prev") {
        carouselStyles.transform = "scaleX(-1)";
      }
      return <div onClick={onClickHandler} style={carouselStyles}></div>;
    };
  const galleryImages = [
    {
      name: "Chicken wings",
      imageSrc: FoodImage1,
    },
    {
      name: "The Nachos cream stone",
      imageSrc: FoodImage2,
    },
  ];
  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      styles={{ modal: modalStyles }}
      closeIcon={<Image src={CloseIcon} />}
    >
      <CarouselContainer>
        <Carousel
          renderArrowPrev={renderArrow("prev")}
          renderArrowNext={renderArrow("next")}
          showArrows={true}
          showIndicators={false}
          showStatus={true}
          infiniteLoop={false}
          showThumbs={false}
          className="main-slide"
          selectedItem={selected}
        >
          {Array(12)
            .fill(galleryImages)
            .flat()
            .map((image, index) => {
              return (
                <React.Fragment key={index}>
                  <PopoverImage src={image.imageSrc} onClick={handleClose} />
                  <FoodName content={image.name} />
                </React.Fragment>
              );
            })}
        </Carousel>
      </CarouselContainer>
    </Modal>
  );
};

const PopoverImage = styled(Image)`
  height: 613px;
  width: 960px;
  border-radius: ${sizes.size6};
  object-fit: cover;
`;

const FoodName = styled(Label)`
  float: left;
  height: ${sizes.size36};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size26};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size36};
  margin-top: 12px;
  left: 0;
`;

const CarouselContainer = styled.div`
  margin: 48px 40px;
  .main-slide {
    height: 680px;
    width: 960px;
    margin: 0;
    border-radius: ${sizes.size6};
    background-color: ${colors.transparentColor};
  }
  .carousel {
    height: 680px;
    width: 960px;
    .carousel-status {
      top: auto;
      bottom: 0;
      right: 121px;
      height: ${sizes.size24};
      color: ${colors.grey_d6d3d3};
      font-family: ${fontFamilies.fontFamilyOsSemiBold};
      font-size: ${sizes.size18};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size24};
    }
  }
`;
export default GalleryPopover;
