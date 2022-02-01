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
import Label from "../../label";
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
        styles2.right = 58;
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
      styles.right = 58;
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
          <ContentContainer>
            <EmptyIcon src={emptyIcon} alt="No Restaurants" />
            <Oops content={data.carousels.popularBrands.noRestaurantTitle} />
            <SolutionText
              content={data.carousels.popularBrands.norestaurantDescp}
            />
          </ContentContainer>
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
                <BrandFoodImage className="food-image" src={KFC} alt="" />
                <RightSide>
                  <ContentHolder>
                    <BrandDetails>
                      <BrandLogo src={kfcLogo} alt="" className="brand-logo" />
                      <Content>
                        <BrandName
                          content={tData.carousels.popularBrands.brandName}
                        />
                        <LocType
                          content={tData.carousels.popularBrands.locAndType}
                        />
                      </Content>
                    </BrandDetails>
                    <HorizontalLine />
                    <Description
                      content={tData.carousels.popularBrands.description}
                    />
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
  height: 240px;
  width: 100%;
  margin: 35px auto 0 auto;
  border-radius: 6px;
  background-color: ${colors.white_ffffff};
  box-sizing: border-box;
  padding: 26px 0px 22px 0px;
  display: flex;
  ${queries.tabletLandscape} {
    height: 192px;
    margin: 28px 0 0 0;
    padding: 21px 0px 18px 0px;
  }
  ${queries.tablet} {
    height: 144px;
    margin: 21px 0 0 0;
    padding: 16px 0px 13px 0px;
  }
`;

const ContentContainer = styled.div`
  margin: auto auto;
  width: 36%;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const EmptyIcon = styled.img`
  height: 120px;
  width: 192px;
  margin: 0 auto 15px auto;
  ${queries.tabletLandscape} {
    height: 96px;
    width: 154px;
    margin: 0px auto 12px auto;
  }
  ${queries.tablet} {
    height: 72px;
    width: 115px;
    margin: 0px auto 9px auto;
  }
`;

const Oops = styled(Label)`
  height: 27px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size20};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${sizes.sizen0_48};
  line-height: ${sizes.size27};
  text-align: center;
  margin: 0px auto 8px auto;
  ${queries.tabletLandscape} {
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin: 0px auto 6px auto;
  }
  ${queries.tablet} {
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    margin: 0px auto 5px auto;
  }
`;

const SolutionText = styled(Label)`
  height: 22px;
  color: ${colors.grey_868995};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: 0;
  line-height: ${sizes.size22};
  text-align: center;
  margin: 0px auto;
  ${queries.tabletLandscape} {
    font-size: 11px;
    height: 18px;
    line-height: 18px;
  }
  ${queries.tablet} {
    font-size: 8px;
    height: 13px;
    line-height: 13px;
  }
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
    .slide .food-image {
      width: 40%;
    }
    .slide .brand-logo {
      width: 86px;
      ${queries.tabletLandscape} {
        width: 69px;
      }
      ${queries.tablet} {
        width: 52px;
      }
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
  margin: 0;
  display: flex;
  padding: 36px 20px 23px 39px;
  ${queries.tabletLandscape} {
    padding: 29px 16px 18px 31px;
  }
  ${queries.tablet} {
    padding: 22px 12px 14px 23px;
  }
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
`;

const BrandDetails = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const BrandLogo = styled.img`
  height: 86px;
  margin: 0px;
  ${queries.tabletLandscape} {
    height: 69px;
    width: 69px;
  }
  ${queries.tablet} {
    height: 52px;
    width: 52px;
  }
`;

const Content = styled.div`
  margin: auto auto auto 25px;
  display: flex;
  flex-direction: column;
`;

const BrandName = styled(Label)`
  height: 39px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size29};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size39};
  margin: 0 auto 0 0;
`;

const LocType = styled(Label)`
  height: 19px;
  color: ${colors.grey_757575};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: 0;
  line-height: ${sizes.size19};
  margin: 2px 0 0 2px;
  text-align: left;
`;

const HorizontalLine = styled.div`
  box-sizing: border-box;
  height: 3px;
  width: 97%;
  border: 1px solid ${colors.white_ededed};
  margin: 17px 0 0 0;
`;

const Description = styled(Label)`
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
