import React from "react";
import styled from "styled-components";
import Label from "../../common/label";
import UserImage from "../../../assets/common/header/noUser.svg";
import { colors, fontFamilies, sizes } from "../../../variables";
import DeliveryRating from "../../common/DeliveryRating";

const ReviewCard = ({ cardDetails }: { cardDetails: any }) => {
  const reviewsCount = cardDetails.reviewsCount;
  const ratingsCount = cardDetails.ratingsCount;
  return (
    <Wrapper>
      <ReviewContainer>
        <IconWrapper>
          <UserIcon src={UserImage} />
        </IconWrapper>
        <ReviewerDetail>
          <Label
            content={cardDetails.name}
            color={colors.grey_4a4a4a}
            fontFamily={fontFamilies.fontFamilyOsSemiBold}
            letterSpacing={sizes.size0}
          />
          <Label
            content={reviewsCount + " reviews," + ratingsCount + " ratings"}
            height={sizes.size17}
            color={colors.grey_757575}
            fontSize={sizes.size12}
            letterSpacing={sizes.size0}
            lineHeight={sizes.size17}
          />
          <DeliveryRating
            RatingNum={cardDetails.ratingNum}
            className="reverse-color"
          />
        </ReviewerDetail>
      </ReviewContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 630px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 17px 22px 24px 20px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconWrapper = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${colors.grey_d8d8d8};
  border-radius: 50%;
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

const ReviewerDetail = styled.div``;

export default ReviewCard;
