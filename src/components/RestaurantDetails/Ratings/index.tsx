import React, { useState } from "react";
import styled from "styled-components";
import Label from "../../common/label";
import data from "../../common/constants.json";
import { colors, fontFamilies, sizes, angles } from "../../../variables";
import DeliveryRating from "../../common/DeliveryRating";
import activeIcon from "../../../assets/restaurantDetails/checkbox_active.png";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";

const Ratings = () => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const fileList = (e.target as HTMLInputElement).files;
    console.log(fileList);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const siblings = (
      (e.currentTarget as HTMLElement).parentNode as HTMLElement
    ).children;
    Array.from(siblings).map((sibling: Element, index: number) => {
      if (sibling.id !== e.currentTarget.id) {
        const unSelected = document.getElementById(sibling.id);
        if (!unSelected) return;
        unSelected.style.filter = "none";
      } else {
        const selected = document.getElementById(e.currentTarget.id);
        if (!selected) return;
        selected.style.filter =
          "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(50%)";
      }
    });
  };
  return (
    <Wrapper>
      <Title content={data.ratingCardData.title} />
      {data.ratingCardData.foodServiceData.map((title, index) => {
        return (
          <React.Fragment key={index}>
            <RatingLabel content={title} />
            <RatingContainer>
              {data.ratingCardData.ratingNumbers.map((ratingNum, index) => {
                return (
                  <DeliveryRating
                    key={index}
                    onClick={handleClick}
                    RatingNum={ratingNum}
                    style={{ width: "42px", height: "21px" }}
                    id={`${title}${ratingNum.toString()}`}
                  />
                );
              })}
            </RatingContainer>
            <Underline />
            <SavedContainer>
              <ActiveImage src={activeIcon} />
              <SavedLabel content={data.ratingCardData.saved} />
            </SavedContainer>
          </React.Fragment>
        );
      })}
      <ReviewTitle content={data.ratingCardData.reviewTitle} />
      <TextboxField name={data.ratingCardData.reviewLabel} isPassword={false} />
      <ImageUploadContainer>
        <ImageLabel
          content={data.ratingCardData.imageUploadTitle}
          htmlFor="images"
        />
        <ImageUpload type="file" multiple id="images" onChange={handleChange} />
      </ImageUploadContainer>
      <SubmitButton name={data.ratingCardData.buttonText} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 303px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  padding: 20px 20px 16px 20px;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const RatingContainer = styled(RowFlex)`
  justify-content: space-between;
  width: 245px;
`;

const Underline = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 100%;
  border: 1px solid ${colors.white_ededed};
  margin-top: 15px;
`;

const SavedContainer = styled(RowFlex)`
  justify-content: flex-end;
  margin-top: 9px;
  margin-bottom: 33px;
`;

const ActiveImage = styled.img`
  object-fit: none;
`;

const ImageUploadContainer = styled(RowFlex)`
  justify-content: flex-end;
  margin-top: 14px;
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageLabel = styled(Label)`
  height: ${sizes.size19};
  width: 84px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  text-align: right;
`;

const Title = styled(Label)`
  height: ${sizes.size30};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size30};
  margin-bottom: 13px;
`;

const RatingLabel = styled(Label)`
  color: ${colors.grey_565454};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  margin-bottom: 15px;
`;

const SavedLabel = styled(Label)`
  height: ${sizes.size17};
  color: ${colors.black_223136};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-left: 7px;
`;

const ReviewTitle = styled(Label)`
  height: ${sizes.size17};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-bottom: 11px;
`;

const SubmitButton = styled(Buttons)`
  width: 263px;
  background: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  margin-top: 31px;
`;

const TextboxField = styled(InputField)`
  width: 272px;
  margin: auto;
`;

export default Ratings;
