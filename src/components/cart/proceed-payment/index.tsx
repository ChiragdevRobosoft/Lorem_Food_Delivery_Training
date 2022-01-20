import React, { useState } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, letterSpacing } from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import { useForm, Controller } from "react-hook-form";
import Unselected from "../../../assets/common/Radio button/radio_button_unselected.png";
import InputField from "../../common/textbox";

const ProceedPayment = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const [cartItems, setCartItems] = useState(data.cartContents.myCart);
  const [radioButtons, setRadioButtons] = useState({
    userCode: false,
    bestOffers: true,
  });
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setCartItems([]);
  };
  const handleRadioClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "userCode" && radioButtons.userCode === true) {
      setRadioButtons({ userCode: false, bestOffers: false });
    } else if (e.currentTarget.id === "userCode") {
      setRadioButtons({ userCode: true, bestOffers: false });
    } else if (
      e.currentTarget.id === "bestOffer" &&
      radioButtons.bestOffers === true
    ) {
      setRadioButtons({ userCode: false, bestOffers: false });
    } else if (e.currentTarget.id === "bestOffer") {
      setRadioButtons({ userCode: false, bestOffers: true });
    } else {
      return;
    }
  };
  return (
    <PageSection>
      <Searchpath path={data.searchPath.menu1} className="grey-dark" />
      <ContentContainer>
        <ProgressSection></ProgressSection>
        <CartSection>
          <StepsSection>
            <StepTitle content={data.cartTexts.title} />
            <CookingInstructionTitle>
              {data.cartData.cookingInstruction}
            </CookingInstructionTitle>
            <InputField
              name={data.cartData.textboxLabel}
              isPassword={false}
              style={{
                width: "263px",
                margin: "auto",
                color: `${colors.grey_4a4a4a}`,
              }}
            />
          </StepsSection>
          <PaymentContainer>
            <RadioTitle>{data.offersRadio.title}</RadioTitle>
            <Wrapper>
              <RadioInput
                type="radio"
                id="userCode"
                name="referal"
                value="userCode"
                onClick={handleRadioClick}
                checked={radioButtons.userCode}
              />
              <OptionName htmlFor="userCode">
                {data.offersRadio.options[0]}
              </OptionName>
            </Wrapper>
            {radioButtons.userCode === true ? (
              <UserCodeSection>
                <InputField
                  name="Add your promo code"
                  isPassword={false}
                  style={{ width: "238px", height: "33px" }}
                />
                <AlertText content={data.offersRadio.alertsText} />
              </UserCodeSection>
            ) : null}
            <Wrapper style={{ marginTop: "24px" }}>
              <RadioInput
                type="radio"
                id="bestOffer"
                name="referal"
                value="bestOffers"
                onClick={handleRadioClick}
                checked={radioButtons.bestOffers}
              />
              <OptionName htmlFor="best-offer">
                {data.offersRadio.options[1]}
              </OptionName>
            </Wrapper>
          </PaymentContainer>
        </CartSection>
      </ContentContainer>
    </PageSection>
  );
};
export default ProceedPayment;

const PageSection = styled.div`
  width: 100wh;
  height: 842px;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 72px;
`;

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 39px;
  margin-left: auto;
  margin-right: auto;
`;

const ProgressSection = styled.div`
  height: 55px;
  width: 66%;
`;

const CookingInstructionTitle = styled.div`
  height: 17px;
  width: 122.95px;
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-left: 21px;
  margin-top: 17px;
  margin-bottom: 15px;
`;

const CartSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 23px;
  box-sizing: border-box;
`;

const StepsSection = styled.div`
  width: 634px;
`;

const StepTitle = styled(Label)`
  height: "30px";
  color: ${colors.black_000000};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size22};
  letterspacing: ${letterSpacing.space0};
  lineheight: ${sizes.size30};
`;

const PaymentContainer = styled.div`
  width: 305px;
  height: 480px;
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px 17px 12px 18px;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
`;

const RadioTitle = styled.div`
  height: 23px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size17};
  letter-spacing: ${letterSpacing.spaceNeg0_41};
  line-height: ${sizes.size23};
  margin-bottom: 17px;
`;

const Wrapper = styled.div`
  display: block;
  height: 16px;
  top: 0;
`;

const RadioInput = styled.input`
  width: 16px;
  margin: 0px 7px;
  margin-left: 0;
  vertical-align: middle;

  &:checked + label {
    color: ${colors.grey_4a4a4a};
  }
  &:not(:checked) {
    background-image: url(${Unselected});
    height: 15.28px;
  }
  &:not(:checked) + label {
    color: ${colors.grey_4a4a4a};
  }
`;

const OptionName = styled.label`
  height: 19px;
  font-size: ${sizes.size14};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  vertical-align: middle;
`;

const AlertText = styled(Label)`
  height: 15px;
  width: 226px;
  color: ${colors.red_ee2538};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size11};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size15};
  margin-top: 8px;
`;

const UserCodeSection = styled.div`
  width: 238px;
  height: 91px;
  margin-left: 26px;
  margin-top: 20px;
  margin-bottom: 18px;
  box-sizing: border-box;
  padding-top: 20px;
`;
