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
  const handleChange = (e: any) => {
    const fileList = e.target.files;
    console.log(fileList);
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
                    RatingNum={ratingNum}
                    style={{ width: "42px", height: "21px" }}
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
      <InputField
        name={data.ratingCardData.reviewLabel}
        isPassword={false}
        style={{
          width: "100%",
          margin: "auto",
          color: `${colors.grey_4a4a4a}`,
          borderBottom: "1px solid #A4A4A4",
        }}
      />
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
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 20px 16px 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 245px;
`;

const Underline = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 100%;
  border: 1px solid #ededed;
  margin-top: 15px;
`;

const SavedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 9px;
  margin-bottom: 33px;
`;

const ActiveImage = styled.img`
  object-fit: none;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 14px;
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageLabel = styled(Label)`
  height: 19px;
  width: 84px;
  color: #f57c00;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 19px;
  text-align: right;
`;

const Title = styled(Label)`
  height: 30px;
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
  height: 17px;
  color: #223136;
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-left: 7px;
`;

const ReviewTitle = styled(Label)`
  height: 17px;
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-bottom: 11px;
`;

const SubmitButton = styled(Buttons)`
  width: 273px;
  background: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  margin-top: 31px;
`;

export default Ratings;
