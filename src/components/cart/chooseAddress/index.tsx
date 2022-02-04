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
import { queries } from "../../common/breakpoints";

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
  width: 100%;
  min-height: 1083px;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 40px;
  padding-bottom: 72px;
  ${queries.tabletLandscape} {
    gap: 32px;
    padding-bottom: 58px;
    min-height: 866px;
  }
  ${queries.tablet} {
    gap: 24px;
    padding-bottom: 43px;
    min-height: 651px;
  }
  ${queries.smallMobile} {
    gap: 12px;
    padding-bottom: 22px;
    min-height: 325px;
  }
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
  ${queries.tabletLandscape} {
    gap: 32px;
    width: 83%;
  }
  ${queries.tablet} {
    gap: 24px;
    width: 100%;
  }
  ${queries.smallMobile} {
    gap: 12px;
    width: 100%;
  }
`;

const ProgressSection = styled.div`
  height: 55px;
  width: 66%;
  ${queries.tablet} {
    height: 33px;
    width: 83%:
  }
  ${queries.smallMobile} {
    height: 17px;
    width: 95%;
  }
`;

const CartSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //gap: 23px;
  box-sizing: border-box;
`;

const StepsSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid red;
  margin-right: 24px;
`;

const StepTitleLabel = styled(Label)`
  height: 30px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size30};
  // ${queries.tablet} {
  //   height: 30px;
  //   line-height: 30px;
  //   font-size: 22px;
  // }
  ${queries.smallMobile} {
    height: 9px;
    line-height: 9px;
    font-size: 7px;
  }
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
  ${queries.tablet} {
    height: 11px;
    line-height: 11px;
    font-size: 8px;
  }
  ${queries.smallMobile} {
    height: 6px;
    line-height: 6px;
    font-size: 4px;
  }
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
  ${queries.tablet} {
    height: 13px;
    line-height: 13px;
    font-size: 10px;
  }
  ${queries.smallMobile} {
    height: 7px;
    line-height: 7px;
    font-size: 5px;
  }
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
  //height: 12.313rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 43px;
  border: 1px solid black;
`;

const ContactDetailsLabel = styled(Label)`
  height: 23px;
  color: ${colors.black_000000};
  fonst-size: 17px;
  letter-spacing: -0.41px;
  line-height: 23px;
`;

const CookingInstructionTitle = styled(Label)`
  height: 17px;
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
  ${queries.tablet} {
    width: 100%;
  }
  ${queries.smallMobile} {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  height: 45px;
  width: 348px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 22px 0px 0px auto;
  padding: none;
  ${queries.tablet} {
    height: 36px;
    width: 100%;
  }
  ${queries.smallMobile} {
    height: 27px;
    width: 100%;
  }
`;

const BackButton = styled(Buttons)`
  box-sizing: border-box;
  height: 45px;
  width: 38%;
  color: ${colors.grey_979797};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size19};
  border: 1px solid ${colors.grey_979797};
  box-shadow: none;
  ${queries.tablet} {
    height: 36px;
    line-height: 15px;
    font-size: 11px;
  }
  ${queries.smallMobile} {
    height: 27px;
    line-height: 11px;
    font-size: 8px;
  }
`;

const ChoosePayment = styled(Buttons)`
  box-sizing: border-box;
  height: 45px;
  width: 58%;
  background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size19};
  ${queries.tablet} {
    height: 36px;
    line-height: 15px;
    font-size: 10px;
  }
  ${queries.smallMobile} {
    height: 27px;
    line-height: 11px;
    font-size: 8px;
  }
`;
