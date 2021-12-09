import Secondpage from "./Secondpage/Secondpage";
import Thirdpage from "./Thirdpage/Thirdpage";
import Fifthpage from "./Fifthpage/Fifthpage";
import Firstpage from "./Firstpage/Firstpage";
import "./Homepage.scss";
import Fourthpage from "./Fourthpage/Fourthpage";

const Homepage = () => {
  return (
    <div className="container">
      <div className="one">
        <Firstpage />
      </div>
      <div className="two">
        <Secondpage />
      </div>
      <div className="three">
        <Thirdpage />
      </div>
      <div className="four">
        <Fourthpage />
      </div>
      <div className="five">Fifth page</div>
    </div>
  );
};
export default Homepage;

/*
<div className="container">
      <section className="one">
        <h1> First Page</h1>
      </section>
      <section className="two">
        <h1> second Page</h1>
      </section>
      <section className="three">
        <h1> third Page</h1>
      </section>
      <section className="four">
        <h1> fourth Page</h1>
      </section>
      <section className="five">
        <h1> Fifth Page</h1>
      </section>
    </div>
    */
