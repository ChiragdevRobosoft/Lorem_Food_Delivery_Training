
import React, { useState } from 'react';
import styled from 'styled-components';
import backButton from '../../assets/back_button.png';
import passwordsuccess from '../../assets/password_success.png';
import { useNavigate } from 'react-router-dom';
import TextBox from '../../components/textbox';
import Button1 from '../../components/button/index';
import closeButton from '../../assets/close_button.png';

const PasswordSuccess = () => {
	const [open, setOpen] = useState(true);
	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
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
				<Button onClick={onCloseModal}>
					<img src={closeButton} alt="cut" ></img>
				</Button>
				<SuccessImage>
					<img src={passwordsuccess} className="passwordsuccess"></img>
				</SuccessImage>
				<Text1>Great!</Text1>
				<Text2>Your password has been successfully reset</Text2>

				<LoginButton>
					<Button1 name="LOGIN NOW"></Button1>
				</LoginButton>
			</WrapperRight>
		</Wrapper>
	);
};
export default PasswordSuccess;

const LoginButton = styled.div`
margin-top: 80px;
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
const SuccessImage = styled.div`
height: 5px;
  width: 25px;
  margin-left:150px;
  margin-top: 120px;
`;
const WrapperLeft = styled.div`
	background-image: url('../assets/image.png');
	height: 588px;
	width: 480px;
	text-align: left;
	padding-left: 4%;
	margin-right: -4%;
`;
const Button = styled.button`
	width: 5%;
	padding: 0;
	background-color: transparent;
	border: none;
	right: 0px;
	outline:none;
	position: absolute;
	top: 3%;
`;

const WrapperRight = styled.div`
	background-color: white;
	height: 588px;
	width: 480px;
    
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
  width: 183px;
  color: #2A2C30;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 0 9px 0 #FFFFFF;
  margin-top:230px ;
  margin-left: 150px;
`;
const Text2 = styled.p`
	font-family: 'Open Sans', sans-serif;
  	width: 270px;
  	color: #4A4A4A;
  	font-size: 14px;
  	letter-spacing: -0.24px;
  	text-align: center;
  	margin-left: 110px;
      margin-top: -10px;
      margin-bottom: 50px;
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
