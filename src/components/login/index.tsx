import React from 'react';
import styled from 'styled-components';
//import { Button } from '@mui/material';
const Login = () => {
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
				<Title>Let's get started!</Title>

			</WrapperRight>
		</Wrapper>
	);
};
export default Login;
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
font-family: 'Bebas Neue', sans-serif;
font-size: 28px;
font-weight: bold;

letter-spacing: -0.47px;
line-height: 38px;
text-shadow: 0 0 9px 0 #FFFFFF;
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
