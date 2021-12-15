import "./Firstpage.scss";
import Foodsearch from "./Foodsearch/Foodsearch";
import Header from "./Header/Header";
import mouseScroll from "./../../../assets/homepage/Firstpage/mouse-scroll.png";

const Firstpage = () => {
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
export default Firstpage;
