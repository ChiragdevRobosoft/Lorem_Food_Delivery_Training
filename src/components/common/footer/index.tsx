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
      <div className="first-flex">
        <div className="lorem-text">LOREM</div>
        <hr className="invisible" />
        <div className="city-countries-container">
          <span className="city-countries-number">24</span>
          <span className="city-countries-text">CITIES</span>
        </div>
        <hr />
        <div className="outer-container">
          <div className="city-countries-container">
            <div className="city-countries-number">4</div>
            <div className="city-countries-text">COUNTRIES</div>
          </div>
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
        </div>
        <hr />
        <div className="social-icons">
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
        </div>
      </div>
      <div className="second-flex">
        {data.links.map((link, index) => {
          return (
            <Link to={`/${link.toLowerCase()}`} key={index}>
              {link}
            </Link>
          );
        })}
      </div>
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

  .first-flex {
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

    .lorem-text {
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
    }

    .invisible {
      height: ${sizes.size0};
      width: ${sizes.size0};
    }

    .city-countries-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: ${sizes.size19_4};

      .city-countries-number {
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
      }

      .city-countries-text {
        color: ${colors.grey_636364_07};
        font-family: ${fontFamilies.fontFamilyOs};
        font-size: ${sizes.size14};
        letter-spacing: ${sizes.size0};
        line-height: ${sizes.size19};
        vertical-align: bottom;
        font-weight: ${fontWeight.weight600};
      }
    }

    hr {
      width: ${sizes.size2};
      margin: ${sizes.size0};
      box-sizing: border-box;
      height: ${sizes.size19_4};
      border: ${sizes.size1} solid ${colors.grey_979797};
      opacity: ${opacity.opacity0_19};
    }

    .outer-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: ${sizes.widthp35};
      height: ${sizes.size19_4};

      .flag {
        vertical-align: middle;
        padding-right: ${sizes.size10};
      }
    }

    .social-icons {
      display: flex;
      flex-direction: row;
      justify-content: normal;
      align-items: flex-start;

      .img {
        vertical-align: middle;
        height: ${sizes.size22_41};
        width: ${sizes.size24_95};
      }
    }
  }

  .second-flex {
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

    a {
      text-decoration: none;
      color: ${colors.grey_636364_07};
      font-weight: ${fontWeight.weight600};
    }
  }
`;

export default Footer;
