import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, sizes } from "../../../variables";
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
  height: ${sizes.size508};
  width: ${sizes.size964};
  margin: ${sizes.size125} ${sizes.size481} ${sizes.size190} ${sizes.size475};
`;

const ContentTitle = styled.p`
  height: ${sizes.size83};
  width: ${sizes.size452};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size83};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white};
  margin: ${sizes.size0} auto ${sizes.size10} ${sizes.size0};
`;

const Description = styled.p`
  height: ${sizes.size34};
  width: ${sizes.size541};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${sizes.size0_58};
  line-height: ${sizes.size34};
  margin: ${sizes.size0} auto ${sizes.size53} ${sizes.size0};
`;
