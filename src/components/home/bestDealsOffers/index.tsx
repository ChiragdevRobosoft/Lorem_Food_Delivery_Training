import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, letterSpacing, sizes } from "../../../variables";
import CarouselBDO from "../../common/carousels/bestDealsOffers";

const BestDealsOffers = () => {
  return (
    <Wrapper>
      <Content>
        <ContentTitle>{data.homeTexts.bestDealsOffers.heading}</ContentTitle>
        <Description>{data.homeTexts.bestDealsOffers.description}</Description>
        <CarouselBDO />
      </Content>
    </Wrapper>
  );
};
export default BestDealsOffers;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 508px;
  width: 964px;
  margin: 125px 481px 190px 475px;
`;

const ContentTitle = styled.p`
  height: 83px;
  width: 452px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: ${letterSpacing.space0};
  line-height: 83px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin: 0 auto 10px 0;
`;

const Description = styled.p`
  height: 34px;
  width: 541px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: 34px;
  margin: 0 auto 53px 0;
`;
