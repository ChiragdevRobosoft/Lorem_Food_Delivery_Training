import React, { useState } from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { colors, angles, sizes, fontFamilies } from "../../../variables";
import Label from "../../common/label";

const OpeningHours = () => {
  const [visibility, setVisibility] = useState(false);
  const toggleState = () => {
    setVisibility(!visibility);
  };
  return (
    <Wrapper>
      <AvailabilityCard>
        <DateContainer>
          <Date content={data.openingHours[0].date} />
          <Availability
            content={data.openingHours[0].availability}
            className={data.openingHours[0].availability}
          />
        </DateContainer>
        <TimeContainer>
          {data.openingHours[0].time?.map((timeSlot, index) => {
            return <Time key={index} content={timeSlot} />;
          })}
        </TimeContainer>
        {data.openingHours[0].off !== undefined ? (
          <PlannedOff content={data.openingHours[0].off} />
        ) : null}
      </AvailabilityCard>
      <WorkHoursContainer visibility={visibility.toString()}>
        {data.openingHours.map((day, index) => {
          if (index !== 0) {
            return (
              <AvailabilityCard key={index}>
                <DateContainer>
                  <Date content={day.date} />
                  <Availability
                    content={day.availability}
                    className={day.availability}
                  />
                </DateContainer>
                <TimeContainer>
                  {day.time?.map((timeSlot, index) => {
                    return <Time key={index} content={timeSlot} />;
                  })}
                </TimeContainer>
                {day.off !== undefined ? (
                  <PlannedOff content={day.off} />
                ) : null}
              </AvailabilityCard>
            );
          }
        })}
      </WorkHoursContainer>
      <WorkHoursTitleContainer onClick={toggleState}>
        <WorkHoursLabel content={data.workHoursTitle} />
        <Arrow visibility={visibility.toString()}></Arrow>
      </WorkHoursTitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 353px;
  padding: 0px 20px;
  background-color: ${colors.white_ffffff};
  border-radius: ${sizes.size6};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
`;

const AvailabilityCard = styled.div`
  height: auto;
  width: ${sizes.fullWidth};
  border-bottom: ${sizes.size1} solid ${colors.grey_979797};
  padding-top: 16px;
  padding-bottom: 16px;
`;

const WorkHoursTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 14px auto 0 auto;
  padding-bottom: 21px;
  justify-content: center;
`;

const Arrow = styled.span<{ visibility: string }>`
  border: solid ${colors.yellow_f5a623};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  height: 5px;
  width: 5px;
  transform: ${(props) =>
    props.visibility === "true" ? "rotate(-135deg)" : "rotate(45deg)"};
  -webkit-transform: ${(props) =>
    props.visibility === "true" ? "rotate(-135deg)" : "rotate(45deg)"};
  margin-bottom: ${(props) => (props.visibility === "true" ? "0" : "5px")};
  margin-top: ${(props) => (props.visibility === "true" ? "5px" : "0")};
`;

const WorkHoursContainer = styled.div<{ visibility: string }>`
  display: ${(props) => (props.visibility === "true" ? "block" : "none")};
  padding-right: 13px;
`;

const Time = styled(Label)`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
`;

const ConstSize = styled(Label)`
  height: ${sizes.size17};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
`;

const Date = styled(ConstSize)`
  color: ${colors.grey_757575};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  margin-bottom: 3px;
`;

const Availability = styled(ConstSize)<{ className: string }>`
  font-family: ${fontFamilies.fontFamilyOsBold};
  text-align: right;
  color: ${(props) =>
    props.className === "OPEN"
      ? `${colors.green_64ae12}`
      : `${colors.red_ed1b2e}`};
`;

const PlannedOff = styled(ConstSize)`
  color: ${colors.red_ed1b2e};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  margin-top: 9px;
`;

const WorkHoursLabel = styled(Label)`
  width: 212px;
  color: ${colors.transparentColor};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_17};
  background-image: linear-gradient(${angles.angle60}, #f27489, #fbab64);
  background-clip: text;
  -webkit-background-clip: text;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export default OpeningHours;
