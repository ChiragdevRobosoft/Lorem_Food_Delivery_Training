import styled, { CSSProperties } from "styled-components";
import React, { useState } from "react";
import view_active from "../../../assets/view_active.png";
import view_inactive from "../../../assets/view_inactive.png";
import Label from "../label";
import { sizes, colors, fontFamilies, fontWeight } from "../../../variables";
const InputField = ({
  name,
  isPassword,
  style,
}: {
  name: string;
  isPassword: boolean;
  style?: CSSProperties;
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
    <FormContainer style={style}>
      <Textbox
        type={!viewState && isPassword ? "password" : "text"}
        onFocus={() => {
          changeFocusState(true);
        }}
        onBlur={(e) => {
          handleFocusChange(e);
        }}
        className={focusState ? "moveUp" : ""}
        style={style}
      />
      {isPassword ? (
        <>
          <Label content={name} className="form-label" />
          <ViewIcon
            onClick={(e) => {
              handleViewIconClick();
            }}
            src={viewState ? view_active : view_inactive}
            alt="icn"
          ></ViewIcon>
        </>
      ) : (
        <Label content={name} className="form-label" />
      )}
    </FormContainer>
  );
};
export default InputField;
const FormContainer = styled.div`
  position: relative;
  height: 34px;
  width: ${(props) => (props.style?.width ? props.style.width : "100%")};
  .moveUp ~ .form-label {
    top: ${(props) => (props.style?.width === "380px" ? "-1.5rem" : "-1rem")};
    font-size: 0.8rem;
    position: relative;
  }
`;

const Textbox = styled.input`
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  height: 34px;
  width: 100%;
  background-color: ${colors.transparentColor};
  border: none;
  border-bottom: 1px solid ${colors.grey_858585};
  margin-left: ${(props) =>
    props.style?.margin ? props.style.margin : "auto"};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight100};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
  outline: none;
  pointer-events: all;
  :focus {
    border-bottom: ${sizes.size1} solid ${colors.black_000000};
  }
`;
const ViewIcon = styled.img`
  right: 17.29px;
  bottom: 13px;
  height: 17px;
  position: absolute;
`;
