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
import { angles, sizes, colors } from "./../../variables";
import { homeScreenDivs } from "../../mixins";
import "./index.scss";

const Home = () => {
  return (
    <HomeContainer>
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
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: ${sizes.size0};
  padding: ${sizes.size0};
  box-sizing: border-box;
  .one {
    ${homeScreenDivs({ imageUrl: BGimage1, height: `${sizes.size935}` })}
  }
  .two {
    ${homeScreenDivs({ imageUrl: BGimage2, height: `${sizes.size617}` })}
  }
  .three {
    ${homeScreenDivs({ imageUrl: BGimage3, height: `${sizes.size823}` })}
  }
  .four {
    ${homeScreenDivs({ imageUrl: BGimage4, height: `${sizes.size780}` })}
    background-position: right;
  }
  .five {
    ${homeScreenDivs({ height: `${sizes.size847}` })}
    background: linear-gradient(${angles.angle206_72} ${colors.lightblue1} 0%, #ffffff 100%);
  }
`;
