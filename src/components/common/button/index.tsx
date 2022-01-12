import React from "react";
import styled, { CSSProperties } from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
} from "../../../variables";
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
  height: 50px;
  width: ${(props) =>
    props.style?.width
      ? props.style.width
      : props.className === "colouredBgButton"
      ? "380px"
      : "180px"};
  border-radius: ${sizes.size6};
  background: ${(props) =>
    props.className === "colouredBgButton"
      ? `linear-gradient(${angles.angle138_33}, ${colors.red_f3698e} 0%, ${colors.yellow_feb456} 100%)`
      : `${colors.white_ffffff}`};
  box-shadow: ${(props) =>
    props.className === "colouredBgButton"
      ? `0 4px 10px 0 ${colors.red_f67e7e_38}`
      : `0 2px 10px 0 ${colors.black_000000_1}`};
  border: ${(props) =>
    props.className === "colouredBgButton"
      ? "none"
      : props.className === "google"
      ? `1px solid ${colors.pink_d34836}`
      : `1px solid ${colors.blue_02a7fd}`};
  display: flex;
  gap: 8px;
  justify-content: center;
  color: ${(props) =>
    props.className === "colouredBgButton"
      ? `${colors.white_ffffff}`
      : props.className === "google"
      ? `${colors.pink_d34836}`
      : `${colors.blue_2c79bd}`};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.3px;
  line-height: ${sizes.size22};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
`;

const ButtonImage = styled.img``;
