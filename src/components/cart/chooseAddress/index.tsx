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
                <BackButton name={data.chooseAddress.routing[0]} />
                <ChoosePayment name={data.chooseAddress.routing[1]} />
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
  height: 30px;
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
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
`;

const DeliveryTypeLabel = styled(Label)`
  height: 19px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  letter-spacing: ${letterSpacing.spaceNeg0_24};
`;

const AddressAddHolder = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 29px;
`;

const MyAddressLabel = styled(Label)`
  height: 23px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size17};
  line-height: ${sizes.size23};
  letter-spacing: ${letterSpacing.spaceNeg0_41};
`;

const AddNewButton = styled(Buttons)`
  height: 30px;
  width: 96px;
  float: right;
  border-radius: 15px;
  box-shadow: none;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: -0.2px;
  line-height: ${sizes.size19};
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
  color: ${colors.grey_979797};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size19};
  border: 1px solid ${colors.grey_979797};
  box-shadow: none;
`;

const ChoosePayment = styled(Buttons)`
  box-sizing: border-box;
  height: 45px;
  width: 198px;
  background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size19};
`;
