import React, { useState, useEffect } from "react";
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
import { queries } from "../breakpoints";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <LoremText>{data.header.title}</LoremText>
        <InvisibleLineBreak />
        <CityCountryContainer>
          <CityCountryNumber>{data.footerData.cities.count}</CityCountryNumber>
          <CityCountryText>{data.footerData.cities.title}</CityCountryText>
        </CityCountryContainer>
        <LineBreak />
        <CityCountryContainer>
          <CityCountryNumber>
            {data.footerData.countries.count}
          </CityCountryNumber>
          <CityCountryText>{data.footerData.countries.title}</CityCountryText>
        </CityCountryContainer>
        <OuterContainer>
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
      </FooterContainer>
      <LinksContainer>
        {data.links.map((link, index) => {
          return (
            <RedirectLink to={`/${link.toLowerCase()}`} key={index}>
              {link}
            </RedirectLink>
          );
        })}
      </LinksContainer>
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
  min-height: 227px;
  height: auto;
  width: ${sizes.fullWidth};
  background-color: ${colors.white_ffffff};
  padding: 0 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  top: 0;
  width: 960px;
  padding-bottom: 17px;
  border-bottom: ${sizes.size1} solid ${colors.grey_979797_19};
  border-width: ${sizes.size2};
  box-sizing: border-box;
  ${queries.tabletLandscape} {
    width: 700px;
  }
  ${queries.tablet} {
    width: auto;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
`;

const LoremText = styled.div`
  height: 60px;
  width: 103px;
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
  ${queries.tablet} {
    font-size: ${sizes.size34};
  }
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
  height: 19.4px;
`;

const CityCountryNumber = styled.span`
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size24};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19_4};
  text-align: center;
  margin-right: 9px;
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_ff3366_08},
    ${colors.yellow_ffb03a_08}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  ${queries.tablet} {
    font-size: ${sizes.size20};
  }
`;

const CityCountryText = styled.span`
  color: ${colors.grey_636364_07};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  vertical-align: bottom;
  ${queries.tablet} {
    font-size: ${sizes.size11};
  }
`;

const LineBreak = styled.hr`
  width: 2px;
  margin: 0 5px;
  box-sizing: border-box;
  height: 19.4px;
  border: ${sizes.size1} solid ${colors.grey_979797};
  opacity: ${opacity.opacity0_19};
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 206px;
  height: 30px;
  .flag {
    vertical-align: middle;
    padding-right: 10px;
    ${queries.tablet} {
      height: 23px;
      width: 23px;
    }
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  .img {
    vertical-align: middle;
    height: 22.41px;
    width: 24.95px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: normal;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  width: 960px;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin-top: 28px;
  ${queries.tabletLandscape} {
    width: 700px;
  }
  ${queries.tablet} {
    width: auto;
    flex-wrap: wrap;
    font-size: ${sizes.size11};
    margin-top: 18px;
  }
`;

const RedirectLink = styled(Link)`
  height: 19px;
  text-decoration: none;
  color: ${colors.grey_636364_07};
  margin: 0 10px;
  white-space: nowrap;
`;

export default Footer;
