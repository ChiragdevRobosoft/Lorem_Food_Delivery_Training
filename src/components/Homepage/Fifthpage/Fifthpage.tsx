import leftBottom from "./../../../assets/homepage/Fifthpage/page5-left-bottom.png";
import centerPhone from "./../../../assets/homepage/Fifthpage/page5-phone.png";
import "./Fifthpage.scss";

const Fifthpage = () => {
  return (
    <div className="page-container">
      <img className="left-bottom" src={leftBottom} alt="left-bottom" />
      <img className="center-phone" src={centerPhone} alt="center-phone" />
    </div>
  );
};
export default Fifthpage;
