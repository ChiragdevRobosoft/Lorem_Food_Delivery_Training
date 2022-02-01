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
import { queries } from "../breakpoints";

const AddressCard: FC<{ cardDetails: AddressCardDetailsProps }> = ({
  cardDetails,
}) => {
  const [primaryCheck, setPrimaryCheck] = useState(cardDetails.primaryStatus);
  return (
    <CardContainer>
      <PlaceLabel content={cardDetails.place} />
      <AddressBox>
        <AddressLabel content={cardDetails.address} />
      </AddressBox>
      <EditDeleteButton>
        <EditLabel content={data.edit} />
        <DeleteLabel content={data.Delete} />
      </EditDeleteButton>
      <TickBox onClick={() => setPrimaryCheck(!primaryCheck)}>
        <img
          src={primaryCheck === true ? Checked : Unchecked}
          className="checked"
        ></img>
        <PrimaryLabel
          content={data.primary}
          className={`${primaryCheck?.toString()}`}
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
  ${queries.smallMobile} {
    width: 320px;
    height: 130px;
    padding: 8px 12px 2px 20px;
  }
  ${queries.mobile} {
    width: 360px;
    height: 130px;
    padding: 10px 14px 4px 33px;
  }
`;
const AddressBox = styled.div`
  height: 84px;
  width: 387px;
  margin-top: 11px;
  ${queries.smallMobile} {
    height: 60px;
    width: 250px;
  }
  ${queries.mobile} {
    height: 60px;
    width: 300px;
  }
`;
const EditDeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 19px;
  margin-bottom: 21px;
  ${queries.smallMobile} {
    gap: 10px;
  }
  ${queries.mobile} {
    gap: 10px;
  }
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
const PlaceLabel = styled(Label)`
  height: 19px;
  width: 39px;
  color: ${colors.grey_6a6a6a};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.spaceNeg0_27};
  line-height: ${sizes.size19};
  ${queries.smallMobile} {
    font-size: ${sizes.size10};
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
  }
`;
const AddressLabel = styled(Label)`
  height: 84px;
  width: 387px;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  color: ${colors.black_2d2d2d};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.spaceNeg0_3};
  line-height: ${sizes.size28};
  ${queries.smallMobile} {
    font-size: ${sizes.size13};
    height: 20px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
    height: 40px;
  }
`;
const EditLabel = styled(Label)`
  width: 30px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  ${queries.smallMobile} {
    font-size: ${sizes.size13};
  }
  ${queries.mobile} {
    font-size: ${sizes.size14};
  }
`;
const DeleteLabel = styled(Label)`
  width: 30px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  ${queries.smallMobile} {
    font-size: ${sizes.size13};
  }
  ${queries.mobile} {
    font-size: ${sizes.size14};
  }
`;
const PrimaryLabel = styled(Label)<{ className: string }>`
  height: 19px;
  width: 52px;
  color: ${(props) =>
    props.className === "true"
      ? `${colors.grey_6a6a6a}`
      : `${colors.grey_b8b8b8}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.spaceNeg0_27};
  line-height: ${sizes.size19};
  margin-left: 11px;
  ${queries.smallMobile} {
    font-size: ${sizes.size10};
    margin-left: 6px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
    margin-left: 9px;
  }
`;
