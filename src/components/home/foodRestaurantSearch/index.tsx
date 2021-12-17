import Foodsearch from "../../common/foodSearchBox";
import Header from "../../common/header/index";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";
import styled from "styled-components";
import data from "./../../common/constants.json";

interface FoodSearchProps {
  pageTpe: string;
}

const LandingPage = () => {
  let ptype = "home";
  return (
    <Wrapper>
      <Header />
      <p>
        <span>{data.homeTexts.foodRestaurantSearch.heading}</span>
        <span>{data.homeTexts.foodRestaurantSearch.description}</span>
      </p>
      <Foodsearch pageType={ptype} />
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
    margin: 0px 788px 63px 413px;
    height: 166px;
    width: 719px;
    color: #4c4c4c;
    font-family: "Open Sans", sans-serif;
    font-size: 60px;
    letter-spacing: 0;
    line-height: 83px;
    text-shadow: 0 0 9px 0 #fff;
    align-items: left;

    span {
      display: block;
    }
  }
  .scroll-holder {
    margin: 0px 900px 38px 901px;
    height: 77px;
    width: 119px;
    display: block;
    img {
      margin: 0px 43.82px 10px 43.18px;
      height: 49px;
      width: 32px;
    }
    p {
      margin: 0px 0.45px 0px 0px;
      height: 18px;
      width: 118.55px;
      font-size: 13px;
      opacity: 0.66;
      font-family: "Open Sans", sans-serif;
      letter-spacing: 3.66px;
      line-height: 18px;
      text-align: center;
    }
  }
`;
