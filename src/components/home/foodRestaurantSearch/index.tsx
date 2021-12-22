import Foodsearch from "./../../common/foodSearchBox/index";
import Header from "../../common/header/index";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";
import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, opacity, sizes } from "../../../variables";

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <p>
        <span>{data.homeTexts.foodRestaurantSearch.heading}</span>
        <span>{data.homeTexts.foodRestaurantSearch.description}</span>
      </p>
      <Foodsearch pageType="home" />
      <div className="scroll-holder">
        <img src={mouseScroll} alt="mouse-scroll" />
        <p>Scroll</p>
      </div>
    </Wrapper>
  );
};
export default LandingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: ${sizes.size0} ${sizes.size788} ${sizes.size63} ${sizes.size413};
    height: ${sizes.size166};
    width: ${sizes.size719};
    color: ${colors.grey5};
    font-family: "Open Sans", sans-serif;
    font-size: ${sizes.size60};
    letter-spacing: ${sizes.size0};
    line-height: ${sizes.size83};
    text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
      ${colors.white};
    align-items: left;

    span {
      display: block;
    }
  }
  .scroll-holder {
    margin: ${sizes.size0} ${sizes.size900} ${sizes.size38} ${sizes.size901};
    height: ${sizes.size77};
    width: ${sizes.size119};
    display: block;
    img {
      margin: ${sizes.size0} ${sizes.size43_82} ${sizes.size10}
        ${sizes.size43_18};
      height: ${sizes.size49};
      width: ${sizes.size32};
    }
    p {
      margin: ${sizes.size0} ${sizes.size0_45} ${sizes.size0} ${sizes.size0};
      height: ${sizes.size18};
      width: ${sizes.size118_55};
      font-size: ${sizes.size13};
      opacity: ${opacity.opacity0_66};
      font-family: "Open Sans", sans-serif;
      letter-spacing: ${sizes.size3_66};
      line-height: ${sizes.size18};
      text-align: center;
    }
  }
`;
