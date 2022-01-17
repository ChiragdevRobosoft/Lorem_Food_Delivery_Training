import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import Unchecked from "../../../assets/addressCard/icn_uncheck.png";
import Checked from "../../../assets/addressCard/icn_check.png";
import {
  fontFamilies,
  angles,
  colors,
  sizes,
  letterSpacing,
} from "../../../variables";
import { AddressCardDetailsProps } from "../interfaces";
const AddressCard: FC<{ cardDetails: AddressCardDetailsProps }> = ({
  cardDetails,
}) => {
  const [primaryCheck, setPrimaryCheck] = useState(true);
  return (
    <CardContainer>
      <Label
        content={cardDetails.place}
        height="19px"
        width="39px"
        color={colors.grey_6a6a6a}
        fontFamily={fontFamilies.fontFamilyOsRegular}
        fontSize={sizes.size14}
        letterSpacing={letterSpacing.spaceNeg0_27}
        lineHeight={sizes.size19}
      />
      <AddressBox>
        <Label
          content={cardDetails.address}
          height="84px"
          width="387px"
          color={colors.black_2d2d2d}
          fontFamily={fontFamilies.fontFamilyOsRegular}
          fontSize={sizes.size18}
          letterSpacing={letterSpacing.spaceNeg0_3}
          lineHeight={sizes.size28}
        />
      </AddressBox>
      <EditDeleteButton>
        <Label
          content={data.edit}
          height="22px"
          width="30px"
          color={colors.orange_f57c00}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize={sizes.size16}
          letterSpacing="0"
          lineHeight={sizes.size22}
        />
        <Label
          content={data.Delete}
          height="22px"
          width="30px"
          color={colors.orange_f57c00}
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size={sizes.size16}
          letter-spacing="0"
          line-height={sizes.size22}
        />
      </EditDeleteButton>

      <TickBox onClick={() => setPrimaryCheck(!primaryCheck)}>
        <img
          src={primaryCheck === true ? Checked : Unchecked}
          className="checked"
        ></img>
        <Label
          content="Primary"
          height="19px"
          width="52px"
          color={
            primaryCheck === true
              ? `{${colors.grey_6a6a6a}}`
              : `{${colors.grey_b8b8b8}}`
          }
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize={sizes.size14}
          letterSpacing="-0.27px"
          lineHeight={sizes.size19}
          marginLeft="11px"
        />
      </TickBox>
    </CardContainer>
  );
};
export default AddressCard;

const CardContainer = styled.div`
  height: 186px;
  width: 469px;
  border-radius: 6px;
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  padding: 29px 19px 21px 26px;
  box-sizing: border-box;
  position: relative;
`;
const AddressBox = styled.div`
  height: 84px;
  width: 387px;
  margin-top: 11px;
`;
const EditDeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 19px;
  margin-bottom: 21px;
`;
const TickBox = styled.div`
  text-align: right;
  position: absolute;
  top: 21px;
  right: 20px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
