import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CircleFlag } from "react-circle-flags";
import { SocialIcon } from "react-social-icons";
import data from "./data.json";

const Footer = () => {
  return (
    <div className="footer-container">
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
                bgColor="white"
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
    </div>
  );
};

export default Footer;
