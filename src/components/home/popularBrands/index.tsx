import styled from "styled-components";
import CarouselPB from "../../common/carousels/popularBrands";
import data from "./../../common/constants.json";
import { colors, fontFamilies, letterSpacing, sizes } from "../../../variables";
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
  height: ${sizes.size510};
  width: ${sizes.size966};
  margin: ${sizes.size65} ${sizes.size479} ${sizes.size73} ${sizes.size480};
`;

const Title = styled.p`
  height: ${sizes.size83};
  width: ${sizes.size362};
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
  width: ${sizes.size776};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: ${sizes.size34};
  margin: ${sizes.size0} auto ${sizes.size25} ${sizes.size4};
`;
