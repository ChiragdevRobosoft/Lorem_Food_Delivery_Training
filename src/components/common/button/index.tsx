import React from "react";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../../variables";
const Buttons = ({
  name,
  className,
  onClick,
}: {
  name: string;
  className: string;
  onClick?: () => void;
}) => {
  console.log(className);
  return (
    <Button className={className} onClick={onClick}>
      {name}
    </Button>
  );
};
export default Buttons;
const Button = styled.button`
  height: ${sizes.size50};
  width: ${(props) =>
    props.className === "colouredBgButton"
      ? `${sizes.size380}`
      : `${sizes.size180}`};
  border-radius: 6px;
  background: ${(props) =>
    props.className === "colouredBgButton"
      ? "linear-gradient(138.33deg, #f3698e 0%, #feb456 100%)"
      : `${colors.white}`};
  box-shadow: ${(props) =>
    props.className === "colouredBgButton"
      ? "0 4px 10px 0 rgba(246, 126, 126, 0.38)"
      : "0 2px 10px 0 rgba(0,0,0,0.1)"};
  border: ${(props) =>
    props.className === "colouredBgButton"
      ? "none"
      : props.className === "google"
      ? "1px solid #D34836"
      : "1px solid #02A7FD"};
  display: flex;
  justify-content: space-around;
  color: ${(props) =>
    props.className === "colouredBgButton"
      ? `${colors.white}`
      : props.className === "google"
      ? `${colors.pink4}`
      : `${colors.blue1}`};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.3px;
  line-height: 22px;
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white};
  padding-top: 3%;
  margin-right: auto;
  margin-left: auto;
`;
