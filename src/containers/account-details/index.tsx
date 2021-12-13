
import React from 'react';
import styled from 'styled-components';
import backButton from '../../assets/back_button.png';
import { useHistory } from 'react-router-dom';
import TextBox from '../../components/textbox';
import Button1 from '../../components/button/index';


const AccountDetails = ({ onCloseModal }: { onCloseModal: any }) => {
    const history = useHistory();
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
                <Button onClick={() => history.push("/forgot-password")}>
                    <img src={backButton} className="arrow" alt="cut" ></img>
                </Button>
                <Text1>Verified!</Text1>
                <Text2>Your Email is verifeid.</Text2>
                <Text3>Finally enter details below to create account.</Text3>
                <TextBox name='First Name' isPassword={false}></TextBox>
                <TextBox name='Last Name' isPassword={false}></TextBox>
                <TextBox name='Create Password' isPassword={true}></TextBox>
                <VerifyButton>
                    <Button1 name="DONE"></Button1>
                </VerifyButton>
            </WrapperRight>
        </Wrapper>
    );
};
export default AccountDetails;
const VerifyButton = styled.div`
margin-top: 40px;
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
const Button = styled.button`
	padding: 0;
	background-color: transparent;
	border: none;
	right: 430px;
	outline:none;
    block-size:10px;
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
  width: 183px;
  color: #2A2C30;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 0 9px 0 #FFFFFF;
  margin-top:60px ;
  margin-left: 150px;
`;
const Text2 = styled.p`
	font-family: 'Open Sans', sans-serif;
  	width: 220px;
  	color: #4A4A4A;
  	font-size: 14px;
  	letter-spacing: -0.24px;
  	text-align: center;
  	margin-left: 130px;
`;
const Text3 = styled.p`
	font-family: 'Open Sans', sans-serif;
  	color: #4A4A4A;
  	font-size: 14px;
  	letter-spacing: -0.24px;
  	text-align: center;
  	margin-left: 5px;
    margin-bottom: 50px;
    margin-top: -12px;
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
