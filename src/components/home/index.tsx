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

import "./index.scss";

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
    height: 780px;
    display: flex;
    justify-content: center;
  }
  .five {
    height: 847px;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
  }
`;
