import React from "react";
import styled from "styled-components";
import Label from "../../common/label";
import data from "../../common/constants.json";
import { colors, fontFamilies, sizes } from "../../../variables";
import DeliveryRating from "../../common/DeliveryRating";
import activeIcon from "../../../assets/restaurantDetails/checkbox_active.png";
import InputField from "../../common/textbox";

const Ratings = () => {
  return (
    <Wrapper>
      <Label
        content={data.ratingCardData.title}
        height="30px"
        color={colors.black_000000}
        fontFamily={fontFamilies.fontFamilyOsSemiBold}
        fontSize={sizes.size22}
        letterSpacing={sizes.sizeNeg0_24}
        lineHeight={sizes.size30}
        marginBottom="13px"
      />
      {data.ratingCardData.foodServiceData.map((title, index) => {
        return (
          <React.Fragment>
            <Label
              content={title}
              color={colors.grey_565454}
              fontFamily={fontFamilies.fontFamilyOsSemiBold}
              letterSpacing={sizes.sizeNeg0_24}
              marginBottom="15px"
            />
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
              <Label
                content={data.ratingCardData.saved}
                height="17px"
                color="#223136"
                fontSize={sizes.size12}
                letterSpacing={sizes.size0}
                lineHeight={sizes.size17}
                marginLeft="2px"
              />
            </SavedContainer>
          </React.Fragment>
        );
      })}
      <Label
        content={data.ratingCardData.reviewTitle}
        height="17px"
        font-size={sizes.size12}
        letter-spacing={sizes.sizeNeg0_24}
        line-height={sizes.size17}
        marginBottom="11px"
      />
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
        <ImageLabel>
          <ImageUpload type="file" />
          {data.ratingCardData.imageUploadTitle}
        </ImageLabel>
      </ImageUploadContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
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
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
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

export default Ratings;
