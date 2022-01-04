import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, sizes } from "../../../variables";
import CarouselBDO from "../../common/carousels/bestDealsOffers";

const BestDealsOffers = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <ContentTitle>{data.homeTexts.bestDealsOffers.heading}</ContentTitle>
        <ContentDescrp>
          {data.homeTexts.bestDealsOffers.description}
        </ContentDescrp>
        <CarouselBDO />
      </ContentDiv>
    </Wrapper>
  );
};
export default BestDealsOffers;

const Wrapper = styled.div`
  display: flex;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: ${sizes.size508};
  width: ${sizes.size964};
  margin: ${sizes.size125} ${sizes.size481} ${sizes.size190} ${sizes.size475};
  /*border: 1px solid darkgray;*/
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
  margin: 0 auto 10px 0;
`;

const ContentDescrp = styled.p`
  height: ${sizes.size34};
  width: ${sizes.size541};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${sizes.size0_58};
  line-height: ${sizes.size34};
  margin: 0 auto 53px 0;
`;
