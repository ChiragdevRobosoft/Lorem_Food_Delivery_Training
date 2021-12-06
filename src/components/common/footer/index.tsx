import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CircleFlag } from "react-circle-flags";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-flex">
        <div className="lorem-text">LOREM</div>
        <div className="city-container right-border">
          <span className="city-number">24</span>
          <span className="city-text">CITIES</span>
        </div>
        <div className="outer-container right-border">
          <div className="city-container">
            <div className="city-number">4</div>
            <div className="city-text">COUNTRIES</div>
          </div>
          <div className="circle-flag">
            <CircleFlag className="flag" countryCode="us" height="30" />
            <CircleFlag className="flag" countryCode="in" height="30" />
            <CircleFlag className="flag" countryCode="es" height="30" />
            <CircleFlag className="flag" countryCode="sl" height="30" />
          </div>
        </div>
        <div className="social-icons">
          <SocialIcon
            network="google"
            fgColor="rgba(128,128,128,0.5)"
            bgColor="white"
            url="https://google.com/jaketrent"
          />
          <SocialIcon
            network="facebook"
            fgColor="rgba(128,128,128,0.5)"
            bgColor="white"
            url="https://facebook.com/jaketrent"
          />
          <SocialIcon
            network="linkedin"
            fgColor="rgba(128,128,128,0.5)"
            bgColor="white"
            url="https://linkedin.com/jaketrent"
          />
          <SocialIcon
            network="twitter"
            fgColor="rgba(128,128,128,0.5)"
            bgColor="white"
            url="https://twitter.com/jaketrent"
          />
        </div>
      </div>
      <div className="second-flex">
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/privacy policy">Privacy policy</Link>
        <Link to="terms & condition">Terms &amp; condition</Link>
        <Link to="mobile app">Mobile app</Link>
        <Link to="blog">Blog</Link>
        <Link to="contact">Contact</Link>
        <Link to="sitemap">Sitemap</Link>
      </div>
    </div>
  );
};

export default Footer;
