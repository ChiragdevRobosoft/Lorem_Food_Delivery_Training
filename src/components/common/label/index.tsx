import React from "react";
import styled, { CSSProperties } from "styled-components";
import { sizes, colors, fontFamilies } from "../../../variables";
const Label = ({
  name,
  className,
  style,
}: {
  name: string;
  className: string;
  style?: CSSProperties;
}) => {
  return (
    <TextBoxLabel className={className} style={style}>
      {name}
    </TextBoxLabel>
  );
};
export default Label;
const TextBoxLabel = styled.label`
  height: 22px;
  width: 88px;
  color: ${(props) =>
    props.style?.color ? props.style.color : `${colors.grey_858585}`};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
  margin-left: ${(props) => (props.style?.margin ? props.style.margin : "10%")};
  cursor: text;
  pointer-events: none;
`;
