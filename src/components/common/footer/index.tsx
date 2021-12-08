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
          <CircleFlag className="flag" countryCode="ae" height="30" />
          <CircleFlag className="flag" countryCode="kw" height="30" />
          <CircleFlag className="flag" countryCode="qa" height="30" />
          <CircleFlag className="flag" countryCode="sa" height="30" />
        </div>
        <hr />
        <div className="social-icons">
          <SocialIcon
            className="sicons"
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
