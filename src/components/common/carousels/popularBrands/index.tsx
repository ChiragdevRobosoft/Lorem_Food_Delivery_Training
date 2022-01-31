import { CSSProperties } from "react";
import KFC from "./../../../../assets/common/carousels/carousel1-img.png";
import nextButton from "./../../../../assets/common/carousels/next_button.png";
import disabledNextButton from "./../../../../assets/common/carousels/nextButtonDisabled.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
} from "./../../../../variables";
import kfcLogo from "./../../../../assets/common/carousels/brand_logo.png";
import emptyIcon from "./../../../../assets/common/carousels/noRestaurants.jpg";
import tData from "./../../constants.json";
import data from "./../../constants.json";
import { queries } from "../../breakpoints";
const Carousel = require("react-responsive-carousel").Carousel;

let datas: string[] = ["one", "two", "three", "four"];

const renderArrow =
  (direction: string) =>
  (
    onClickHandler: React.MouseEventHandler<HTMLInputElement>,
    shouldBeEnabled: boolean
  ) => {
    if (!shouldBeEnabled) {
      const styles2: CSSProperties = {
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 2,
        display: "inline-block",
        boxSizing: "border-box",
        height: `${sizes.size57}`,
        width: `${sizes.size56}`,
        backgroundImage: `url(${disabledNextButton})`,
        backgroundPosition: "center",
      };
      if (direction === "prev") {
        styles2.left = 848;
        styles2.borderRight = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
      } else {
        styles2.right = 0;
        styles2.transform = "scaleX(-1)";
        styles2.borderRight = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
      }
      return <div style={styles2}></div>;
    }

    const styles: CSSProperties = {
      position: "absolute",
      bottom: 0,
      right: 0,
      zIndex: 2,
      display: "inline-block",
      boxSizing: "border-box",
      height: `${sizes.size57}`,
      width: `${sizes.size56}`,
      backgroundImage: `url(${nextButton})`,
      backgroundPosition: "center",
    };

    if (direction === "prev") {
      styles.left = 848;
      styles.transform = "scaleX(-1)";
      styles.borderLeft = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
    } else {
      styles.right = 0;
      styles.borderLeft = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

const CarouselPB = () => {
  return (
    <>
      {datas.length === 0 ? (
        <NoData>
          <EmptyIcon src={emptyIcon} alt="No Restaurants" />
          <Oops>{data.carousels.popularBrands.noRestaurantTitle}</Oops>
          <SolutionText>
            {data.carousels.popularBrands.norestaurantDescp}
          </SolutionText>
        </NoData>
      ) : (
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
                <RightSide>
                  <ContentHolder>
                    <BrandDetails>
                      <BrandLogo src={kfcLogo} alt="" />
                      <Content>
                        <BrandName>
                          {tData.carousels.popularBrands.brandName}
                        </BrandName>
                        <LocType>
                          {tData.carousels.popularBrands.locAndType}
                        </LocType>
                      </Content>
                    </BrandDetails>
                    <HorizontalLine />
                    <Description>
                      {tData.carousels.popularBrands.description}
                    </Description>
                  </ContentHolder>
                </RightSide>
              </SingleSlide>
            ))}
          </Carousel>
          <AllBrands width={`${sizes.size100_61}`} margin={`${sizes.size15}`}>
            <RouteText height={`${sizes.size22}`} width={`${sizes.size79}`}>
              {data.carousels.popularBrands.routeText}
            </RouteText>
            <Arrowspan>
              <b>&#62;</b>
            </Arrowspan>
          </AllBrands>
        </Wrapper>
      )}
    </>
  );
};

export default CarouselPB;

const NoData = styled.div`
  height: ${sizes.size240};
  //width: ${sizes.size958};
  width: 100%;
  margin: ${sizes.size35} ${sizes.size0} ${sizes.size0} ${sizes.size0};
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  display: flex;
  flex-direction: column;
`;
const EmptyIcon = styled.img`
  height: ${sizes.size120};
  width: ${sizes.size192};
  margin: ${sizes.size26} ${sizes.size402} ${sizes.size15} ${sizes.size364};
`;
const Oops = styled.p`
  height: ${sizes.size27};
  width: ${sizes.size54};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size20};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${sizes.sizen0_48};
  line-height: ${sizes.size27};
  text-align: center;
  margin: ${sizes.size0} ${sizes.size467} ${sizes.size8} ${sizes.size437};
`;
const SolutionText = styled.p`
  height: ${sizes.size22};
  width: ${sizes.size341};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: center;
  margin: ${sizes.size0} ${sizes.size314} ${sizes.size22} ${sizes.size303};
`;

const Wrapper = styled.div`
  .main-slide {
    height: 240px;
    width: 100%;
    margin: 0 0 0 0;
    border-radius: ${sizes.size6};
    background-color: ${colors.white_ffffff};
  }
  .carousel {
    height: 327px;
    width: 100%;
    .slider-wrapper {
      width: 100%;
      height: 287px;
    }
    .slide img {
      width: 40%;
    }
    .img {
      width: 40%;
    }
  }
`;

const SingleSlide = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const BrandFoodImage = styled.img`
  margin: 0;
  box-sizing: border-box;
`;

const RightSide = styled.div`
  width: 60%;
  margin: 0;
  padding: 36px 20px 23px 39px;
  ${queries.tabletLandscape} {
    padding: 29px 16px 18px 31px;
  }
  ${queries.tablet} {
    padding: 22px 12px 14px 23px;
  }
`;

const ContentHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const BrandDetails = styled.div`
  height: 86px;
  width: 470px;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const BrandLogo = styled.img`
  height: ${sizes.size86};
  width: ${sizes.size86};
  margin: ${sizes.size0};
`;

const Content = styled.div`
  height: ${sizes.size60};
  width: ${sizes.size150};
  margin: ${sizes.size17} ${sizes.size207} ${sizes.size12} ${sizes.size25};
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.p`
  height: ${sizes.size39};
  width: ${sizes.size53};
  color: ${colors.blue_223136};
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
  color: ${colors.grey_757575};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin: ${sizes.size2} ${sizes.size0} ${sizes.size0} ${sizes.size2};
  text-align: left;
`;

const HorizontalLine = styled.div`
  box-sizing: border-box;
  height: 3px;
  width: 458px;
  border: 1px solid ${colors.white_ededed};
  margin: 17px 0 0 0;
`;

const Description = styled.p`
  height: 62px;
  color: ${colors.grey_6a6a6a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin: 13px 0 0 0;
  text-align: left;
  ${queries.tabletLandscape} {
    font-size: 12px;
    line-height: 16px;
    margin: 1px 0 0 0;
  }
`;

interface RouteTextProps {
  height: string;
  width: string;
  textAlign?: string;
}

export const RouteText = styled.p<RouteTextProps>`
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${colors.orange_f67e03};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin: 0 0 auto ${sizes.size1};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;

export const Arrowspan = styled.span`
  height: ${sizes.size7_45};
  width: ${sizes.size3_61};
  color: ${colors.orange_f67e03};
  margin-left: ${sizes.size8};
`;

interface RouteDivProps {
  width: string;
  margin: string;
}
export const AllBrands = styled.div<RouteDivProps>`
  height: ${sizes.size22};
  width: ${(props) => props.width};
  margin: ${(props) => `${props.margin} auto auto ${sizes.size0}`};
  display: flex;
`;
