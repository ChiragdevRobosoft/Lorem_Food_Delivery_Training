import styled from "styled-components";
import React, { useState } from "react";
import view_active from "../../../assets/view_active.png";
import view_inactive from "../../../assets/view_inactive.png";
import Label from "../label";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../../variables";
const InputField = ({
  name,
  isPassword,
}: {
  name: string;
  isPassword: boolean;
}) => {
  const [viewState, changeViewState] = useState(false);
  const [focusState, changeFocusState] = useState(false);
  const handleViewIconClick = () => {
    changeViewState(!viewState);
  };
  const handleFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") changeFocusState(false);
  };
  return (
    <FormContainer>
      <Textbox
        type={!viewState && isPassword ? "password" : "text"}
        onFocus={() => {
          changeFocusState(true);
        }}
        onBlur={(e) => {
          handleFocusChange(e);
        }}
        className={focusState ? "moveUp" : ""}
      />
      {isPassword ? (
        <>
          <Label name={name} className="form-label" />
          <ViewIcon
            onClick={(e) => {
              handleViewIconClick();
            }}
            src={viewState ? view_active : view_inactive}
            alt="icn"
          ></ViewIcon>
        </>
      ) : (
        <Label name={name} className="form-label" />
      )}
    </FormContainer>
  );
};
export default InputField;
const FormContainer = styled.div`
  position: relative;
  width: 100%;
  .moveUp ~ .form-label {
    top: -1.5rem;
    font-size: 0.8rem;
    position: relative;
  }
`;

const Textbox = styled.input`
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  height: ${sizes.size34};
  width: 78.8%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.grey6};
  margin-left: 10%;
  color: ${colors.black};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 16px;
  font-weight: ${fontWeight.weight100};
  letter-spacing: -0.27px;
  line-height: 22px;
  outline: none;
  pointer-events: all;
  :focus {
    border-bottom: 1px solid black;
  }
`;
const ViewIcon = styled.img`
  right: 14%;
  height: ${sizes.size17};
  width: ${sizes.size20};
  margin-top: 1%;
  position: absolute;
`;
