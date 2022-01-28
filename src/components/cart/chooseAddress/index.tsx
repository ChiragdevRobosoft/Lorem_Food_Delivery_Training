import styled from "styled-components";
import {
  colors,
  sizes,
  fontFamilies,
  letterSpacing,
  angles,
} from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";
import CountryCode from "../../country-code";

const ChooseAddress = () => {
  return (
    <PageSection>
      <Searchpath path={data.searchPath.menu1} className="grey-dark" />
      <ContentContainer>
        <ProgressSection></ProgressSection>
        <CartSection>
          <StepsSection>
            <StepTitleLabel content={data.chooseAddress.title} />
            <StepContent>
              <DeliveryTypeLabel content={data.chooseAddress.deliveryType} />
              <AddressAddHolder>
                <MyAddressLabel
                  content={`${data.chooseAddress.myAddresses} (2)`}
                />
                <AddNewButton name={data.chooseAddress.addNew} />
              </AddressAddHolder>
              <ContactDetailsHolder>
                <ContactDetailsLabel
                  content={data.chooseAddress.contactDetails}
                />
                <CountryCode isOptional={true} />
              </ContactDetailsHolder>
              <CookingInstructionTitle
                content={data.cartData.cookingInstruction}
              />
              <CookingInstructionInput
                name={data.cartData.textboxLabel}
                isPassword={false}
              />
              <ButtonContainer>
                <BackButton name="BACK" />
                <ChoosePayment name="CHOOSE PAYMENT" />
              </ButtonContainer>
            </StepContent>
          </StepsSection>
        </CartSection>
      </ContentContainer>
    </PageSection>
  );
};
export default ChooseAddress;

const PageSection = styled.div`
  width: 100wh;
  min-height: 1083px;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
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
`;

const StepTitleLabel = styled(Label)`
  height: "30px";
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size30};
`;

const StepContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 21px 20px 20px;
  box-sizing: border-box;
  margin-top: 17px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const DeliveryTypeLabel = styled(Label)`
  height: 19px;
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.24px;
`;

const AddressAddHolder = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 29px;
`;

const MyAddressLabel = styled(Label)`
  height: 23px;
  color: #000000;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 17px;
  line-height: 23px;
  letter-spacing: -0.41px;
`;

const AddNewButton = styled(Buttons)`
  height: 30px;
  width: 96px;
  float: right;
  border-radius: 15px;
  box-shadow: none;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 14px;
  letter-spacing: -0.2px;
  line-height: 19px;
  text-align: center;
  text-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_e21143_09},
    ${colors.yellow_ffb03a_09}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  border: 1px solid ${colors.pink_e21143_09};
`;

const ContactDetailsHolder = styled.div`
  height: 12.313rem;
  width: 21.125rem;
  box-sizing: border-box;
  margin-top: 43px;
  border: 1px solid black;
  //overflow: hidden;
`;

const ContactDetailsLabel = styled(Label)`
  height: 23px;
  color: #000000;
  fonst-size: 17px;
  letter-spacing: -0.41px;
  line-height: 23px;
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

const ButtonContainer = styled.div`
  box-sizing: border-box;
  height: 45px;
  width: 348px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  margin: 22px 0px 0px auto;
`;

const BackButton = styled(Buttons)`
  box-sizing: border-box;
  height: 45px;
  width: 130px;
  color: #979797;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
  border: 1px solid #979797;
  box-shadow: none;
`;

const ChoosePayment = styled(Buttons)`
  box-sizing: border-box;
  height: 45px;
  width: 198px;
  background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
`;

// const PaymentContainer = styled.div`
//   width: 305px;
//   height: 480px;
//   margin-top: 74px;
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   padding: 15px 17px 12px 18px;
//   border-radius: 6px;
//   background-color: #ffffff;
//   box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
// `;

// const RadioTitleLabel = styled(Label)`
//   height: 23px;
//   color: ${colors.black_000000};
//   font-family: ${fontFamilies.fontFamilyOsRegular};
//   font-size: ${sizes.size17};
//   letter-spacing: ${letterSpacing.spaceNeg0_41};
//   line-height: ${sizes.size23};
//   margin-bottom: 17px;
// `;

// const RadioButtonOffers = styled(RadioButton)`
//   margin-top: 24px;
// `;

// const AlertText = styled(Label)`
//   height: 15px;
//   width: 226px;
//   color: ${colors.red_ee2538};
//   font-family: ${fontFamilies.fontFamilyOsSemiBold};
//   font-size: ${sizes.size11};
//   letter-spacing: ${letterSpacing.space0};
//   line-height: ${sizes.size15};
//   margin-top: 8px;
// `;

// const UserCodeSection = styled.div`
//   width: 238px;
//   //height: 91px;
//   margin-left: 26px;
//   margin-top: 20px;
//   // margin-bottom: 18px;
//   box-sizing: border-box;
//   padding-top: 20px;
// `;

// const CostDetailsContainer = styled.div`
//   box-sizing: border-box;
//   height: 169px;
//   width: 263px;
//   border: ${sizes.size1} solid ${colors.grey_f5eeee};
//   border-radius: ${sizes.size3};
//   background-color: ${colors.white_fcfcfc};
//   box-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size14} ${sizes.size0}
//     ${colors.grey_cac2c2_5};
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 28px;
// `;

// const ArrowIcon = styled.img`
//   margin-left: 8px;
//   object-fit: none;
// `;

// const TotalCostContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   height: 61px;
//   border-radius: ${sizes.size3};
//   background-color: ${colors.white_ffffff};
//   box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
//     ${colors.grey_c6c6c6_5};
//   align-items: center;
// `;

// const PayText = styled.div`
//   height: 22px;
//   width: 54px;
//   color: ${colors.blue_223136};
//   font-family: ${fontFamilies.fontFamilyOsRegular};
//   font-size: ${sizes.size16};
//   letter-spacing: ${sizes.size0};
//   line-height: ${sizes.size22};
//   margin-left: 10px;
//   margin-right: 86px;
// `;

// const TotalCost = styled.div`
//   height: 22px;
//   color: ${colors.blue_223136};
//   font-family: ${fontFamilies.fontFamilyOsBold};
//   font-size: ${sizes.size16};
//   letter-spacing: ${sizes.size0};
//   line-height: ${sizes.size22};
//   text-align: right;
// `;

// const CostList = styled.div`
//   height: 110px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const Cost = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-left: 13px;
//   margin-right: 23px;
// `;

// const CostSplit = styled.div`
//   height: 17px;
//   color: ${colors.grey_9b9b9b};
//   font-family: ${fontFamilies.fontFamilyOsRegular};
//   font-size: ${sizes.size12};
//   letter-spacing: ${sizes.size0};
//   line-height: ${sizes.size17};
// `;

// const UserCodeInput = styled(InputField)`
//   width: 238px;
//   height: 33p;
// `;
