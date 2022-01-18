import React from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { colors, fontFamilies, sizes, opacity } from "../../../variables";
import OpeningHours from "../OpeningHours";
import Map from "../../../assets/restaurantDetails/map.png";
import Label from "../../common/label";

const Overview = () => {
  return (
    <Wrapper>
      <Title content={data.overviewData[0].title} />
      <Content content={data.overviewData[0].content} className="first-row" />
      <DescriptionLine className="details">
        {data.overviewData.map((description, index) => {
          if (index !== 0) {
            return (
              <React.Fragment key={index}>
                <DescriptionContainer className="cuisines">
                  <Title content={description.title} />
                  <Content content={description.content} />
                </DescriptionContainer>
                {index !== data.overviewData.length - 1 ? (
                  <LineBreak height={index === 1 ? "long" : "short"} />
                ) : null}
              </React.Fragment>
            );
          }
        })}
      </DescriptionLine>
      <DescriptionLine>
        <DescriptionContainer>
          <Title content={data.openingHoursTitle} />
          <OpeningHours />
        </DescriptionContainer>
        <DescriptionContainer>
          <Title content={data.mapTitle} />
          <MapImage src={Map} />
        </DescriptionContainer>
      </DescriptionLine>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 972px;
  padding-bottom: 200px;
`;

const DescriptionLine = styled.div<{ className?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => (props.className = "details" ? "41px" : "0")};
  margin-bottom: ${(props) => (props.className = "details" ? "43px" : "0")};
`;

const DescriptionContainer = styled.div<{ className?: string }>`
  max-width: ${(props) => (props.className === "cuisines" ? "175px" : "auto")};
`;

const LineBreak = styled.hr<{ height: string }>`
  width: 2px;
  margin: 0;
  box-sizing: border-box;
  height: ${(props) => (props.height === "long" ? "101px" : "77px")};
  border: ${sizes.size1} solid ${colors.grey_979797};
  opacity: ${opacity.opacity0_19};
`;

const Title = styled(Label)`
  display: block;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  margin-bottom: 9px;
`;

const Content = styled(Label)<{ className?: string }>`
  height: auto;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  line-height: ${(props) =>
    props.className === "first-row" ? `${sizes.size24}` : `${sizes.size17}`};
  color: ${(props) =>
    props.className === "first-row"
      ? `${colors.grey_4a4a4a}`
      : `${colors.grey_7c7c7c}`};
`;

const MapImage = styled.img``;

export default Overview;
