import React, { useState } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, letterSpacing } from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../common/textbox";
import RadioButton from "./radioButton";

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
            <StepTitleLabel content={data.cartTexts.title} />
            <CookingInstructionTitle>
              {data.cartData.cookingInstruction}
            </CookingInstructionTitle>
            <CookingInstructionInput
              name={data.cartData.textboxLabel}
              isPassword={false}
            />
          </StepsSection>
          <PaymentContainer>
            <RadioTitle>{data.offersRadio.title}</RadioTitle>
            <RadioButton
              idValue={data.offersRadio.idValue[0]}
              radioName={data.offersRadio.name}
              handleRadioClick={handleRadioClick}
              option={data.offersRadio.options[0]}
              checkedStatus={radioButtons.userCode}
            />
            {radioButtons.userCode === true ? (
              <UserCodeSection>
                <UserCodeInput
                  name={data.offersRadio.userPromoCode}
                  isPassword={false}
                />
                <AlertText content={data.offersRadio.alertsText} />
              </UserCodeSection>
            ) : null}
            <RadioButtonOffers
              idValue={data.offersRadio.idValue[1]}
              radioName={data.offersRadio.name}
              handleRadioClick={handleRadioClick}
              option={data.offersRadio.options[1]}
              checkedStatus={radioButtons.bestOffers}
            />
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

const CookingInstructionInput = styled(InputField)`
  width: 263px;
  margin: auto;
  color: ${colors.grey_4a4a4a};
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

const StepTitleLabel = styled(Label)`
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

const RadioButtonOffers = styled(RadioButton)`
  margin-top: 24px;
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

const UserCodeInput = styled(InputField)`
  width: 238px;
  height: 33p;
`;
