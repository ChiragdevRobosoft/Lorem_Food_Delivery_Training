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
  width: ${sizes.size88};
  color: ${(props) =>
    props.style?.color ? props.style.color : `${colors.grey_858585}`};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  margin-left: ${(props) => (props.style?.margin ? props.style.margin : "10%")};
  cursor: text;
  pointer-events: none;
`;
