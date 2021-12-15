import Secondpage from "./popularBrands";
import Thirdpage from "./bestDealsOffers";
import Fifthpage from "./loremStoreApp";
import LandingPage from "./landingPage";
import "./index.scss";
import Fourthpage from "./howToOrder";

const MainHomePage = () => {
  return (
    <div className="container">
      <div className="one">
        <LandingPage />
      </div>
      <div className="two">
        <Secondpage />
      </div>
      <div className="three">
        <Thirdpage />
      </div>
      <div className="four">
        <Fourthpage />
      </div>
      <div className="five">
        <Fifthpage />
      </div>
    </div>
  );
};
export default MainHomePage;

/*
<div className="container">
      <section className="one">
        <h1> First Page</h1>
      </section>
      <section className="two">
        <h1> second Page</h1>
      </section>
      <section className="three">
        <h1> third Page</h1>
      </section>
      <section className="four">
        <h1> fourth Page</h1>
      </section>
      <section className="five">
        <h1> Fifth Page</h1>
      </section>
    </div>
    */
