import LandingPage from "./landingPage";
import PopularBrands from "./popularBrands";
import BestDealsOffers from "./bestDealsOffers";
import HowToOrder from "./howToOrder";
import LoremStoreApp from "./loremStoreApp";
import styled from "styled-components";
import "./index.scss";

const MainHomePage = () => {
  return (
    <Wrapper>
      <div className="one">
        <LandingPage />
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
export default MainHomePage;

const Wrapper = styled.div`
  width: 100%;
  .one {
    background-image: url("./../../assets/homepage/landingPage/BGimage.png");
    background-repeat: no-repeat;
    height: 935px;
    display: flex;
    justify-content: center;
  }
  .two {
    background-image: url("./../../assets/homepage/popularBrands/BGimage.png");
    background-repeat: no-repeat;
    height: 617px;
    display: flex;
    justify-content: center;
  }
  .three {
    background-image: url("./../../assets/homepage/bestDealsOffers/BGimage.png");
    background-repeat: no-repeat;
    height: 823px;
    display: flex;
    justify-content: center;
  }
  .four {
    background-image: url("./../../assets/homepage/howToOrder/BGimage.png");
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
