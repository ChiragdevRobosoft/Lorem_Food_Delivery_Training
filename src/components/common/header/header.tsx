import cartIcon from "./../../../assets/home/landingPage/cart-icon-homepage.png";

import "./header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <p className="header-title">LOREM</p>
      <select name="languages" id="pageLang">
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
      </select>
      <p className="login">LOGIN</p>
      <p className="create-account">CREATE AN ACCOUNT</p>
      <div className="cart-holder">
        <img src={cartIcon} alt="cart-icon" />
        <p className="cart">CART</p>
      </div>
    </header>
  );
};
export default Header;
