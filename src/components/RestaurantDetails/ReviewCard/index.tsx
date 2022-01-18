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
      <Container>
        <IconWrapper>
          <UserIcon src={UserImage} />
        </IconWrapper>
        <Container className="column">
          <ReviewerName content={cardDetails.name} />
          <ReviewsRatingsLabel content={reviewsRatingsText} />
          <DeliveryRating
            RatingNum={cardDetails.ratingNum}
            className="reverse-color"
          />
        </Container>
      </Container>
      {cardDetails.reviews !== undefined ? (
        <ReviewsText content={cardDetails.reviews} />
      ) : null}
      <LikeContainer>
        <DateLabel content={cardDetails.date} />
        <Container>
          <CheckboxInput
            type="checkbox"
            id={cardDetails.name}
            value={cardDetails.name}
          />
          <CheckboxLabel
            htmlFor={cardDetails.name}
            content={cardDetails.likesCount.toString()}
          />
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

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.className === "column" ? "column" : "row"};
`;

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

const CheckboxLabel = styled(Label)`
  height: 17px;
  width: 17px;
  color: ${colors.grey_b9b9b9};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  margin-left: 9px;
`;

const LikeContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin-top: 21px;
  height: 17px;
`;

const FoodImageContainer = styled(Container)`
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 12px;
`;

const FoodImage = styled.img`
  height: 85.32px;
`;

const ReviewerName = styled(Label)`
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  margin-bottom: 2px;
`;

const ReviewsRatingsLabel = styled(Label)`
  height: ${sizes.size17};
  color: ${colors.grey_757575};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  margin-bottom: 9px;
`;

const ReviewsText = styled(Label)`
  display: inline-block;
  height: auto;
  color: ${colors.grey_757575};
  font-size: ${sizes.size12};
  margin-top: 16px;
`;

const DateLabel = styled(Label)`
  height: ${sizes.size17};
  color: ${colors.grey_b9b9b9};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
`;

export default ReviewCard;
