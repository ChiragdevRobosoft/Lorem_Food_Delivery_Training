import { CSSProperties } from "react";
import KFC from "./../../../../assets/common/carousels/carousel1-img.png";
import nextButton from "./../../../../assets/common/carousels/next_button.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
} from "./../../../../variables";
import kfcLogo from "./../../../../assets/common/carousels/brand_logo.png";
import tData from "./../../constants.json";
const Carousel = require("react-responsive-carousel").Carousel;

const datas = ["one", "two", "three", "four", "five", "six"];

const renderArrow =
  (direction: string) =>
  (onClickHandler: any, shouldBeEnabled: boolean, label: any) => {
    if (!shouldBeEnabled) {
      return;
    }

    const styles: CSSProperties = {
      position: "absolute",
      bottom: 0,
      right: 0,
      zIndex: 2,
      display: "inline-block",
      boxSizing: "border-box",
      height: "57px",
      width: "56px",
      backgroundImage: `url(${nextButton})`,
      backgroundPosition: "center",
    };

    if (direction === "prev") {
      styles.left = 846;
      styles.transform = "scaleX(-1)";
      styles.borderLeft = "1px solid #979797";
    } else {
      styles.right = 0; //4
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

const CarouselPB = () => {
  return (
    <Wrapper>
      <Carousel
        renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={false}
        showThumbs={false}
        className="main-slide"
      >
        {datas.map((data, i) => (
          <SingleSlide>
            <BrandFoodImage src={KFC} alt="" />
            <RightDiv>
              <ContentHolder>
                <BrandDetails>
                  <BrandLogo src={kfcLogo} alt="" />
                  <NameTypeDiv>
                    <BrandName>
                      {tData.carousels.popularBrands.brandName}
                    </BrandName>
                    <LocType>
                      {tData.carousels.popularBrands.locAndType}
                    </LocType>
                  </NameTypeDiv>
                </BrandDetails>
                <HorizontalLine />
                <Description>
                  {tData.carousels.popularBrands.description}
                </Description>
              </ContentHolder>
            </RightDiv>
          </SingleSlide>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselPB;

const Wrapper = styled.div`
  .main-slide {
    height: ${sizes.size240};
    width: ${sizes.size958};
    margin: ${sizes.size35} 0 0 0;
    border-radius: ${sizes.size6};
    background-color: ${colors.white};
  }
  .carousel {
    height: ${sizes.size327};
    width: ${sizes.size958};
    .slider-wrapper {
      width: ${sizes.size958};
      height: ${sizes.size287};
    }
  }
`;

const SingleSlide = styled.div`
  height: ${sizes.size240};
  width: ${sizes.size958};
  display: flex;
  flex-direction: row;
`;

const BrandFoodImage = styled.img`
  height: ${sizes.size240};
  width: ${sizes.size450};
  margin: ${sizes.size0};
`;

const RightDiv = styled.div`
  height: ${sizes.size240};
  width: ${sizes.size508};
  margin: ${sizes.size0};
`;

const ContentHolder = styled.div`
  height: ${sizes.size181};
  width: ${sizes.size470};
  margin: ${sizes.size36} ${sizes.size20} ${sizes.size23} ${sizes.size39};
  display: flex;
  flex-direction: column;
`;

const BrandDetails = styled.div`
  height: ${sizes.size86};
  width: ${sizes.size470};
  margin: ${sizes.size0};
  display: flex;
  flex-direction: row;
`;

const BrandLogo = styled.img`
  height: ${sizes.size86};
  width: ${sizes.size86};
  margin: ${sizes.size0};
`;

const NameTypeDiv = styled.div`
  height: ${sizes.size60};
  width: ${sizes.size150};
  margin: ${sizes.size17} ${sizes.size207} ${sizes.size12} ${sizes.size25};
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.p`
  height: ${sizes.size39};
  width: ${sizes.size53};
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size29};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size39};
  margin: ${sizes.size0} auto ${sizes.size0} ${sizes.size0};
`;

const LocType = styled.p`
  height: ${sizes.size19};
  width: ${sizes.size150};
  color: ${colors.grey12};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin: ${sizes.size2} ${sizes.size0} ${sizes.size0} ${sizes.size2};
  text-align: left;
`;

const HorizontalLine = styled.div`
  box-sizing: border-box;
  height: ${sizes.size3};
  width: ${sizes.size456};
  border: ${sizes.size1} solid ${colors.white1};
  margin: ${sizes.size17} ${sizes.size12} ${sizes.size0} ${sizes.size0};
`;

const Description = styled.p`
  height: ${sizes.size62};
  width: ${sizes.size470};
  color: ${colors.grey13};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin: ${sizes.size13} ${sizes.size0} ${sizes.size0} ${sizes.size0};
  text-align: left;
`;
