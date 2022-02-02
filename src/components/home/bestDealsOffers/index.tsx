import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, letterSpacing, sizes } from "../../../variables";
import CarouselBDO from "../../common/carousels/bestDealsOffers";
import { queries } from "../../common/breakpoints";
import Label from "../../common/label";

const BestDealsOffers = () => {
  return (
    <Wrapper>
      <Content>
        <TitleLabel content={data.homeTexts.bestDealsOffers.heading} />
        <DescriptionLabel
          content={data.homeTexts.bestDealsOffers.description}
        />
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
  margin: 125px auto 190px auto;
  ${queries.tabletLandscape} {
    width: 771px;
  }
  ${queries.tablet} {
    width: 580px;
  }
`;

const TitleLabel = styled(Label)`
  height: 83px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: ${letterSpacing.space0};
  line-height: 83px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin: 0 auto 10px 0;
  ${queries.tabletLandscape} {
    height: 66px;
    font-size: 40px;
    line-height: 66px;
    margin: 0 auto 5px 0;
  }
  ${queries.tablet} {
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    margin: 0 auto 2.5px 0px;
  }
  ${queries.mobile} {
    height: 33px;
    font-size: 20px;
    line-height: 33px;
    margin: 0 auto 1.75px 0px;
  }
`;

const DescriptionLabel = styled(Label)`
  height: 34px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: 34px;
  margin: 0 auto 53px 0;
  ${queries.tabletLandscape} {
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    margin: 0 auto 42px 0;
  }
  ${queries.tablet} {
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    margin: 0 auto 32px 0;
  }
  ${queries.mobile} {
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    margin: 0 auto 16px 0;
  }
`;
