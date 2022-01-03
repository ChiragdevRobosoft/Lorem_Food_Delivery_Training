import React, { FC, useContext } from "react";
import styled from "styled-components";
import Bitmap from "../../../assets/restaurantList/Bitmap.png";
import vegIcon from "../../../assets/menu/icon_veg.png";
import nonvegIcon from "../../../assets/menu/icn_nonveg.png";
import BestsellerIcon from "../../../assets/menu/Best seller.png";
import AddIcon from "../../../assets/menu/Add button.png";
import AddedIcon from "../../../assets/menu/Added button.png";
import { fontFamilies, colors, sizes } from "../../../variables";
import { CartData } from "../../common/CartDataProvider";
import data from "../constants.json";

const FoodCard: FC<any> = ({ cardDetails }) => {
  const { details, setDetails } = useContext(CartData);
  const handleClick = (e: any) => {
    Object.keys(data.foodcardDetails).map((foodType, index) => {
      return (data.foodcardDetails as any)[foodType].map(
        (foodItem: any, index: any) => {
          if (e.target.id === foodItem.id) {
            foodItem.quantity += 1;
            let cartSet = new Set([...details, foodItem]);
            setDetails(Array.from(cartSet.values()));
          }
        }
      );
    });
  };

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
      {details?.includes(cardDetails) ? (
        <>
          <GreenText>Already in cart</GreenText>
          <Add src={AddedIcon} id={`${cardDetails.id}`} onClick={handleClick} />
        </>
      ) : (
        <Add src={AddIcon} onClick={handleClick} id={`${cardDetails.id}`} />
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
  border-radius: ${sizes.size6};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black1};
  margin-bottom: 20px;
  margin-top: 14px;
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
  top: 86px;
  right: 10px;
`;

const GreenText = styled.div`
  position: absolute;
  top: 67px;
  right: 24px;
  height: 14px;
  color: ${colors.green2};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size10};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size14};
  text-align: center;
`;

const ColumnFlex = styled.div<any>`
  position: absolute;
  height: ${sizes.fullWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  top: 0;
  left: ${(props) => (props.imageProp ? "134px" : "18px")};
`;

const FoodName = styled.div`
  height: 22px;
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;

const Cost = styled.div`
  height: 17px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const Customizable = styled.div`
  height: 15px;
  width: 70px;
  color: ${colors.yellow4};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const Description = styled.div`
  width: 349px;
  color: ${colors.grey19};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

export default FoodCard;
