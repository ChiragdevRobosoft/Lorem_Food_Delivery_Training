import styled from "styled-components";
import searchIcon from "./../../../../assets/home/foodRestaurantSearch/foodSearchBox/search-icon-home.png";
import pinIcon from "./../../../../assets/home/foodRestaurantSearch/foodSearchBox/icn_pin.png";
import gpsIcon from "./../../../../assets/home/foodRestaurantSearch/foodSearchBox/icn_gps_indicator.png";
import timeDateIcon from "./../../../../assets/home/foodRestaurantSearch/foodSearchBox/present-t&d-firstpage.png";

const Foodsearch = () => {
  return (
    <Wrapper>
      <input
        type="text"
        name="food-search"
        placeholder="Search your restaurant or cuisines"
      />
      <div className="loc-date-container">
        <div className="location-input">
          <input
            type="text"
            name="location"
            placeholder="Downtown Burj Khalifa, Dubai"
          />
          <button />
        </div>
        <div className="date-input">
          <input
            type="text"
            name="date"
            placeholder="Search your restaurant or cuisines"
            value="Today, 28 April, 2018"
          />
          <button />
        </div>
      </div>
    </Wrapper>
  );
};
export default Foodsearch;

const Wrapper = styled.div`
  margin: 0px 889px 176px 420px;
  height: 175px;
  width: 611px;
  input {
    height: 70px;
    width: 611px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14);
    outline: none;
    border: none;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 25px 22px;
    padding-left: 61px;
    ::placeholder {
      height: 22px;
      width: 296px;
      color: #bdbdbd;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      letter-spacing: -0.27px;
      line-height: 22px;
    }
  }
  .loc-date-container {
    width: 611px;
    height: 70px;
    margin: 35px 0px 0px 0px;
    display: flex;

    .location-input {
      height: 70px;
      width: 338px;
      margin: 0px 22px 0px 4px;
      display: flex;
      input {
        height: 70px;
        width: 338px;
        border-radius: 10px;
        background-color: #ffff;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
        background-image: url(${pinIcon});
        background-repeat: no-repeat;
        background-position: 19px 25px;
        padding-left: 46px;
      }
      button {
        background-color: #ffff;
        background-image: url(${gpsIcon});
        background-repeat: no-repeat;
        background-position: center;
        height: 20px;
        width: 20px;
        margin: auto -21px auto -41px;
        border: none;
      }
    }
    .date-input {
      height: 70px;
      width: 247px;
      margin: 0 0 0 0;
      display: flex;
      input {
        height: 70px;
        width: 247px;
        color: #4c4c4c;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 14px;
        letter-spacing: -0.24px;
        line-height: 17px;
        background-image: none;
        padding-left: 23px;
      }
      button {
        height: 54px;
        width: 54px;
        background-color: #ffff;
        background-image: url(${timeDateIcon});
        background-repeat: no-repeat;
        background-position: center;
        margin: auto -10px auto -64px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
        border: none;
      }
    }
  }
`;
