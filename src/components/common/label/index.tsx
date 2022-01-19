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
  margin?: string;
  htmlFor?: string;
}
const Label: FC<labelProps> = (props) => {
  return (
    <LabelText className={props.className} htmlFor={props.htmlFor}>
      {props.content}
    </LabelText>
  );
};
export default Label;
const LabelText = styled.label`
  height: 22px;
  width: auto;
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;
