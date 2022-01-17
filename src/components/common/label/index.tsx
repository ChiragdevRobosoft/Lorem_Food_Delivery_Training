import React, { FC } from "react";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "../../../variables";

interface labelProps {
  content: string;
  className?: string;
  height?: string;
  width?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  letterSpacing?: string;
  lineHeight?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
}
const Label: FC<labelProps> = (props) => {
  return (
    <TextBoxLabel style={props} className={props.className}>
      {props.content}
    </TextBoxLabel>
  );
};
export default Label;
const TextBoxLabel = styled.div`
  height: ${(props) => (props.style?.height ? props.style.height : "22px")};
  width: ${(props) => (props.style?.width ? props.style.width : "auto")};
  color: ${(props) =>
    props.style?.color ? props.style.color : `${colors.grey_858585}`};
  font-family: ${(props) =>
    props.style?.fontFamily
      ? props.style.fontFamily
      : `${fontFamilies.fontFamilyOsRegular}`};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style.fontSize : `${sizes.size16}`};
  letter-spacing: ${(props) =>
    props.style?.letterSpacing
      ? props.style.letterSpacing
      : `${sizes.sizeNeg0_27}`};
  line-height: ${(props) =>
    props.style?.lineHeight ? props.style.lineHeight : `${sizes.size22}`};
  margin-left: ${(props) => props.style?.marginLeft};
  margin-right: ${(props) => props.style?.marginRight};
  margin-top: ${(props) => props.style?.marginTop};
  margin-bottom: ${(props) => props.style?.marginBottom};
`;
