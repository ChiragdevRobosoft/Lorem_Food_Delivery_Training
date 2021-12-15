import leftBottom from "./../../../assets/homepage/loremStoreApp/page5-left-bottom.png";
import centerPhone from "./../../../assets/homepage/loremStoreApp/page5-center-phone.png";
import topRight from "./../../../assets/homepage/loremStoreApp/page5-top-right.png";
import "./index.scss";

const LoremStoreApp = () => {
  return (
    <div className="fifth-page-container">
      <img className="left-bottom" src={leftBottom} alt="left-bottom" />
      <div className="marketing-info-holder">
        <p className="app-name">Lorem App</p>
        <p className="download-text">Download the Food App</p>
        <p className="app-description">
          Get real-time order updates, live chat support, and exclusive app-only
          offers.
        </p>
        <div className="store-app-container">
          <a className="app-store" href="" />
          <a className="play-store" href="" />
        </div>
      </div>
      <img className="center-phone" src={centerPhone} alt="center-phone" />
      <img className="top-right" src={topRight} alt="top-right" />
    </div>
  );
};
export default LoremStoreApp;
