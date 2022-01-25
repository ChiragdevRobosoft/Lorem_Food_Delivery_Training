import React from "react";
import styled from "styled-components";
import Image from "../../common/image";
import FoodImage from "../../../assets/restaurantDetails/gallery_food_image.png";
import Label from "../../common/label";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
import data from "../../common/constants.json";
import downArrow from "../../../assets/common/dropdown/down_arrow.png";

const Gallery = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <TitleLabel content={data.gallery.title} />
        <ArrowImage src={downArrow} />
      </TitleContainer>
      <GalleryContainer>
        {Array(24)
          .fill(FoodImage)
          .map((image, index) => {
            return <Image key={index} src={image} />;
          })}
      </GalleryContainer>
      <ViewLabel content={data.gallery.viewText} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 129px;
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
`;

const TitleLabel = styled(Label)`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: 0.1px;
  line-height: ${sizes.size19};
`;

const ArrowImage = styled(Image)`
  object-fit: none;
`;

const GalleryContainer = styled.div`
  width: auto;
  height: 584px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 19px;
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
`;

export default Gallery;
