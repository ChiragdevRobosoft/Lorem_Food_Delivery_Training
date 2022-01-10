import React, { FC, useContext } from "react";
import styled from "styled-components";
import FoodIcon from "../../../assets/common/restaurantCard/food.png";
import vegIcon from "../../../assets/restaurantDetails/icon_veg.png";
import nonvegIcon from "../../../assets/restaurantDetails/icn_nonveg.png";
import BestsellerIcon from "../../../assets/restaurantDetails/Best seller.png";
import AddIcon from "../../../assets/restaurantDetails/Add button.png";
import AddedIcon from "../../../assets/restaurantDetails/Added button.png";
import { fontFamilies, colors, sizes } from "../../../variables";
import { CartData } from "../../common/CartDataProvider";
import data from "../constants.json";
import { foodItemProps, foodcardDetailsProps } from "../interfaces";

const FoodCard: FC<{ cardDetails: foodItemProps }> = ({ cardDetails }) => {
  const { details, setDetails } = useContext(CartData);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    Object.keys(data.foodcardDetails).map((foodType) => {
      return (data.foodcardDetails as foodcardDetailsProps)[foodType].map(
        (foodItem: foodItemProps) => {
          if ((e.target as HTMLElement).id === foodItem.id) {
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
      {cardDetails.image ? <FoodImage src={FoodIcon} /> : null}
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
        <Cost>
          {data.costUnit}
          {cardDetails.cost}
        </Cost>
        {cardDetails.customizable ? (
          <Customizable>{data.customizeText}</Customizable>
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
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black_000000_1};
  margin-bottom: 20px;
  margin-top: 14px;
`;

const FoodImage = styled.img`
  position: relaive;
  width: 105px;
  height: 105px;
  margin: 10px;
`;

const VegIcon = styled.img<{ imageProp?: boolean }>`
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
  color: ${colors.green_49bb5c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size10};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size14};
  text-align: center;
`;

const ColumnFlex = styled.div<{ imageProp: boolean }>`
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
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;

const Cost = styled.div`
  height: 17px;
  color: ${colors.grey_2d2d2d};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const Customizable = styled.div`
  height: 15px;
  width: 70px;
  color: ${colors.yellow_a08234};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const Description = styled.div`
  width: 349px;
  color: ${colors.grey_9b9b9b};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

export default FoodCard;
