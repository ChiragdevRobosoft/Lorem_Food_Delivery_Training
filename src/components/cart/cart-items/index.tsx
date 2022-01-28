import { useState } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, letterSpacing } from "../../../variables";
import SearchPath from "../../common/Searchpath";
import data from "../../common/constants.json";
import Label from "../../common/label";
import MyCartCard from "../../common/myCartCard";

const CartItems = () => {
  const [cartItems, setCartItems] = useState(data.cartContents.myCart);

  return (
    <PageSection>
      <SearchPath path={data.searchPath.menu1} className="grey-dark" />
      <ContentContainer>
        <MyCartLabel
          content={`${data.cartContents.MyCartTitle} (${data.cartContents.myCart.length})`}
        />
        <CardContainer>
          {cartItems.map((info, index) => {
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
  min-height: 832px;
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

const MyCartLabel = styled(Label)`
  height: "30px";
  color: ${colors.black_000000};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size22};
  letterspacing: ${letterSpacing.space0};
  lineheight: ${sizes.size30};
`;
