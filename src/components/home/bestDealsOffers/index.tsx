import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, sizes } from "../../../variables";

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
    height: ${sizes.size508};
    width: ${sizes.size964};
    margin: ${sizes.size125} ${sizes.size481} ${sizes.size190} ${sizes.size475};
    /*border: 1px solid darkgray;*/
    .content-title {
      height: ${sizes.size83};
      width: ${sizes.size452};
      color: ${colors.grey5};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size50};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size83};
      text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0} ${colors.white};
    }
    .content-discription {
      height: ${sizes.size34};
      width: ${sizes.size541};
      color: ${colors.grey5};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size18};
      letter-spacing: ${sizes.size0_58};
      line-height: ${sizes.size34};
    }
  }
}

`;
