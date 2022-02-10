import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
} from "../../../variables";
import { buttonProps } from "../interfaces";

const Buttons: FC<buttonProps> = (props) => {
  return (
    <Button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.name}
      {props.image ? <ButtonImage src={props.image} /> : null}
    </Button>
  );
};
export default Buttons;
const Button = styled.button`
  height: ${(props) => (props.style?.height ? props.style.height : "50px")};
  width: ${(props) => (props.style?.width ? props.style.width : "380px")};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style.borderRadius : `${sizes.size6}`};
  background: ${(props) =>
    props.className === "colouredBgButton"
      ? `linear-gradient(${angles.angle138_33}, ${colors.red_f3698e} 0%, ${colors.yellow_feb456} 100%)`
      : `${colors.white_ffffff}`};
  box-shadow: ${(props) =>
    props.style?.boxShadow
      ? props.style.boxShadow
      : `0 4px 10px 0 ${colors.red_f67e7e_38}`};
  border: ${(props) => (props.style?.border ? props.style.border : "none")};
  display: flex;
  gap: 8px;
  justify-content: center;
  color: ${(props) =>
    props.style?.color ? props.style.color : `${colors.white_ffffff}`};
  font-family: ${(props) =>
    props.style?.fontFamily
      ? props.style.fontFamily
      : `${fontFamilies.fontFamilyOsBold}`};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style.fontSize : `${sizes.size16}`};
  letter-spacing: -0.3px;
  line-height: ${(props) =>
    props.style?.lineHeight ? props.style.lineHeight : `${sizes.size22}`};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  align-items: center;
  margin-right: ${(props) =>
    props.style?.marginRight ? props.style.marginRight : "auto"};
  margin-left: ${(props) =>
    props.style?.marginLeft ? props.style.marginLeft : "auto"};
  cursor: pointer;
`;

const ButtonImage = styled.img``;
