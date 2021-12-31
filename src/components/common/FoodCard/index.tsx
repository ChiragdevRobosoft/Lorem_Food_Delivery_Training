import React, { FC } from "react";
import styled from "styled-components";
import Bitmap from "../../../assets/restaurantList/Bitmap.png";
import data from "../constants.json";
import vegIcon from "../../../assets/menu/icon_veg.png";
import nonvegIcon from "../../../assets/menu/icn_nonveg.png";
import BestsellerIcon from "../../../assets/menu/Best seller.png";
import AddIcon from "../../../assets/menu/Add button.png";
import AddedIcon from "../../../assets/menu/Added button.png";

const FoodCard: FC<any> = ({ cardDetails }) => {
  return (
    <Wrapper>
      {cardDetails.image ? <FoodImage src={Bitmap} /> : null}
      {cardDetails.image ? (
        <VegIcon
          src={cardDetails.veg ? vegIcon : nonvegIcon}
          imageProp={cardDetails.image}
        />
      ) : null}
      {cardDetails.bestseller ? <Bestseller src={BestsellerIcon} /> : null}
      {cardDetails.alreadyInCart ? (
        <>
          <GreenText>Already in cart</GreenText>
          <Add src={AddedIcon} />
        </>
      ) : (
        <Add src={AddIcon} />
      )}
      <ColumnFlex imageProp={cardDetails.image}>
        <FoodName>
          {cardDetails.image ? null : (
            <VegIcon src={cardDetails.veg ? vegIcon : nonvegIcon} />
          )}
          {cardDetails.foodName}
        </FoodName>
        <Cost>AED27.00</Cost>
        {cardDetails.customizable ? (
          <Customizable>Customizable</Customizable>
        ) : null}
        <Description>{cardDetails.description}</Description>
      </ColumnFlex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 126px;
  width: 636px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FoodImage = styled.img`
  position: relaive;
  width: 105px;
  height: 105px;
  margin: 10px;
`;

const VegIcon = styled.img<any>`
  position: ${(props) => (props.imageProp ? "absolute" : "relative")};
  top: ${(props) => (props.imageProp ? "94px" : "auto")};
  left: ${(props) => (props.imageProp ? "18px" : 0)};
  margin-right: 4px;
`;

const Bestseller = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Add = styled.img`
  position: absolute;
  position: absolute;
  top: 86px;
  right: 10px;
`;

const GreenText = styled.div`
  position: absolute;
  top: 67px;
  right: 24px;
  height: 14px;
  color: #49bb5c;
  font-family: "Open Sans";
  font-size: 10px;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

const ColumnFlex = styled.div<any>`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  top: 0;
  left: ${(props) => (props.imageProp ? "134px" : "18px")};
`;

const FoodName = styled.div`
  height: 22px;
  color: #223136;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
`;

const Cost = styled.div`
  height: 17px;
  color: #2d2d2d;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
`;

const Customizable = styled.div`
  height: 15px;
  width: 70px;
  color: #a08234;
  font-family: "Open Sans";
  font-size: 11px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Description = styled.div`
  width: 349px;
  color: #9b9b9b;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
`;

export default FoodCard;
