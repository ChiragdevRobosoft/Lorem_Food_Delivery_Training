import React, { FC } from "react";
import styled from "styled-components";
import RedStar from "../../../assets/menu/icn_star_red.png";
import YellowStar from "../../../assets/menu/icn_star_yellow.png";
import GreenStar from "../../../assets/menu/icn_star_green.png";
import { fontFamilies } from "../../../variables";

interface RatingProps {
  RatingNum: number;
}
const DeliveryRating: FC<RatingProps> = ({ RatingNum }) => {
  return (
    <RatingConatiner RatingNum={RatingNum}>
      <Image
        src={RatingNum > 3 ? GreenStar : RatingNum < 3 ? RedStar : YellowStar}
      />
      <RatingNumber RatingNum={RatingNum}>{RatingNum}</RatingNumber>
    </RatingConatiner>
  );
};

const RatingConatiner = styled.div<RatingProps>`
  box-sizing: border-box;
  height: 26px;
  width: 46px;
  border: 1px solid
    ${(props) =>
      props.RatingNum > 3
        ? `#5FB700`
        : props.RatingNum < 3
        ? `#ED1B2E`
        : `#F5A623`};
  border-radius: 4px;
  margin-right: 17.13px;
`;

const RatingNumber = styled.span<RatingProps>`
  height: 17px;
  color: ${(props) =>
    props.RatingNum > 3
      ? `#5FB700`
      : props.RatingNum < 3
      ? `#ED1B2E`
      : `#F5A623`};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
`;

const Image = styled.img`
  vertical-align: middle;
  margin-left: 8.61px;
  margin-right: 4.22px;
`;
export default DeliveryRating;
