import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import RedStar from "../../../assets/restaurantDetails/icn_star_red.png";
import YellowStar from "../../../assets/restaurantDetails/icn_star_yellow.png";
import GreenStar from "../../../assets/restaurantDetails/icn_star_green.png";
import { fontFamilies, sizes, colors } from "../../../variables";

const DeliveryRating: FC<{
  RatingNum: number;
  className?: string;
  style?: CSSProperties;
}> = ({ RatingNum, className, style }) => {
  const ratingColor =
    RatingNum > 3
      ? `${colors.green_5fb700}`
      : RatingNum < 3
      ? `${colors.red_ed1b2e}`
      : `${colors.yellow_f5a623}`;
  const ratingIcon =
    RatingNum > 3 ? GreenStar : RatingNum < 3 ? RedStar : YellowStar;
  return (
    <RatingConatiner
      ratingColor={ratingColor}
      className={className}
      style={style}
    >
      <RatingImage src={ratingIcon} className={className} />
      <RatingNumber
        RatingNum={RatingNum}
        className={className}
        ratingColor={ratingColor}
      >
        {RatingNum}
      </RatingNumber>
    </RatingConatiner>
  );
};

const RatingConatiner = styled.div<{ ratingColor: string }>`
  box-sizing: border-box;
  height: ${(props) =>
    props.style?.height
      ? props.style.height
      : props.className === "reverse-color"
      ? "18px"
      : "26px"};
  width: ${(props) =>
    props.style?.width
      ? props.style.width
      : props.className === "reverse-color"
      ? "32px"
      : "46px"};
  border: ${sizes.size1} solid
    ${(props) =>
      props.className === "reverse-color" ? "none" : props.ratingColor};
  border-radius: ${sizes.size4};
  background: ${(props) =>
    props.className === "reverse-color"
      ? props.ratingColor
      : `${colors.transparentColor}`};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3px;
`;

const RatingNumber = styled.span<{ RatingNum: number; ratingColor: string }>`
  height: 17px;
  color: ${(props) =>
    props.className === "reverse-color"
      ? `${colors.white_ffffff}`
      : props.ratingColor};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const RatingImage = styled.img`
  vertical-align: middle;
  height: ${(props) => (props.className === "reverse-color" ? "9px" : "auto")};
  width: ${(props) => (props.className === "reverse-color" ? "9px" : "auto")};
  filter: ${(props) =>
    props.className === "reverse-color"
      ? "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(100%)"
      : "none"};
`;
export default DeliveryRating;
