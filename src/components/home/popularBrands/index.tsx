import styled from "styled-components";
import CarouselPB from "../../common/carousels/popularBrands";
import data from "./../../common/constants.json";
const PopularBrands = () => {
  return (
    <Wrapper>
      <div className="content-container">
        <p className="content-title">{data.homeTexts.popularBrands.heading}</p>
        <p className="content-discription">
          {data.homeTexts.popularBrands.description}
        </p>
        <CarouselPB />
      </div>
    </Wrapper>
  );
};
export default PopularBrands;

const Wrapper = styled.div`
  display: flex;
  .content-container {
    display: flex;
    flex-direction: column;
    height: 510px;
    width: 966px;
    margin: 65px 479px 73px 480px;
    border: 1px solid darkgray;
    .content-title {
      height: 83px;
      width: 362px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 50px;
      letter-spacing: 0;
      line-height: 83px;
      text-shadow: 0 0 9px 0 #ffff;
    }
    .content-discription {
      height: 34px;
      width: 776px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 18px;
      letter-spacing: 0.58;
      line-height: 34px;
    }
  }
`;
