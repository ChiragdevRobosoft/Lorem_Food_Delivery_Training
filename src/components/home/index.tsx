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
import Footer from "../common/footer";

const Home = () => {
  return (
    <HomeContainer>
      <HomeScreens imgUrl={BGimage1} height={`${sizes.size935}`}>
        <FoodRestaurantSearch />
      </HomeScreens>
      <HomeScreens imgUrl={BGimage2} height={`${sizes.size617}`}>
        <PopularBrands />
      </HomeScreens>
      <HomeScreens imgUrl={BGimage3} height={`${sizes.size823}`}>
        <BestDealsOffers />
      </HomeScreens>
      <HomeScreens
        imgUrl={BGimage4}
        height={`${sizes.size780}`}
        backGroundPosition="center"
      >
        <HowToOrder />
      </HomeScreens>
      <HomeScreens
        height={`${sizes.size847}`}
        backgroundColor={`linear-gradient(${angles.angle206_72} ${colors.lightblue1} 0%, ${colors.white} 100%)`}
      >
        <LoremStoreApp />
      </HomeScreens>
      <Footer />
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
`;
interface HomeScreensProps {
  imgUrl?: string;
  height: string;
  backGroundPosition?: string;
  backgroundColor?: string;
}
const HomeScreens = styled.div<HomeScreensProps>`
  background-image: ${(props) =>
    props.imgUrl ? `url(${props.imgUrl})` : null};
  height: ${(props) => props.height};
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  background-position: ${(props) =>
    props.backGroundPosition ? props.backGroundPosition : "center"};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
`;
