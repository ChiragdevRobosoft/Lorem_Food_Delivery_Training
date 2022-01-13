import React from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { colors, fontFamilies, sizes, opacity } from "../../../variables";
import OpeningHours from "../OpeningHours";
import Map from "../../../assets/restaurantDetails/map.png";

const Overview = () => {
  return (
    <Wrapper>
      <DescriptionTitle>{data.overviewData[0].title}</DescriptionTitle>
      <Description className="first-description">
        {data.overviewData[0].content}
      </Description>
      <DescriptionLine className="details">
        {data.overviewData.map((a, index) => {
          if (index !== 0) {
            return (
              <>
                <DescriptionContainer>
                  <DescriptionTitle>{a.title}</DescriptionTitle>
                  <Description className="other-descriptions">
                    {a.content}
                  </Description>
                </DescriptionContainer>
                {index !== data.overviewData.length - 1 ? (
                  <LineBreak height={index === 1 ? "101px" : "77px"} />
                ) : null}
              </>
            );
          }
        })}
      </DescriptionLine>
      <DescriptionLine>
        <MapHoursContainer>
          <DescriptionTitle>Opening Hours</DescriptionTitle>
          <OpeningHours />
        </MapHoursContainer>
        <MapHoursContainer>
          <DescriptionTitle>Get Direction</DescriptionTitle>
          <MapImage src={Map} />
        </MapHoursContainer>
      </DescriptionLine>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 972px;
  padding-bottom: 200px;
`;

const DescriptionTitle = styled.div`
  height: 22px;
  color: #000000;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  margin-bottom: 9px;
`;

const Description = styled.div<{ className: string }>`
  color: ${(props) =>
    props.className === "first-description" ? "#4a4a4a" : "#7c7c7c"};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 12px;
  letter-spacing: 0;
  line-height: ${(props) =>
    props.className === "first-description" ? "24px" : "17px"};
`;

const DescriptionLine = styled.div<{ className?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => (props.className = "details" ? "41px" : "0")};
  margin-bottom: ${(props) => (props.className = "details" ? "43px" : "0")};
`;

const DescriptionContainer = styled.div`
  max-width: 175px;
`;

const LineBreak = styled.hr<{ height: string }>`
  width: 2px;
  margin: 0;
  box-sizing: border-box;
  height: ${(props) => props.height};
  border: ${sizes.size1} solid ${colors.grey_979797};
  opacity: ${opacity.opacity0_19};
`;

const MapHoursContainer = styled.div``;

const MapImage = styled.img``;

export default Overview;
