import React from "react";
import styled from "styled-components";
import Label from "../../common/label";
import data from "../../common/constants.json";
import { colors, sizes } from "../../../variables";
import Dropdown from "../../common/Dropdown";
import ArrowUp from "../../../assets/common/dropdown/long-arrow-pointing-up.png";
import ArrowDown from "../../../assets/common/dropdown/long-arrow-pointing-down.png";
import ReviewCard from "../ReviewCard";
import Ratings from "../Ratings";

const ReviewsRatings = () => {
  return (
    <Wrapper>
      <ReviewsContainer>
        <ReviewsTitleContainer>
          <ReviewsTitle content={data.reviewsRatingsData.title} />
          <DropdownContainer>
            <DropdownLabel content={data.reviewsRatingsData.dropdownTitle} />
            <Dropdown
              name={data.reviewsRatingsData.dropdownTitle}
              options={[
                {
                  content: `${data.reviewsRatingsData.dropdownContent}`,
                  image: ArrowUp,
                },
                {
                  content: `${data.reviewsRatingsData.dropdownContent}`,
                  image: ArrowDown,
                },
              ]}
            />
          </DropdownContainer>
        </ReviewsTitleContainer>
        {data.reviewCard.map((review, index) => {
          return <ReviewCard key={index} cardDetails={review} />;
        })}
      </ReviewsContainer>
      <Ratings />
    </Wrapper>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled(FlexRow)`
  width: 972px;
  margin-top: 48px;
  gap: 27px;
  padding-bottom: 100px;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 630px;
`;

const ReviewsTitleContainer = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 11px;
`;

const ReviewsTitle = styled(Label)`
  color: ${colors.grey_4a4a4a};
  letter-spacing: ${sizes.sizeNeg0_27};
`;

const DropdownLabel = styled(Label)`
  height: ${sizes.size19};
  color: ${colors.grey_6a6a6a}
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
`;

const DropdownContainer = styled(FlexRow)`
  gap: 11px;
  align-items: center;
`;

export default ReviewsRatings;
