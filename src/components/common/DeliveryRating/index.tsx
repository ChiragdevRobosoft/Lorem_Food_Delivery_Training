import React, { FC } from "react";
import styled from "styled-components";
import RedStar from "../../../assets/restaurantDetails/icn_star_red.png";
import YellowStar from "../../../assets/restaurantDetails/icn_star_yellow.png";
import GreenStar from "../../../assets/restaurantDetails/icn_star_green.png";
import { fontFamilies, sizes, colors } from "../../../variables";

const DeliveryRating: FC<{ RatingNum: number }> = ({ RatingNum }) => {
  return (
    <RatingConatiner RatingNum={RatingNum}>
      <Image
        src={RatingNum > 3 ? GreenStar : RatingNum < 3 ? RedStar : YellowStar}
      />
      <RatingNumber RatingNum={RatingNum}>{RatingNum}</RatingNumber>
    </RatingConatiner>
  );
};

const RatingConatiner = styled.div<{ RatingNum: number }>`
  box-sizing: border-box;
  height: 26px;
  width: 46px;
  border: ${sizes.size1} solid
    ${(props) =>
      props.RatingNum > 3
        ? `${colors.green_5fb700}`
        : props.RatingNum < 3
        ? `${colors.red_ed1b2e}`
        : `${colors.yellow_f5a623}`};
  border-radius: ${sizes.size4};
  margin-right: 17.13px;
`;

const RatingNumber = styled.span<{ RatingNum: number }>`
  height: 17px;
  color: ${(props) =>
    props.RatingNum > 3
      ? `${colors.green_5fb700}`
      : props.RatingNum < 3
      ? `${colors.red_ed1b2e}`
      : `${colors.yellow_f5a623}`};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const Image = styled.img`
  vertical-align: middle;
  margin-left: 8.61px;
  margin-right: 4.22px;
`;
export default DeliveryRating;
