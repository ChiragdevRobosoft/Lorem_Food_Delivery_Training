import React from "react";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import { SocialIcon } from "react-social-icons";
import data from "../constants.json";
import styled from "styled-components";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  opacity,
} from "../../../variables";

const Footer = () => {
  return (
    <Wrapper>
      <ColumnFlex>
        <LoremText>LOREM</LoremText>
        <InvisibleLineBreak />
        <CityCountryContainer>
          <CityCountryNumber>24</CityCountryNumber>
          <CityCountryText>CITIES</CityCountryText>
        </CityCountryContainer>
        <LineBreak />
        <OuterContainer>
          <CityCountryContainer>
            <CityCountryNumber>4</CityCountryNumber>
            <CityCountryText>COUNTRIES</CityCountryText>
          </CityCountryContainer>
          {data.countryCodes.map((countryCode, index) => {
            return (
              <CircleFlag
                key={index}
                className="flag"
                countryCode={countryCode}
                height="30"
              />
            );
          })}
        </OuterContainer>
        <LineBreak />
        <SocialIconContainer>
          {data.socialIcons.map((socialIcon, index) => {
            return (
              <SocialIcon
                key={index}
                className="social-icon"
                network={socialIcon}
                fgColor="rgba(128,128,128,0.5)"
                bgColor={`${colors.white_ffffff}`}
                url={`https://${socialIcon}.com/jaketrent`}
              />
            );
          })}
        </SocialIconContainer>
      </ColumnFlex>
      <RowFlex>
        {data.links.map((link, index) => {
          return (
            <RedirectLink to={`/${link.toLowerCase()}`} key={index}>
              {link}
            </RedirectLink>
          );
        })}
      </RowFlex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  height: ${sizes.size227};
  width: ${sizes.fullWidth};
  background-color: ${colors.white_ffffff};
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  top: ${sizes.size0};
  width: ${sizes.halfWidth};
  padding-bottom: ${sizes.size17};
  border-bottom: ${sizes.size1} solid ${colors.grey_979797_19};
  border-width: ${sizes.size2};
  box-sizing: border-box;
`;

const LoremText = styled.div`
  height: ${sizes.size60};
  width: ${sizes.size103};
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_e21143_09},
    ${colors.yellow_ffb03a_09}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  font-family: ${fontFamilies.fontFamilyBn};
  font-size: ${sizes.size50};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size60};
  text-align: center;
  vertical-align: middle;
`;

const InvisibleLineBreak = styled.div`
  height: ${sizes.size0};
  width: ${sizes.size0};
`;

const CityCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.size19_4};
`;

const CityCountryNumber = styled.span`
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size24};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19_4};
  text-align: center;
  margin-right: ${sizes.size9};
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_ff3366_08},
    ${colors.yellow_ffb03a_08}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
`;

const CityCountryText = styled.span`
  color: ${colors.grey_636364_07};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  vertical-align: bottom;
  font-weight: ${fontWeight.weight600};
`;

const LineBreak = styled.hr`
  width: ${sizes.size2};
  margin: ${sizes.size0};
  box-sizing: border-box;
  height: ${sizes.size19_4};
  border: ${sizes.size1} solid ${colors.grey_979797};
  opacity: ${opacity.opacity0_19};
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${sizes.width35p};
  height: ${sizes.size19_4};
  .flag {
    vertical-align: middle;
    padding-right: ${sizes.size10};
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: normal;
  align-items: flex-start;
  .img {
    vertical-align: middle;
    height: ${sizes.size22_41};
    width: ${sizes.size24_95};
  }
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: normal;
  margin-right: auto;
  margin-left: auto;
  width: ${sizes.halfWidth};
  height: ${sizes.size19};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin-top: ${sizes.size28};
`;

const RedirectLink = styled(Link)`
  text-decoration: none;
  color: ${colors.grey_636364_07};
  font-weight: ${fontWeight.weight600};
`;

export default Footer;
