import React, { useContext } from "react";
import styled from "styled-components";
import { fontFamilies, colors, sizes } from "../../../variables";
import PlusIcon from "../../../assets/menu/my_order_plus_active.png";
import MinusIcon from "../../../assets/menu/my_order_minus_inactive.png";
import vegIcon from "../../../assets/menu/icon_veg.png";
import DownArrow from "../../../assets/menu/collapse button.png";
import nonvegIcon from "../../../assets/menu/icn_nonveg.png";
import { CartData } from "../CartDataProvider";
import data from "../constants.json";

const CartCard = ({ item }: any) => {
  const { details, setDetails } = useContext(CartData);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    Object.keys(data.foodcardDetails).map((foodType, index) => {
      return (data.foodcardDetails as any)[foodType].map(
        (foodItem: any, index: any) => {
          if ((e.target as HTMLElement).id === foodItem.id) {
            (e.target as HTMLElement).classList.contains("minus")
              ? (foodItem.quantity -= 1)
              : (e.target as HTMLElement).classList.contains("plus")
              ? (foodItem.quantity += 1)
              : (foodItem.quantity = 0);
            if (foodItem.quantity === 0) {
              setDetails(details.filter((item: any) => item !== foodItem));
            } else {
              let cartSet = new Set([...details, foodItem]);
              setDetails(Array.from(cartSet.values()));
            }
          }
        }
      );
    });
  };

  const unitCost = Math.round((item.cost * 100) / 100).toFixed(2);
  const itemsCost = Math.round((item.cost * item.quantity * 100) / 100).toFixed(
    2
  );
  return (
    <Card>
      <FoodName>
        <VegIcon src={item.veg ? vegIcon : nonvegIcon} />
        {item.foodName}
      </FoodName>
      <QuantitySelector>
        <Image
          src={MinusIcon}
          onClick={handleClick}
          id={item.id}
          className="minus"
        />
        <Quantity>{item.quantity}</Quantity>
        <Image
          src={PlusIcon}
          onClick={handleClick}
          id={item.id}
          className="plus"
        />
      </QuantitySelector>
      <UnitCost>AED{unitCost}</UnitCost>
      <ItemsCost>
        AED
        {itemsCost}
      </ItemsCost>
      {item.quantity === 1 ? (
        <SelectedQuantity>Quantity : 1</SelectedQuantity>
      ) : null}
      {item.addOn ? <AddOn>{item.addOn}</AddOn> : null}
      <RowFlex>
        {item.customizable ? (
          <Customize>
            Customize
            <ArrowIcon src={DownArrow} />
          </Customize>
        ) : (
          <span></span>
        )}
        <Remove className="remove" id={item.id} onClick={handleClick}>
          Remove
        </Remove>
      </RowFlex>
    </Card>
  );
};

const Card = styled.div`
  padding: 13px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: ${sizes.size1} solid ${colors.white3};
`;

const FoodName = styled.div`
  width: 160px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const QuantitySelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  height: 30px;
  width: 87px;
  border: ${sizes.size1} solid ${colors.blue2};
  border-radius: ${sizes.size15};
  background-color: ${colors.white};
  padding: 0 10px;
  position: absolute;
  right: 0;
  top: 13px;
`;

const VegIcon = styled.img`
  margin-right: 7px;
`;

const Image = styled.img`
  object-fit: none;
  width: 12.0156px;
`;

const Quantity = styled.div`
  height: 27px;
  width: 30px;
  color: ${colors.orange7};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size13};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
  text-align: center;
`;

const UnitCost = styled.div`
  height: 27px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
`;

const ItemsCost = styled.div`
  height: 17px;
  width: 55px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  text-align: center;
  position: absolute;
  top: 48px;
  right: 0;
  text-align: right;
`;

const AddOn = styled.div`
  height: 30px;
  width: 183px;
  color: ${colors.grey19};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8%;
`;

const Customize = styled.div`
  height: 15px;
  color: ${colors.yellow4};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const Remove = styled.div`
  height: 15px;
  width: 43px;
  color: ${colors.red3};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
  text-align: right;
  position: absolute;
  right: ${sizes.size0};
`;

const SelectedQuantity = styled.div`
  height: 15px;
  color: ${colors.grey19};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
  object-fit: none;
`;
export default CartCard;
