import React, { useState } from "react";
import styled from "styled-components";
import {
  colors,
  sizes,
  fontFamilies,
  angles,
  letterSpacing,
} from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import MyCartCard from "../../common/myCartCard";

const CartItems = () => {
  const [cartItems, setCartItems] = useState(data.cartContents.myCart);

  return (
    <PageSection>
      <Searchpath path={data.searchPath.menu1} className="grey-dark" />
      <ContentContainer>
        <MyCart
          content={`${data.cartContents.MyCartTitle} (${data.cartContents.myCart.length})`}
        />
        <CardContainer>
          {data.cartContents.myCart.map((info, index) => {
            return <MyCartCard info={info} index={index} />;
          })}
        </CardContainer>
      </ContentContainer>
    </PageSection>
  );
};
export default CartItems;

const PageSection = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  margin-top: 31px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
`;

const MyCart = styled(Label)`
  height: "30px";
  color: ${colors.black_000000};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size22};
  letterspacing: ${letterSpacing.space0};
  lineheight: ${sizes.size30};
`;
