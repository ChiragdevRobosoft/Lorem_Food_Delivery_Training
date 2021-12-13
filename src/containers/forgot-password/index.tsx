
import React, { useState } from 'react';
import styled from 'styled-components';
import backButton from '../../assets/back_button.png';
import icon_forgot from '../../assets/icn_forgot.png';
import Button1 from '../../components/button/index';
import { useHistory } from 'react-router-dom';
import TextBox from '../../components/textbox';
import Rectangle from '../../assets/Rectangle.png';

const ForgotPassword = ({ onCloseModal }: { onCloseModal: any }) => {
  const history = useHistory();
  const [InputType, setInputType] = useState('email');
  return (
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
        <Button onClick={() => history.push("/login")}>
          <img src={backButton} alt="cut" ></img>
        </Button>
        <ForgotImage>
          <img src={icon_forgot} className="icon_forgot"></img>
        </ForgotImage>
        <Text1>Forgot Password!</Text1>
        <Text2>Share your registered either email address or mobile number to send you the OTP to reset your password</Text2>

        <Navbar>
          <InputTypeButton onClick={() => setInputType('email')}>
            Email
          </InputTypeButton>
          <InputTypeButton onClick={() => setInputType('mobile')}>
            Mobile No.
          </InputTypeButton>
        </Navbar>

        {InputType === 'email' ? (
          <TextBox name="Email" isPassword={false} />
        ) : (
          <TextBox name="Mobile No." isPassword={false} />
        )}

        <Button1 name="SEND OTP"></Button1>
      </WrapperRight>
    </Wrapper>
  );
};
export default ForgotPassword;
const Button3 = styled.button`
height: 24px;

  opacity: 0.66;
  color: #4A4A4A;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  letter-spacing: -0.43px;
  line-height: 24px;
  background-color: transparent;
  border:none;
  margin-left: 60px;
  `;


const Button2 = styled.button`
height: 24px;
background-color: transparent;
  border:none;
  margin-left: 40px;
  width: 46px;
  color: #4A4A4A;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.43px;
  line-height: 24px;

  `;

const Wrapper = styled.div`
	height: 588px;
	width: 960px;
	border-radius: 8px;
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
const ForgotImage = styled.div`
height: 5px;
  width: 25px;
  margin-left:200px;
  margin-top: 60px;
`;
const WrapperLeft = styled.div`
	background-image: url('../assets/image.png');
	height: 588px;
	width: 480px;
	text-align: left;
	padding-left: 4%;
	margin-right: -4%;
`;
const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: auto;
	margin-left: 10.5%;
	width: 40%;
  margin-bottom: 65px;
  margin-top: 30px;
	justify-content: space-between;
`;
const InputTypeButton = styled.button`
	height: 24px;
	opacity: 0.66;
	color: #4a4a4a;
	font-family: 'Open Sans', sans-serif;
	font-size: 18px;
	letter-spacing: -0.43px;
	line-height: 24px;
	background-color: transparent;
	border: none;
	padding: 0;
`;
const WrapperRight = styled.div`
	background-color: white;
	height: 588px;
	width: 480px;
    
`;
const Button = styled.button`
	padding: 0;
	background-color: transparent;
	border: none;
	right: 430px;
	outline:none;
	position: absolute;
	top: 3%;

`;
const Lorem = styled.p`
	height: 60px;
	width: 103px;
	color: #ffffff;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 30px;
	margin-bottom: 10.5%;
	margin-top: 35%;
	transform: scaleY(1.4);
	font-weight: 600;
`;
const Text = styled.p`
	width: 323px;
	color: #ffffff;
	font-family: 'Open Sans', sans-serif;
	font-size: 32px;
	letter-spacing: -0.57px;
	text-shadow: 0 0 9px 0 #ffffff;
	font-weight: 100;
	margin-bottom: 1%;
	margin-top: 0;
`;
const Text1 = styled.p`
	font-family: 'Open Sans', sans-serif;
	height: 30px;
  width: 183px;
  color: #2A2C30;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 0 9px 0 #FFFFFF;
  margin-top:116px ;
  margin-left: 150px;
`;
const Text2 = styled.p`
	font-family: 'Open Sans', sans-serif;
    height: 60px;
  width: 270px;
  color: #4A4A4A;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  margin-left: 90px;
 
	
`;
const BoldText = styled.p`
	width: 40%;
	color: #ffffff;
	font-family: 'Open Sans', sans-serif;
	font-size: 34px;
	letter-spacing: -0.57px;
	text-shadow: 0 0 9px 0 #ffffff;
	font-weight: 600;
	margin-bottom: 1%;
	margin-top: 0;
`;
const Line = styled.div`
	display: flex;
	flex-direction: row;
`;
