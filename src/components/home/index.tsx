import FoodRestaurantSearch from "./foodRestaurantSearch";
import PopularBrands from "./popularBrands";
import BestDealsOffers from "./bestDealsOffers";
import HowToOrder from "./howToOrder";
import LoremStoreApp from "./loremStoreApp";
import styled from "styled-components";
import BGimage1 from "./../../assets/home/foodRestaurantSearch/BGimage.png";
import BGimage2 from "./../../assets/home/popularBrands/BGimage.png";
import BGimage3 from "./../../assets/home/bestDealsOffers/BGimage.png";
import BGimage4 from "./../../assets/home/howToOrder/BGimage.png";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  opacity,
} from "./../../variables";
import Footer from "../common/footer";

const Home = () => {
  return (
    <Wrapper>
      <div className="one">
        <FoodRestaurantSearch />
      </div>
      <div className="two">
        <PopularBrands />
      </div>
      <div className="three">
        <BestDealsOffers />
      </div>
      <div className="four">
        <HowToOrder />
      </div>
      <div className="five">
        <LoremStoreApp />
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  width: 100%;
  .one {
    background-image: url(${BGimage1});
    background-repeat: no-repeat;
    height: 935px;
    display: flex;
    justify-content: center;
  }
  .two {
    background-image: url(${BGimage2});
    background-repeat: no-repeat;
    height: 617px;
    display: flex;
    justify-content: center;
  }
  .three {
    background-image: url(${BGimage3});
    background-repeat: no-repeat;
    height: 823px;
    display: flex;
    justify-content: center;
  }
  .four {
    background-image: url(${BGimage4});
    background-repeat: no-repeat;
    background-position: right;
    height: 780px;
    display: flex;
  }
  .five {
    height: 847px;
    display: flex;
    justify-content: center;
    background: linear-gradient(206.72deg, #f3f6ff 0%, #ffffff 100%);
    background-repeat: no-repeat;
  }
`;
