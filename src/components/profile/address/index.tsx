import React, { useState } from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { AddressCardDetailsProps } from "../../common/interfaces";
import AddressCard from "../../common/addressCard";
import Label from "../../common/label";
import { queries } from "../../common/breakpoints";

const Address = () => {
  return (
    <Wrapper>
      <AddAddressBar>
        <AddressLabel content={data.myAddress} />
        <AddAddressLabel content={data.AddNew} />
      </AddAddressBar>
      <AddressCardContainer>
        {data.addressCardDetails.map(
          (item: AddressCardDetailsProps, index: number) => {
            return <AddressCard cardDetails={item} key={index} />;
          }
        )}
      </AddressCardContainer>
    </Wrapper>
  );
};
export default Address;

const Wrapper = styled.div`
  width: 958px;
  position: relative;
  padding-bottom: 76px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 84px;
  min-height: 516px;
  ${queries.tabletLandscape} {
    width: 569px;
  }
  ${queries.mobile} {
    width: 450px;
  }
`;
const AddAddressBar = styled.div`
  display: flex;
  flew-direction: row;
  gap: 752px;
  ${queries.tabletLandscape} {
    gap: 240px;
  }
  ${queries.mobile} {
    gap: 190px;
  }
  ${queries.smallMobile} {
    gap: 180px;
  }
`;
const AddAddressLabel = styled(Label)`
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  ${queries.tabletLandscape} {
    font-size: ${sizes.size20};
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size12};
  }
`;
const AddressLabel = styled(Label)`
  height: 22px;
  color: ${colors.grey_6f6f6f};
  letter-spacing: -0.27px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size20};
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size12};
  }
`;
const AddressCardContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 14px;
  ${queries.tabletLandscape} {
    flex-flow: column wrap;
  }
  ${queries.mobile} {
    flex-flow: column wrap;
  }
`;
