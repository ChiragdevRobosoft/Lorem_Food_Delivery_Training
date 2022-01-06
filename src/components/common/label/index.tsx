import React from "react";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "../../../variables";
const Label = ({ name, className }: { name: string; className: string }) => {
  return <TextBoxLabel className={className}>{name}</TextBoxLabel>;
};
export default Label;
const TextBoxLabel = styled.label`
  height: ${sizes.halfWidth};
  width: ${sizes.size88};
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  margin-left: 10%;
  cursor: text;
  pointer-events: none;
`;
