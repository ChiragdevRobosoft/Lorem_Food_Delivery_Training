import React, { FC } from "react";
import "./index.scss";
import Menu from "../../../assets/restaurantList/menu.png";

interface RestauarantCardprops {
  card: {
    name: string;
    rating: number;
    address: string;
    variety: string;
    availabilityInfo: string;
    detailsList: string[];
    image: string;
  };
}

const RestaurantCard: FC<RestauarantCardprops> = ({ card }) => {
  return (
    <div className="container">
      <img src={card.image} className="food1" alt="" />
      <div className="rating">{card.rating}</div>
      <img src={Menu} className="menu" alt="" />
      <div className="column-flex">
        <div className="restaurant-name">{card.name}</div>
        <div className="restaurant-address">{card.address}</div>
        <hr />
        <div className="food-variety">{card.variety}</div>
        <div
          className={card.availabilityInfo.includes("Open") ? "open" : "close"}
        >
          {card.availabilityInfo}
        </div>
        <ul className="details-list">
          {card.detailsList.map((detail) => {
            return <li>{detail}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
