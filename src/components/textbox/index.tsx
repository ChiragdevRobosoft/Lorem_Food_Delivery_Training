import styled from 'styled-components';
import React, { useState } from 'react';
import view_active from '../../assets/view_active.png';
import view_inactive from '../../assets/view_inactive.png';
const InputField = ({ name, isPassword }: { name: any, isPassword: boolean }) => {
    const [viewState, changeViewState] = useState(false);
    const [focusState, changeFocusState] = useState(false);
    const handleViewIconClick = () => {
        changeViewState(!viewState);
    };
    const handleFocusChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.target.value === '') changeFocusState(false);
    };
    return (
        <FormContainer>
            <Textbox
                type={!viewState && isPassword ? 'password' : 'text'}
                onFocus={() => {
                    changeFocusState(true);
                }}
                onBlur={(e) => {
                    handleFocusChange(e);
                }}
                className={focusState ? 'moveUp' : null}
            />
            {isPassword ? (
                <>
                    <Label className="form-label">{name} </Label>
                    <ViewIcon
                        onClick={(e) => {
                            handleViewIconClick();
                        }}
                        src={viewState ? view_active : view_inactive}
                        alt="icn"
                    ></ViewIcon>
                </>
            ) : (
                <Label className="form-label">{name}</Label>
            )}
        </FormContainer>
    );
};
export default InputField;
const FormContainer = styled.div`
	position: relative;
	height: 15%;
	width: 100%;
	.moveUp ~ .form-label {
		top: -1.5rem;
		font-size: 0.8rem;
		position: relative;
	}
`;

const Textbox = styled.input`
	position: absolute;
	padding: 0;
	top: 0;
	left: 0;
	height: 40%;
	width: 78.8%;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #858585;
	margin-left: 10%;
	color: #000000;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 100;
	letter-spacing: -0.27px;
	line-height: 22px;
	outline: none;
	pointer-events: all;
	:focus {
		border-bottom: 1px solid black;
	}
`;

const Label = styled.label`
	height: 50%;
	width: 86.36px;
	color: #858585;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	letter-spacing: -0.27px;
	line-height: 22px;
	margin-left: 10%;
	cursor: text;
	pointer-events: none;
`;
const ViewIcon = styled.img`
	right: 14%;
	height: 17px;
	width: 20px;
	margin-top: 1%;
	position: absolute;
`;