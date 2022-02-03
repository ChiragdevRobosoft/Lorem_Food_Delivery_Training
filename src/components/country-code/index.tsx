import styled from "styled-components";
import React, { useState } from "react";
import icon_dropdown from "../../assets/arrow_drop@.png";
import OutsideAlerter from "../OutsideClickAlert";
import InputField from "../common/textbox";
import CountryCode from "./info";
import { sizes, colors, fontFamilies } from "../../variables";
import { queries } from "../common/breakpoints";
const TelephonePicker = ({
  isOptional,
  message,
  register,
}: {
  isOptional: boolean;
  message?: string;
  register?: Function;
}) => {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("india");
  const [selectedCode, setSelectedCode] = useState("91");
  const handleSelection = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedCountry(e.currentTarget.id);
    setSelectedCode(
      CountryCode.find((element) => element.country === e.currentTarget.id)!
        .code
    );
    setDropDownStatus(false);
  };
  const imagePath = "../../assets/images";
  return (
    <FormContainer>
      {isOptional ? <Label>Mobile No</Label> : <Label>Mobile No.</Label>}
      <MobileNumberContainer>
        <OptionSelected>
          <OptionWrapper>
            <Flag src={`${imagePath}/${selectedCountry}.png`}></Flag>
            <Code>{`+${selectedCode}`}</Code>
          </OptionWrapper>
          <DropDown
            src={icon_dropdown}
            onClick={() => {
              setDropDownStatus(true);
            }}
          />
        </OptionSelected>
        {dropDownStatus ? (
          <OutsideAlerter handlePress={() => setDropDownStatus(false)}>
            <DropDownContainer>
              <DropDownWindow>
                {CountryCode.map((element) => (
                  <OptionWrapper
                    key={element.country}
                    id={element.country}
                    onClick={(e) => handleSelection(e)}
                  >
                    <Flag src={`${imagePath}/${element.country}.png`}></Flag>
                    <Code>{`+${element.code}`}</Code>
                  </OptionWrapper>
                ))}
              </DropDownWindow>
            </DropDownContainer>
          </OutsideAlerter>
        ) : null}
        <NumberContainer>
          <InputField
            register={register}
            message={message}
            name="mobile"
            isPassword={false}
          />
        </NumberContainer>
      </MobileNumberContainer>
    </FormContainer>
  );
};
export default TelephonePicker;
const FormContainer = styled.div`
  position: relative;
  height: 56px;
  width: 380px;
  margin-left: auto;
  margin-top: -10px;
  margin-bottom: 42px;
  margin-right: auto;
  ${queries.tabletLandscape} {
    width: 300px;
    margin-left: 30px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-left: 30px;
    margin-top: -40px;
  }
`;
const NumberContainer = styled.div`
  width: 258px;
  ${queries.tabletLandscape} {
    width: 220px;
  }
  ${queries.mobile} {
    width: 220px;
  }
`;
const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 26.73px;
  width: 375px;
  ${queries.tabletLandscape} {
    width: 315px;
  }
  ${queries.mobile} {
    width: 315px;
  }
`;
const DropDown = styled.img`
  height: 7px;
  width: 11px;
  margin-top: 8px;
  margin-left: 10px;
  ${queries.tabletLandscape} {
    width: 7px;
  }
  ${queries.mobile} {
    width: 7px;
  }
`;
const Label = styled.label`
  width: 88px;
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 0.8rem;
  letter-spacing: -0.27px;
  line-height: 22px;
  cursor: text;
  pointer-events: none;
  top: -0.5rem;
  position: relative;
  ${queries.tabletLandscape} {
    width: 60px;
  }
  ${queries.mobile} {
    width: 60px;
  }
`;
const DropDownWindow = styled.div`
  overflow-y: scroll;
  top: 0;
  ::-webkit-scrollbar {
    width: ${sizes.size5};
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${colors.white_ffffff};
    margin-top: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${colors.grey_858585};
  }
`;
const OptionWrapper = styled.div`
  height: 20px;
  width: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  :hover {
    background-color: ${colors.black_000000_05};
  }
  ${queries.tabletLandscape} {
    width: 55px;
  }
  ${queries.mobile} {
    width: 55px;
  }
`;
const Flag = styled.img`
  height: 20px;
  width: 29px;
  ${queries.tabletLandscape} {
    height: 10px;
    width: 19px;
  }
  ${queries.mobile} {
    height: 10px;
    width: 19px;
  }
`;
const Code = styled.p`
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  font-weight: 100;
  margin-top: 0;
  ${queries.tabletLandscape} {
    font-size: 13px;
  }
  ${queries.mobile} {
    font-size: 13px;
  }
`;
const OptionSelected = styled.div`
  border-bottom: 1px solid ${colors.grey_4a4a4a};
  width: 90px;
  display: flex;
  height: 35px;
  flex-direction: row;
  ${queries.tabletLandscape} {
    width: 70px;
  }
  ${queries.mobile} {
    width: 70px;
  }
`;
const DropDownContainer = styled.div`
  z-index: 99;
  position: absolute;
  background-color: ${colors.white_d2d2d2};
  width: 80px;
  padding: 10px;
  display: flex;
  height: 100px;
  justify-content: space-around;
  flex-direction: column;
  top: 0;
  margin-top: -5px;
  ${queries.tabletLandscape} {
    width: 60px;
  }
  ${queries.mobile} {
    width: 60px;
  }
`;
