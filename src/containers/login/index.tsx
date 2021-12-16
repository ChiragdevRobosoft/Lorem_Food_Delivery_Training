import React, { useState } from 'react';
import styled from 'styled-components';
import closeButton from '../../assets/close_button.png';
import Button1 from '../../components/button/index';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal'
import TextBox from '../../components/textbox';
import { sizes, colors } from '../../variables';




const Login = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(true);
	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	return (

		<Modal open={open} onClose={onCloseModal} >


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
					<Title>Let's get started!</Title>
					<TextBox name='Email' isPassword={false}></TextBox>
					<TextBox name='Password' isPassword={true}></TextBox>
					<Button5 name="Forgot Password?" onClick={() => navigate("/forgot-password")}>Forgot Password?</Button5>
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
  width: 237px;
  color: rgba(74,74,74,1);
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 70px;
  margin-top: 40px;
  `;
const Bottom = styled.div`
  flex-direction: row;
  margin-bottom:20px;
  margin-top: -10px;
  display: flex ;
  align-self: center;
	`;
const Button3 = styled.button`
	box-sizing: border-box;
  height: 50px;
  width: 180px;
  background-color: transparent;
  border: 1px solid #02A7FD;
  border-radius: 6px;
  margin-left:10%;
  margin-top: 30px;
  color:#02A7FD;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.56px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);	
  `;
const Button4 = styled.button`
box-sizing: border-box;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.56px;
  background-color: transparent;
  width: 178.91px;
  border: 1px solid #FF8C7D;
  border-radius: 6px;
  margin-left: 20px;
  color:#FF8C7D;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
`;
const Button5 = styled.button`
  color: #4A4A4A;
  font-family: 'Open Sans', sans-serif;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  margin-left:300px;
  margin-bottom: 20px;
  padding-top: 0;

  `;
const Button2 = styled.button`
height: 19px;
  width: 237px;
  color: #F67E03;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background-color: transparent;
  font-weight: 600;
  line-height: 19px;
  border: none;
  margin-bottom: 25px;
  margin-top: 40px;
  margin-left:-24%;
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
const Title = styled.p`
height: 38px;
width: 220px;
color: #2A2C30;
font-family: 'Open Sans', sans-serif;
font-size: 28px;
font-weight: bold;
margin-left:10%;
margin-bottom:15%;
margin-top:10%;
letter-spacing: -0.47px;
line-height: 38px;
text-shadow: 0 0 9px 0 #FFFFFF;
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
