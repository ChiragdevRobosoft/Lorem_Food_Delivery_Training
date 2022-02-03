import styled from "styled-components";
import CarouselPB from "../../common/carousels/popularBrands";
import data from "./../../common/constants.json";
import { colors, fontFamilies, letterSpacing, sizes } from "../../../variables";
import { queries } from "../../common/breakpoints";
const PopularBrands = () => {
  return (
    <Wrapper>
      <BrandsContainer>
        <Title>{data.homeTexts.popularBrands.heading}</Title>
        <Description>{data.homeTexts.popularBrands.description}</Description>
        <CarouselPB />
      </BrandsContainer>
    </Wrapper>
  );
};
export default PopularBrands;

const Wrapper = styled.div`
  display: flex;
`;

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 510px;
  width: 966px;
  margin: ${sizes.size65} auto ${sizes.size73} auto;
  ${queries.tablet} {
    width: 566px;
  }
  ${queries.tabletLandscape} {
    width: 766px;
  }
`;

const Title = styled.p`
  height: 83px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 50px;
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size83};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white_ffffff};
  margin: ${sizes.size0} auto ${sizes.size10} ${sizes.size0};
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

const Description = styled.p`
  height: 34px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: ${sizes.size34};
  margin: 0 auto 25px 4px;
  ${queries.tabletLandscape} {
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    margin: 0 auto 20px 3px;
  }
  ${queries.tablet} {
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    margin: 0 auto 15px 2px;
  }
  ${queries.mobile} {
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    margin: 0 auto 10px 1px;
  }
`;
