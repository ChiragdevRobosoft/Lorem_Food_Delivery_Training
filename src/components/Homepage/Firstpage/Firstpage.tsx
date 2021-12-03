import "./Firstpage.scss";

const Firstpage = () => {
  return (
    <div className="page-container">
      <header className="header-container">
        <p className="header-title">LOREM</p>
        <select name="languages" id="pageLang">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
        <p className="login">LOGIN</p>
        <p className="create-account">CREATE AN ACCOUNT</p>
        <div className="cart-holder">
          <p className="cart">CART</p>
        </div>
      </header>
    </div>
  );
};
export default Firstpage;
