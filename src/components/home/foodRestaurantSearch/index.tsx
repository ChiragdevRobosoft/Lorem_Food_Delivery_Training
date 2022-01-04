import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, opacity, sizes } from "../../../variables";
import Foodsearch from "./../../common/foodSearchBox/index";
import Header from "../../common/header/index";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";

const FoodRestaurantSearch = () => {
  return (
    <Wrapper>
      <Header className="home" />
      <HeadingText>
        <Headingspan>{data.homeTexts.foodRestaurantSearch.heading}</Headingspan>
        <Headingspan>
          {data.homeTexts.foodRestaurantSearch.description}
        </Headingspan>
      </HeadingText>
      <Foodsearch pageType="home" />
      <ScrollDiv>
        <ScrollImage src={mouseScroll} alt="mouse-scroll" />
        <ScrollText>
          {data.homeTexts.foodRestaurantSearch.scrollText}
        </ScrollText>
      </ScrollDiv>
    </Wrapper>
  );
};
export default FoodRestaurantSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadingText = styled.p`
  margin: ${sizes.size0} ${sizes.size788} ${sizes.size63} ${sizes.size413};
  height: ${sizes.size166};
  width: ${sizes.size719};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size60};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size83};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white};
  align-items: left;
`;
const Headingspan = styled.span`
  display: block;
`;

const ScrollDiv = styled.div`
  margin: ${sizes.size0} ${sizes.size900} ${sizes.size38} ${sizes.size901};
  height: ${sizes.size77};
  width: ${sizes.size119};
  display: block;
`;

const ScrollImage = styled.img`
  margin: ${sizes.size0} ${sizes.size43_82} ${sizes.size10} ${sizes.size43_18};
  height: ${sizes.size49};
  width: ${sizes.size32};
`;

const ScrollText = styled.p`
  margin: ${sizes.size0} ${sizes.size0_45} ${sizes.size0} ${sizes.size0};
  height: ${sizes.size18};
  width: ${sizes.size118_55};
  font-size: ${sizes.size13};
  opacity: ${opacity.opacity0_66};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  letter-spacing: ${sizes.size3_66};
  line-height: ${sizes.size18};
  color: ${colors.grey9};
  text-align: center;
`;
