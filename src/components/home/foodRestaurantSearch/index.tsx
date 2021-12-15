import Foodsearch from "./foodSearch";
import Header from "../../common/header/header";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="first-page-container">
      <Header />
      <p>
        <span>Order your food</span>
        <span>from the best restaurants</span>
      </p>
      <Foodsearch />
      <div className="scroll-holder">
        <img src={mouseScroll} alt="mouse-scroll" />
        <p>Scroll</p>
      </div>
    </div>
  );
};
export default LandingPage;
