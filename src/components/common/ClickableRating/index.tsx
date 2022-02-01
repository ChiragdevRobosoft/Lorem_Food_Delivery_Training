import React, { FC } from "react";
import styled from "styled-components";
import data from "../constants.json";
import DeliveryRating from "../DeliveryRating";
import Label from "../label";
import { colors, sizes, fontFamilies } from "../../../variables";
import { queries } from "../breakpoints";

const ClickableRating: FC<{ title: string }> = ({ title }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const siblingElements = (
      (e.currentTarget as HTMLElement).parentNode as HTMLElement
    ).children;
    Array.from(siblingElements).map(
      (siblingElement: Element, index: number) => {
        if (siblingElement.id !== e.currentTarget.id) {
          const unSelected = document.getElementById(siblingElement.id);
          if (!unSelected) return;
          return (unSelected.style.filter = "none");
        } else {
          const selected = document.getElementById(e.currentTarget.id);
          if (!selected) return;
          return (selected.style.filter =
            "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(50%)");
        }
      }
    );
  };
  return (
    <Wrapper>
      <RatingLabel content={title} />
      <RatingContainer>
        {data.ratingCardData.ratingNumbers.map((ratingNum, index) => {
          return (
            <DeliveryRating
              key={index}
              onClick={handleClick}
              RatingNum={ratingNum}
              id={`${title}${ratingNum.toString()}`}
              className="clickable"
            />
          );
        })}
      </RatingContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: auto;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RatingLabel = styled(Label)`
  display: inline-block;
  color: ${colors.grey_565454};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  margin-bottom: 15px;
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
`;

export default ClickableRating;
