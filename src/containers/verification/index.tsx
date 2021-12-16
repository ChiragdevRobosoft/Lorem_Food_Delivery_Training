
import React from 'react';
import styled from 'styled-components';
import backButton from '../../assets/back_button.png';
import icon_verify from '../../assets/icn_verify.png';
import { useNavigate } from 'react-router-dom';
import TextBox from '../../components/textbox';
import Button1 from '../../components/button/index';


const Verification = () => {
	const navigate = useNavigate();
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
				<Button onClick={() => navigate("/forgot-password")}>
					<img src={backButton} className="arrow" alt="cut" ></img>
				</Button>
				<VerifyImage>
					<img src={icon_verify} className="icon_forgot"></img>
				</VerifyImage>
				<Text1>Verification</Text1>
				<Text2>We just sent you the OTP via SMS to your email address/mobile no. You should get it soon!</Text2>
				<TextBox name='Enter OTP' isPassword={false}></TextBox>
				<VerifyButton>
					<Button1 name="VERIFY"></Button1>
				</VerifyButton>
			</WrapperRight>
		</Wrapper>
	);
};
export default Verification;

const VerifyButton = styled.div`
margin-top: 30px;
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
const VerifyImage = styled.div`
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
  	width: 220px;
  	color: #4A4A4A;
  	font-size: 14px;
  	letter-spacing: -0.24px;
  	line-height: 20px;
  	text-align: center;
  	margin-left: 130px;
  	margin-bottom: 80px;
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
