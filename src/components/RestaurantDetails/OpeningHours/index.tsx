import React, { useState } from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { colors, angles, sizes, fontFamilies } from "../../../variables";

const OpeningHours = () => {
  const [state, setState] = useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <Wrapper>
      <AvailabilityCard>
        <Date>{data.openingHours[0].date}</Date>
        <Availability
          className={data.openingHours[0].availability.toLocaleLowerCase()}
        >
          {data.openingHours[0].availability}
        </Availability>
        {data.openingHours[0].time?.map((timeSlot, index) => {
          return <Time key={index}>{timeSlot}</Time>;
        })}
        <OffDetail>{data.openingHours[0].off}</OffDetail>
      </AvailabilityCard>
      <WorkHoursContainer visibility={state.toString()}>
        {data.openingHours.map((day, index) => {
          if (index !== 0) {
            return (
              <AvailabilityCard>
                <Date>{day.date}</Date>
                <Availability className={day.availability.toLowerCase()}>
                  {day.availability}
                </Availability>
                {day.time?.map((timeSlot, index) => {
                  return <Time>{timeSlot}</Time>;
                })}
                {day.off !== undefined ? (
                  <OffDetail>{day.off}</OffDetail>
                ) : null}
              </AvailabilityCard>
            );
          }
        })}
      </WorkHoursContainer>
      <WorkHoursTitleContainer onClick={toggleState}>
        <WorkHoursTitle>{data.workHoursTitle}</WorkHoursTitle>
        <Arrow visibility={state.toString()}></Arrow>
      </WorkHoursTitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 353px;
  padding: 0px 20px;
  background-color: ${colors.white_ffffff};
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const AvailabilityCard = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  border-bottom: 1px solid #979797;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Date = styled.div`
  height: 17px;
  color: #757575;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
  margin-bottom: 3px;
`;

const Time = styled.div`
  height: 19px;
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 19px;
`;

const Availability = styled.div<{ className: string }>`
  position: absolute;
  top: 16px;
  right: 0;
  height: 17px;
  color: ${(props) => (props.className === "open" ? "#64AE12" : "#ED1B2E")};
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 17px;
  text-align: right;
`;

const OffDetail = styled.div`
  height: 17px;
  color: #ed1b2e;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
  margin-top: 9px;
`;

const WorkHoursTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 14px auto 0 auto;
  padding-bottom: 21px;
  justify-content: center;
`;

const WorkHoursTitle = styled.div`
  height: 22px;
  width: 212px;
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_e21143_09},
    ${colors.yellow_ffb03a_09}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size16};
  line-height: ${sizes.size22};
  letter-spacing: -0.17px;
`;

const Arrow = styled.span<{ visibility: string }>`
  border: solid #f5a623;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  height: 5px;
  width: 5px;
  transform: rotate(45deg);
  -webkit-transform: ${(props) =>
    props.visibility === "true" ? "rotate(-135deg)" : "rotate()45deg"};
  margin-bottom: ${(props) => (props.visibility === "true" ? "0" : "5px")};
  margin-top: ${(props) => (props.visibility === "true" ? "5px" : "0")};
`;

const WorkHoursContainer = styled.div<{ visibility: string }>`
  display: ${(props) => (props.visibility === "true" ? "block" : "none")};
  padding-right: 13px;
`;

export default OpeningHours;
