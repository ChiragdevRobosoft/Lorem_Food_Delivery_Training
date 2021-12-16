import styled from "styled-components";
import data from "./../../common/constants.json";

const BestDealsOffers = () => {
  return (
    <Wrapper>
      <div className="content-container">
        <p className="content-title">
          {data.homeTexts.bestDealsOffers.heading}
        </p>
        <p className="content-discription">
          {data.homeTexts.bestDealsOffers.description}
        </p>
      </div>
    </Wrapper>
  );
};
export default BestDealsOffers;

const Wrapper = styled.div`
display: flex;
  .content-container {
    display: flex;
    flex-direction: column;
    height: 508px;
    width: 964px;
    margin: 125px 481px 190px 475px;
    /*border: 1px solid darkgray;*/
    .content-title {
      height: 83px;
      width: 452px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 50px;
      letter-spacing: 0;
      line-height: 83px;
      text-shadow: 0 0 9px 0 #ffff;
    }
    .content-discription {
      height: 34px;
      width: 541px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 18px;
      letter-spacing: 0.58;
      line-height: 34px;
    }
  }
}

`;
