import React from "react";
import styled, { CSSProperties } from "styled-components";
import { sizes, colors, fontFamilies, fontWeight } from "../../../variables";
const Buttons = ({
  name,
  className,
  onClick,
  style,
  image,
}: {
  name: string;
  className: string;
  onClick?: () => void;
  style?: CSSProperties;
  image?: string;
}) => {
  console.log(className);
  return (
    <Button className={className} onClick={onClick} style={style}>
      {name}
      <ButtonImage src={image} />
    </Button>
  );
};
export default Buttons;
const Button = styled.button`
  height: ${sizes.size50};
  width: ${(props) =>
    props.style?.width
      ? props.style.width
      : props.className === "colouredBgButton"
      ? `${sizes.size380}`
      : `${sizes.size180}`};
  border-radius: 6px;
  background: ${(props) =>
    props.className === "colouredBgButton"
      ? "linear-gradient(138.33deg, #f3698e 0%, #feb456 100%)"
      : `${colors.white_ffffff}`};
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
  gap: 8px;
  justify-content: center;
  color: ${(props) =>
    props.className === "colouredBgButton"
      ? `${colors.white_ffffff}`
      : props.className === "google"
      ? `${colors.pink_d34836_1}`
      : `${colors.blue_2c79bd}`};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.3px;
  line-height: 22px;
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
`;

const ButtonImage = styled.img``;
