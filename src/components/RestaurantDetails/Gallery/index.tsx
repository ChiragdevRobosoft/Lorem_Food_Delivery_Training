import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../common/image";
import FoodImage1 from "../../../assets/restaurantDetails/gallery_food_image1.png";
import FoodImage2 from "../../../assets/restaurantDetails/gallery_food_image2.png";
import Label from "../../common/label";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
import data from "../../common/constants.json";
import downArrow from "../../../assets/common/dropdown/down_arrow.png";
import GalleryPopover from "../GalleryPopover";
import { queries } from "../../common/breakpoints";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    setSelected(Number(e.currentTarget.id));
    handleClose();
  };
  const handleClose = () => {
    setOpen(!open);
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
    <Wrapper>
      <TitleContainer>
        <TitleLabel content={data.gallery.title} />
        <ArrowImage src={downArrow} />
      </TitleContainer>
      <GalleryContainer>
        {Array(12)
          .fill(galleryImages)
          .flat()
          .map((image, index) => {
            return (
              <GalleryImage
                key={index}
                src={image.imageSrc}
                onClick={handleSelect}
                id={index.toString()}
              />
            );
          })}
      </GalleryContainer>
      <ViewLabel content={data.gallery.viewText} />
      <GalleryPopover
        open={open}
        handleClose={handleClose}
        selected={selected}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 972px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 129px;
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.tablet} {
    width: 375px;
  }
`;

const TitleContainer = styled.div`
  height: 38px;
  width: 130px;
  border-radius: ${sizes.size4};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_015};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  ${queries.tablet} {
    width: 100px;
    height: 28px;
  }
`;

const TitleLabel = styled(Label)`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: 0.1px;
  line-height: ${sizes.size19};
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
`;

const ArrowImage = styled(Image)`
  object-fit: none;
`;

const GalleryContainer = styled.div`
  width: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 19px;
  ${queries.tablet} {
    row-gap: 5px;
  }
`;

const ViewLabel = styled(Label)`
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_17};
  margin-left: auto;
  margin-top: 17px;
  color: ${colors.transparentColor};
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_f27489},
    ${colors.orange_faa369}
  );
  background-clip: text;
  -webkit-background-clip: text;
  ${queries.tablet} {
    ${queries.tablet} {
      font-size: ${sizes.size12};
      line-height: ${sizes.size16};
      height: ${sizes.size16};
    }
  }
`;

const GalleryImage = styled(Image)`
  height: 131px;
  width: 140px;
  border-radius: ${sizes.size4};
  ${queries.tablet} {
    width: 90px;
    height: auto;
  }
`;

export default Gallery;
