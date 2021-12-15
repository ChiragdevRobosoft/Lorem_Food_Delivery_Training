import "./Fourthpage.scss";
import firstStep from "./../../../assets/homepage/Fourthpage/page4-left.png";
import secondStep from "./../../../assets/homepage/Fourthpage/page4-center.png";
import thirdStep from "./../../../assets/homepage/Fourthpage/page4-right.png";
import pathOne from "./../../../assets/homepage/Fourthpage/Path1.png";
import pathTwo from "./../../../assets/homepage/Fourthpage/Path2.png";

const Fourthpage = () => {
  return (
    <div className="fourth-page-container">
      <div className="title-discrp-container">
        <p className="content-title">How to Order</p>
        <p className="content-discription">
          Giving you an easiest way to look for the best food that can be
          ordered.
        </p>
      </div>
      <div className="steps-container">
        <div className="first-step">
          <img className="first-step-img" src={firstStep} alt="first-step" />
          <p>Explore restaurants that deliver to your doorstep.</p>
        </div>
        <img className="path-wave" src={pathOne} alt="pathOne" />
        <div className="second-step">
          <img src={secondStep} alt="second-step" />
          <p>Browse menus and build your order in seconds.</p>
        </div>
        <img className="path-wave" src={pathTwo} alt="pathTwo" />
        <div className="third-step">
          <img src={thirdStep} alt="third-step" />
          <p>Follow the status of your order with real-time alerts.</p>
        </div>
      </div>
    </div>
  );
};
export default Fourthpage;
