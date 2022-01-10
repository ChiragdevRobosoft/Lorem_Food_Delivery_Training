import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartCard from "../../common/CartCard";
import DownArrow from "../../../assets/restaurantDetails/collapse button.png";
import { fontFamilies, sizes, colors } from "../../../variables";
import { CartData } from "../../common/CartDataProvider";
import { foodItemProps } from "../../common/interfaces";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";
import RightArrow from "../../../assets/restaurantDetails/arrow_choose_address.png";

const Cart = () => {
  const { details, setDetails } = useContext(CartData);

  const handleClick = () => {
    setDetails([]);
  };

  let totalCost = details.reduce(
    (total: number, foodItem: foodItemProps) =>
      Math.round(
        foodItem.cost * foodItem.quantity + (total * 100) / 100
      ).toFixed(2),
    0
  );

  let fee = details.length === 0 ? 0 : (10 * 100) / 100;
  let discount = details.length === 0 ? 0 : 12.24;
  let costToPay = (totalCost + fee - discount).toFixed(2);

  return (
    <Wrapper>
      <TitleFlex>
        <MainTitle>My Order</MainTitle>
        <ClearCart onClick={handleClick}>Clear cart</ClearCart>
      </TitleFlex>
      <ItemList>
        {details?.map((item: foodItemProps, index: number) => {
          return <CartCard item={item} key={index} />;
        })}
      </ItemList>
      <CostDetailsContainer>
        <TotalCostContainer>
          <PayText>To Pay</PayText>
          <TotalCost>AED{costToPay}</TotalCost>
          <ArrowIcon src={DownArrow} />
        </TotalCostContainer>
        <CostColumn>
          <CostRow>
            <CostSplit>Items total</CostSplit>
            <CostSplit>
              AED
              {totalCost}
            </CostSplit>
          </CostRow>
          <CostRow>
            <CostSplit>Fee/ charges</CostSplit>
            <CostSplit>AED{fee}</CostSplit>
          </CostRow>
          <CostRow>
            <CostSplit>Discount</CostSplit>
            <CostSplit>AED{discount}</CostSplit>
          </CostRow>
        </CostColumn>
      </CostDetailsContainer>
      <CookingInstructionTitle>Cooking instructions?</CookingInstructionTitle>
      <InputField
        name="Mention it here..."
        isPassword={false}
        style={{
          width: "263px",
          margin: "auto",
          color: `${colors.grey_4a4a4a}`,
        }}
      />
      <RoutingLink to="checkout">
        <Buttons
          name="PROCEED TO CHECKOUT"
          className="colouredBgButton"
          style={{ width: "264px" }}
          image={RightArrow}
        />
      </RoutingLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 816px;
  width: 305px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black_000000_1};

  .colouredBgButton {
    margin-top: 26px;
  }
`;

const TitleFlex = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  border-bottom: ${sizes.size1} solid ${colors.white_ededed};
`;

const ItemList = styled.div`
  padding: 0px 21px;
  border-bottom: ${sizes.size1} solid ${colors.white_ededed};
  max-height: 353px;
  overflow: auto;
`;

const MainTitle = styled.div`
  height: 30px;
  width: 101px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
`;

const ClearCart = styled.div`
  height: 19px;
  width: 66px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: right;
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
  fooditemect-fit: none;
`;

const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 61px;
  border-radius: ${sizes.size3};
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.grey_c6c6c6_5};
  align-items: center;
`;

const PayText = styled.div`
  height: 22px;
  width: 54px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin-left: 10px;
  margin-right: 86px;
`;

const TotalCost = styled.div`
  height: 22px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
`;

const CostDetailsContainer = styled.div`
  box-sizing: border-box;
  height: 169px;
  width: 263px;
  border: ${sizes.size1} solid ${colors.grey_f5eeee};
  border-radius: ${sizes.size3};
  background-color: ${colors.white_fcfcfc};
  box-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size14} ${sizes.size0}
    ${colors.grey_cac2c2_5};
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
`;

const CostColumn = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CostRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 13px;
  margin-right: 23px;
`;

const CostSplit = styled.div`
  height: 17px;
  color: ${colors.grey_9b9b9b};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const CookingInstructionTitle = styled.div`
  height: 17px;
  width: 122.95px;
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-left: 21px;
  margin-top: 17px;
  margin-bottom: 11px;
`;

const RoutingLink = styled(Link)`
  text-decoration: none;
`;

export default Cart;
