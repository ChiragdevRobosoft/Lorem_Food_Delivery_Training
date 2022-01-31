import React, { useState } from "react";
import styled from "styled-components";
import Label from "../../common/label";
import data from "../../common/constants.json";
import { colors, fontFamilies, sizes, angles } from "../../../variables";
import activeIcon from "../../../assets/restaurantDetails/checkbox_active.png";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";
import Image from "../../common/image";
import ClickableRating from "../../common/ClickableRating";
import { queries } from "../../common/breakpoints";

const Ratings = () => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const fileList = (e.target as HTMLInputElement).files;
    console.log(fileList);
  };

  return (
    <Wrapper>
      <Title content={data.ratingCardData.title} />
      {data.ratingCardData.foodServiceData.map((title, index) => {
        return (
          <React.Fragment key={index}>
            <ClickableRating title={title} />
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
  height: 526px;
  width: 303px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  padding: 20px 20px 16px 20px;
  margin-top: 32px;
  ${queries.tablet} {
    width: 230px;
  }
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
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

const ActiveImage = styled(Image)`
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
  ${queries.tablet} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const Title = styled(Label)`
  height: ${sizes.size30};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size30};
  margin-bottom: 13px;
  ${queries.tablet} {
    font-size: ${sizes.size16};
    line-height: ${sizes.size22};
    height: ${sizes.size22};
  }
`;

const SavedLabel = styled(Label)`
  height: ${sizes.size17};
  color: ${colors.black_223136};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-left: 7px;
  ${queries.tablet} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
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
  ${queries.tablet} {
    width: 200px;
  }
`;

const TextboxField = styled(InputField)`
  width: 272px;
  margin: auto;
`;

export default Ratings;
