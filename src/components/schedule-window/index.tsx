import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import closeButton from "../../assets/dismissButton.png";
import { sizes, colors, fontFamilies, fontWeight } from "../../variables";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Modal open>
      <Wrapper>
        <CloseImage src={closeButton} alt="cut"></CloseImage>
        <Title>Busy at work now, schedule it for later!</Title>
      </Wrapper>
    </Modal>
  );
};
export default Login;

const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 457px;
  width: 570px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;
const Title = styled.p`
  margin-left: ${sizes.size50};
  margin-bottom: ${sizes.size60};
  margin-top: ${sizes.size50};
  text-shadow: 0 0 9px 0 ${colors.white};
  height: 23px;
  width: 475px;
  color: #000000;
  font-family: "Open Sans";
  font-size: 17px;
  letter-spacing: -0.41px;
  line-height: 23px;
`;
