import styled from "styled-components";
import React, { useState } from "react";
import icon_dropdown from "../../assets/arrow_drop@.png";
import OutsideAlerter from "../OutsideClickAlert";
import TextBox from "../common/textbox";
import CountryCode from "./info";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const TelephonePicker = ({ isOptional }: { isOptional: boolean }) => {
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
        <TextBox name="" isPassword={false} />
      </MobileNumberContainer>
    </FormContainer>
  );
};
export default TelephonePicker;
const FormContainer = styled.div`
  position: relative;
  height: ${sizes.size56};
  width: ${sizes.size380};
  margin-left: 50px;
  margin-top: -10px;
  margin-bottom: 42px;
`;
const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const DropDown = styled.img`
  height: ${sizes.size7};
  width: ${sizes.size11};
  margin-top: 8px;
  margin-left: 10px;
`;
const Label = styled.label`
  width: ${sizes.size88};
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 0.8rem;
  letter-spacing: -0.27px;
  line-height: 22px;
  cursor: text;
  pointer-events: none;
  top: -0.5rem;
  position: relative;
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
  height: ${sizes.size20};
  width: ${sizes.size65};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  :hover {
    background-color: ${colors.black_000000_05};
  }
`;
const Flag = styled.img`
  height: ${sizes.size20};
  width: ${sizes.size29};
`;
const Code = styled.p`
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  font-weight: 100;
  margin-top: 0;
`;
const OptionSelected = styled.div`
  border-bottom: 1px solid ${colors.grey_4a4a4a};
  width: ${sizes.size90};
  display: flex;
  height: ${sizes.size35};
  flex-direction: row;
`;
const DropDownContainer = styled.div`
  z-index: 99;
  position: absolute;
  background-color: ${colors.white_d2d2d2};
  width: ${sizes.size80};
  padding: 10px;
  display: flex;
  height: ${sizes.size100};
  justify-content: space-around;
  flex-direction: column;
  top: 0;
  margin-top: -5px;
`;
