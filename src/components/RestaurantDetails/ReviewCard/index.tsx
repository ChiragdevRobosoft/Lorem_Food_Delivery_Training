import React, { FC } from "react";
import styled from "styled-components";
import Label from "../../common/label";
import UserImage from "../../../assets/common/header/noUser.svg";
import { colors, fontFamilies, sizes } from "../../../variables";
import DeliveryRating from "../../common/DeliveryRating";
import likeActive from "../../../assets/restaurantDetails/like_active.png";
import likeInactive from "../../../assets/restaurantDetails/like_inactive.png";
import reviewFoodImage from "../../../assets/restaurantDetails/review_food_image.png";
import { reviewCardProps } from "../../common/interfaces";
import data from "../../common/constants.json";

const ReviewCard: FC<{ cardDetails: reviewCardProps }> = ({ cardDetails }) => {
  const reviewsRatingsText = `${cardDetails.reviewsCount} ${data.reviews} ${cardDetails.ratingsCount} ${data.ratings}`;
  return (
    <Wrapper>
      <ReviewContainer>
        <IconWrapper>
          <UserIcon src={UserImage} />
        </IconWrapper>
        <Container>
          <Label
            content={cardDetails.name}
            color={colors.grey_4a4a4a}
            fontFamily={fontFamilies.fontFamilyOsSemiBold}
            letterSpacing={sizes.size0}
            marginBottom="2px"
          />
          <Label
            content={reviewsRatingsText}
            height={sizes.size17}
            color={colors.grey_757575}
            fontSize={sizes.size12}
            letterSpacing={sizes.size0}
            lineHeight={sizes.size17}
            marginBottom="9px"
          />
          <DeliveryRating
            RatingNum={cardDetails.ratingNum}
            className="reverse-color"
          />
        </Container>
      </ReviewContainer>
      {cardDetails.reviews !== undefined ? (
        <Label
          content={cardDetails.reviews}
          height="auto"
          color={colors.grey_757575}
          fontSize={sizes.size12}
          letterSpacing={sizes.size0}
          marginTop="16px"
        />
      ) : null}
      <LikeContainer>
        <Label
          content={cardDetails.date}
          height={sizes.size17}
          color={colors.grey_b9b9b9}
          fontSize={sizes.size12}
          letterSpacing={sizes.size0}
          lineHeight={sizes.size17}
        />
        <Container>
          <CheckboxInput
            type="checkbox"
            id={cardDetails.name}
            value={cardDetails.name}
          />
          <CheckboxLabel htmlFor={cardDetails.name}>
            {cardDetails.likesCount}
          </CheckboxLabel>
        </Container>
      </LikeContainer>
      <FoodImageContainer>
        {[...Array(cardDetails.images)].map((count: number, index: number) => {
          return <FoodImage key={index} src={reviewFoodImage} />;
        })}
      </FoodImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 630px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  padding: 17px 22px 21px 20px;
  margin-bottom: 20px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconWrapper = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${colors.grey_d8d8d8};
  border-radius: ${sizes.halfWidth};
  justify-content: center;
  position: relative;
  margin-right: 18px;
`;

const UserIcon = styled.img`
  height: 25px;
  width: 25px;
  align-items: center;
  margin: 9px;
`;

const Container = styled.div``;

const CheckboxInput = styled.input`
  width: 18px;
  height: 16px;
  -webkit-appearance: none;
  vertical-align: middle;
  background-repeat: no-repeat;
  margin: 0;

  :checked {
    background-image: url(${likeActive});
  }

  &:checked + label {
    color: ${colors.orange_f67e03};
  }

  :not(:checked) {
    background-image: url(${likeInactive});
  }

  &:not(:checked) + label {
    color: ${colors.grey_b9b9b9};
  }
`;

const CheckboxLabel = styled.label`
  height: 17px;
  width: 17px;
  color: ${colors.grey_b9b9b9};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-left: 9px;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin-top: 21px;
  height: 17px;
`;

const FoodImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 12px;
`;

const FoodImage = styled.img`
  height: 85.32px;
`;

export default ReviewCard;
