import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Button1 from "../../components/button/index";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import TextBox from "../../components/textbox";
import { sizes, colors, fontFamilies, fontWeight } from "../../variables";

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Modal open={open} onClose={onCloseModal}>
      <Wrapper>
        <WrapperLeft>
          <Lorem>LOREM</Lorem>
          <Text>Experience the </Text>
          <Text>easiest a way to get</Text>
          <Line>
            <BoldText>great food</BoldText>
            <Text>Delivered</Text>
          </Line>
        </WrapperLeft>
        <WrapperRight>
          <Button onClick={onCloseModal}>
            <img src={closeButton} alt="cut"></img>
          </Button>
          <Title>Let's get started!</Title>
          <TextBox name="Email" isPassword={false}></TextBox>
          <TextBox name="Password" isPassword={true}></TextBox>
          <Button5
            name="Forgot Password?"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </Button5>
          <Button1 name="LOGIN"></Button1>
          <Button3 name="Facebook">Facebook</Button3>
          <Button4 name="Google+">Google+</Button4>
          <Bottom>
            <BottomText>Don't have an account?</BottomText>
            <Button2>Get new one!</Button2>
          </Bottom>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Login;
const BottomText = styled.p`
  height: ${sizes.size19};
  width: ${sizes.size237};
  color: rgba(74, 74, 74, 1);
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  text-align: center;
  margin-bottom: ${sizes.size20};
  margin-left: ${sizes.size70};
  margin-top: ${sizes.size40};
`;
const Bottom = styled.div`
  flex-direction: row;
  margin-bottom: ${sizes.size20};
  margin-top: ${sizes.sizen10};
  display: flex;
  align-self: center;
`;
const Button3 = styled.button`
  box-sizing: border-box;
  height: ${sizes.size50};
  width: ${sizes.size180};
  background-color: transparent;
  border: 1px solid #02a7fd;
  border-radius: ${sizes.size6};
  margin-left: ${sizes.size50};
  margin-top: ${sizes.size30};
  color: #02a7fd;
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.56px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;
const Button4 = styled.button`
  box-sizing: border-box;
  height: ${sizes.size50};
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size16};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.56px;
  background-color: transparent;
  width: 178.91px;
  border: 1px solid #ff8c7d;
  border-radius: ${sizes.size6};
  margin-left: ${sizes.size20};
  color: #ff8c7d;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;
const Button5 = styled.button`
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsSS};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: ${sizes.size300};
  margin-bottom: ${sizes.size20};
  padding-top: 0;
`;
const Button2 = styled.button`
  height: ${sizes.size19};
  width: ${sizes.size237};
  color: #f67e03;
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size14};
  background-color: transparent;
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  border: none;
  margin-bottom: ${sizes.size25};
  margin-top: ${sizes.size40};
  margin-left: ${sizes.sizen120};
`;

const Wrapper = styled.div`
  height: ${sizes.size588};
  width: ${sizes.size960};
  border-radius: ${sizes.size8};
  background-color: #ffffff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: ${sizes.size588};
  width: ${sizes.size480};
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: ${sizes.sizen40};
`;
const WrapperRight = styled.div`
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
const Title = styled.p`
  height: ${sizes.size38};
  width: ${sizes.size220};
  color: #2a2c30;
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: ${sizes.size50};
  margin-bottom: ${sizes.size60};
  margin-top: ${sizes.size50};
  letter-spacing: ${sizes.sizenp47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 #ffffff;
`;
const Button = styled.button`
  width: ${sizes.sizep5};
  padding: 0;
  background-color: transparent;
  border: none;
  right: 0px;
  outline: none;
  position: absolute;
  top: ${sizes.sizep3}; ;
`;
const Lorem = styled.p`
  height: ${sizes.size60};
  width: ${sizes.size103};
  color: #ffffff;
  font-family: "Bebas Neue", sans-serif;
  font-size: ${sizes.size30};
  margin-bottom: ${sizes.size30};
  margin-top: ${sizes.size160};
  transform: scaleY(1.4);
  font-weight: ${fontWeight.weight600};
`;
const Text = styled.p`
  width: ${sizes.size323};
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size32};
  letter-spacing: ${sizes.sizenp57};
  text-shadow: 0 0 9px 0 #ffffff;
  font-weight: ${fontWeight.weight100};
  margin-bottom: ${sizes.size3};
  margin-top: 0;
`;
const BoldText = styled.p`
  width: 160px;
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsSS};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  text-shadow: 0 0 9px 0 #ffffff;
  font-weight: ${fontWeight.weight600};
  margin-bottom: 1%;
  margin-top: ${sizes.sizen2};
`;
const Line = styled.div`
  display: flex;
  flex-direction: row;
`;
