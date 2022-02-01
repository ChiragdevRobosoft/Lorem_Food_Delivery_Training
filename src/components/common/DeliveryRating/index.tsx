import React, { FC } from "react";
import styled from "styled-components";
import RedStar from "../../../assets/restaurantDetails/icn_star_red.png";
import YellowStar from "../../../assets/restaurantDetails/icn_star_yellow.png";
import GreenStar from "../../../assets/restaurantDetails/icn_star_green.png";
import { fontFamilies, sizes, colors } from "../../../variables";
import Image from "../image";
import { queries } from "../breakpoints";

const DeliveryRating: FC<{
  RatingNum: number;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  id?: string;
}> = (props) => {
  const ratingColor =
    props.RatingNum > 3
      ? `${colors.green_5fb700}`
      : props.RatingNum < 3
      ? `${colors.red_ed1b2e}`
      : `${colors.yellow_f5a623}`;
  const ratingIcon =
    props.RatingNum > 3
      ? GreenStar
      : props.RatingNum < 3
      ? RedStar
      : YellowStar;
  return (
    <RatingConatiner
      ratingColor={ratingColor}
      className={props.className}
      onClick={props.onClick}
      id={props.id}
    >
      <RatingImage src={ratingIcon} className={props.className} />
      <RatingNumber
        RatingNum={props.RatingNum}
        className={props.className}
        ratingColor={ratingColor}
      >
        {props.RatingNum}
      </RatingNumber>
    </RatingConatiner>
  );
};

const RatingConatiner = styled.div<{ ratingColor: string }>`
  box-sizing: border-box;
  height: ${(props) =>
    props.className === "clickable"
      ? "21px"
      : props.className === "reverse-color"
      ? "18px"
      : "26px"};
  width: ${(props) =>
    props.className === "clickable"
      ? "42px"
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
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  ${queries.tablet} {
    width: 18px;
    height: 12px;
    border-radius: ${sizes.size3};
    gap: 1px;
  }
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
  ${queries.tablet} {
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
    height: ${sizes.size11};
  }
`;

const RatingImage = styled(Image)`
  vertical-align: middle;
  height: ${(props) => (props.className === "reverse-color" ? "9px" : "auto")};
  width: ${(props) => (props.className === "reverse-color" ? "9px" : "auto")};
  filter: ${(props) =>
    props.className === "reverse-color"
      ? "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(100%)"
      : "none"};
  ${queries.tablet} {
    width: 7px;
    height: 7px;
  }
`;
export default DeliveryRating;
