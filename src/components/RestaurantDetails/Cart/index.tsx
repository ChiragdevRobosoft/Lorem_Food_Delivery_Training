import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartCard from "../../common/CartCard";
import DownArrow from "../../../assets/restaurantDetails/collapse button.png";
import { fontFamilies, sizes, colors, links, angles } from "../../../variables";
import { CartData } from "../../common/CartDataProvider";
import { foodItemProps } from "../../common/interfaces";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";
import RightArrow from "../../../assets/restaurantDetails/arrow_choose_address.png";
import data from "../../common/constants.json";
import { queries } from "../../common/breakpoints";

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
      <TitleContainer>
        <Title>{data.cartData.title}</Title>
        <ClearCart onClick={handleClick}>{data.cartData.clear}</ClearCart>
      </TitleContainer>
      <ItemList>
        {details?.map((item: foodItemProps, index: number) => {
          return <CartCard item={item} key={index} />;
        })}
      </ItemList>
      <CostDetailsContainer>
        <TotalCostContainer>
          <PayText>{data.cartData.toPay}</PayText>
          <TotalCost>
            {data.costUnit}
            {costToPay}
          </TotalCost>
          <ArrowIcon src={DownArrow} />
        </TotalCostContainer>
        <CostList>
          <Cost>
            <CostSplit>{data.cartData.itemsTotal}</CostSplit>
            <CostSplit>
              {data.costUnit}
              {totalCost}
            </CostSplit>
          </Cost>
          <Cost>
            <CostSplit>{data.cartData.charges}</CostSplit>
            <CostSplit>
              {data.costUnit}
              {fee}
            </CostSplit>
          </Cost>
          <Cost>
            <CostSplit>{data.cartData.discount}</CostSplit>
            <CostSplit>
              {data.costUnit}
              {discount}
            </CostSplit>
          </Cost>
        </CostList>
      </CostDetailsContainer>
      <CookingInstructionTitle>
        {data.cartData.cookingInstruction}
      </CookingInstructionTitle>
      <TextboxContainer>
        <TextBox name={data.cartData.textboxLabel} isPassword={false} />
      </TextboxContainer>
      <RoutingLink to={links.checkout}>
        <CheckoutButton
          name={data.cartData.buttonText}
          className="colouredBgButton"
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
  ${queries.tabletLandscape} {
    width: 250px;
  }
  ${queries.tablet} {
    height: 790px;
  }
`;

const TitleContainer = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  border-bottom: ${sizes.size1} solid ${colors.white_ededed};
  ${queries.tablet} {
    height: 50px;
  }
`;

const ItemList = styled.div`
  padding: 0px 21px;
  border-bottom: ${sizes.size1} solid ${colors.white_ededed};
  max-height: 353px;
  overflow: auto;
`;

const Title = styled.div`
  height: 30px;
  width: 101px;
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
  ${queries.tablet} {
    font-size: ${sizes.size16};
    line-height: ${sizes.size18};
    height: ${sizes.size18};
  }
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
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size15};
    height: ${sizes.size16};
  }
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
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin-left: 10px;
  margin-right: 86px;
  ${queries.tabletLandscape} {
    margin-right: 55px;
  }
  ${queries.tablet} {
    margin-right: 75px;
    font-size: ${sizes.size14};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
`;

const TotalCost = styled.div`
  height: 22px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
  ${queries.tablet} {
    font-size: ${sizes.size14};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
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
  ${queries.tabletLandscape} {
    width: 220px;
  }
`;

const CostList = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Cost = styled.div`
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
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size18};
    height: ${sizes.size18};
  }
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
  margin-bottom: 15px;
  ${queries.tablet} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const RoutingLink = styled(Link)`
  text-decoration: none;
`;
const TextboxContainer = styled.div`
  width: 263px;
  margin: 0 auto;
  ${queries.tabletLandscape} {
    width: 220px;
  }
`;
const TextBox = styled(InputField)`
  color: ${colors.grey_4a4a4a};
`;

const CheckoutButton = styled(Buttons)`
  width: 264px;
  background: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  ${queries.tabletLandscape} {
    width: 220px;
  }
  ${queries.tablet} {
    font-size: ${sizes.size14};
  }
`;

export default Cart;
