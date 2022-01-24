import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, letterSpacing } from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import { useForm, Controller } from "react-hook-form";
import Unselected from "../../../assets/common/Radio button/radio_button_unselected.png";
import { CartData } from "../../common/CartDataProvider";
import InputField from "../../common/textbox";
import { foodItemProps } from "../../common/interfaces";
import CartCard from "../../common/CartCard";

const trialArray = [
  {
    id: "food-one",
    foodName: "Chilli Cheese Meal",
    image: false,
    bestseller: false,
    veg: true,
    cost: 20.0,
    customizable: true,
    description: "hello",
    quantity: 2,
    addOn: " Avacado, grilled Salmon",
  },
  {
    id: "food-one",
    foodName: "Chilli Cheese Meal",
    image: false,
    bestseller: false,
    veg: true,
    cost: 20.0,
    customizable: true,
    description: "hello",
    quantity: 2,
    addOn: " Avacado, grilled Salmon",
  },
  {
    id: "food-one",
    foodName: "Chilli Cheese Meal",
    image: false,
    bestseller: false,
    veg: true,
    cost: 20.0,
    customizable: true,
    description: "hello",
    quantity: 2,
    addOn: " Avacado, grilled Salmon",
  },
];

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
  const { details, setDetails } = useContext(CartData);

  // const handleClick = () => {
  //   setDetails([]);
  // };

  let totalCost = details.reduce(
    (total: number, foodItem: foodItemProps) =>
      Math.round(
        foodItem.cost * foodItem.quantity + (total * 100) / 100
      ).toFixed(2),
    0
  );

  let fee = details.length === 0 ? 0 : (10 * 100) / 100;
  let discount = details.length === 0 ? 0 : 12.24;
  let costToPay = (totalCost + fee - discount).toFixed(2);
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
            <DeliveryEstimationLabel content="Estimated Delivery time - 60 - 80 min" />
            <StepContent>
              <ItemList>
                {trialArray?.map((item: foodItemProps, index: number) => {
                  return <CartCard item={item} key={index} />;
                })}
              </ItemList>
              <CookingInstructionTitle
                content={data.cartData.cookingInstruction}
              />
              <CookingInstructionInput
                name={data.cartData.textboxLabel}
                isPassword={false}
              />
            </StepContent>
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
              <OptionName content={data.offersRadio.options[0]} />
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
              <OptionName content={data.offersRadio.options[1]} />
            </Wrapper>
            <CostDetailsContainer>
              <TotalCostContainer>
                <PayText>{data.cartData.toPay}</PayText>
                <TotalCost>
                  {data.costUnit}
                  {costToPay}
                </TotalCost>
                <ArrowIcon src="" />
              </TotalCostContainer>
              <CostList>
                <Cost>
                  <CostSplit>{data.cartData.itemsTotal}</CostSplit>
                  <CostSplit>
                    {data.costUnit}
                    {totalCost}
                  </CostSplit>
                </Cost>
                <Cost>
                  <CostSplit>{data.cartData.charges}</CostSplit>
                  <CostSplit>
                    {data.costUnit}
                    {fee}
                  </CostSplit>
                </Cost>
                <Cost>
                  <CostSplit>{data.cartData.discount}</CostSplit>
                  <CostSplit>
                    {data.costUnit}
                    {discount}
                  </CostSplit>
                </Cost>
              </CostList>
            </CostDetailsContainer>
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
`;

const StepTitleLabel = styled(Label)`
  height: "30px";
  color: ${colors.black_000000};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size22};
  letterspacing: ${letterSpacing.space0};
  lineheight: ${sizes.size30};
`;

const DeliveryEstimationLabel = styled(Label)`
  height: 17px;
  color: #6f6e6e;
  font-size: 12px;
  line-height: 17px;
`;

const StepContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 21px 20px 20px;
  box-sizing: border-box;
  border: 1px solid red;
`;

const ItemList = styled.div`
  padding: 0px 21px;
  border-bottom: ${sizes.size1} solid ${colors.white_ededed};
  max-height: 347px;
  overflow: auto;
  padding: 0px;
`;

const CookingInstructionTitle = styled(Label)`
  height: 17px;
  width: 122.95px;
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-top: 17px;
  margin-bottom: 15px;
`;

const CookingInstructionInput = styled(InputField)`
  width: 263px;
  margin: auto;
  color: ${colors.grey_4a4a4a};
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

const OptionName = styled(Label)`
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
  //height: 91px;
  margin-left: 26px;
  margin-top: 20px;
  // margin-bottom: 18px;
  box-sizing: border-box;
  padding-top: 20px;
`;

const CostDetailsContainer = styled.div`
  box-sizing: border-box;
  height: 169px;
  width: 263px;
  border: ${sizes.size1} solid ${colors.grey_f5eeee};
  border-radius: ${sizes.size3};
  background-color: ${colors.white_fcfcfc};
  box-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size14} ${sizes.size0}
    ${colors.grey_cac2c2_5};
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
  fooditemect-fit: none;
`;

const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 61px;
  border-radius: ${sizes.size3};
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.grey_c6c6c6_5};
  align-items: center;
`;

const PayText = styled.div`
  height: 22px;
  width: 54px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin-left: 10px;
  margin-right: 86px;
`;

const TotalCost = styled.div`
  height: 22px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
`;

const CostList = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Cost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 13px;
  margin-right: 23px;
`;

const CostSplit = styled.div`
  height: 17px;
  color: ${colors.grey_9b9b9b};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;
