import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
const Buttons = ({
  name,
  className,
  onClick,
}: {
  name: any;
  className: any;
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
  height: 50px;
  width: ${(props) =>
    props.className === "colouredBgButton" ? "380px" : "180px"};
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
      ? "#ffffff"
      : props.className === "google"
      ? "#D34836"
      : "#2C79BD"};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 22px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  padding-top: 3%;
  margin-right: auto;
  margin-left: auto;
`;
