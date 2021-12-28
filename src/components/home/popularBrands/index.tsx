import styled from "styled-components";
import CarouselPB from "../../common/carousels/popularBrands";
import data from "./../../common/constants.json";
import { colors, sizes } from "../../../variables";
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
    height: ${sizes.size510};
    width: ${sizes.size966};
    margin: ${sizes.size65} ${sizes.size479} ${sizes.size73} ${sizes.size480};
    //border: 1px solid darkgray;
    .content-title {
      height: ${sizes.size83};
      width: ${sizes.size362};
      color: ${colors.grey5};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size50};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size83};
      text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
        ${colors.white};
    }
    .content-discription {
      height: ${sizes.size34};
      width: ${sizes.size776};
      color: ${colors.grey5};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size18};
      letter-spacing: ${sizes.size0_58};
      line-height: ${sizes.size34};
    }
  }
`;
