import React, { FC } from "react";
import styled from "styled-components";
import BrandImage from "../../../assets/common/brandsNearby/brandImage.png";
import Image from "../image";
import { brandsNearByProps } from "../interfaces";
import { colors, fontFamilies, sizes } from "../../../variables";
import BrandIcon from "../../../assets/common/brandsNearby/KFC.png";
import Label from "../label";
import OutletsIcon from "../../../assets/common/brandsNearby/outletsImage.png";

const BrandsNearbyCard: FC<{ cardItem: brandsNearByProps }> = ({
  cardItem,
}) => {
  return (
    <Wrapper>
      <Image src={BrandImage} />
      <ContentSection>
        <HeadingSection>
          <BrandCardImage src={BrandIcon} />
          <LabelSection>
            <BrandLabel content={cardItem.name} />
            <TypeLabel content={cardItem.type} />
          </LabelSection>
        </HeadingSection>
        <DescriptionLabel content={cardItem.discription} />
        <OutletImage src={OutletsIcon} />
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: auto;
  height: 193px;
  border-radius: ${sizes.size9};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 0 23px 0 rgba(34, 34, 34, 0.04);
  margin-bottom: 21px;
  display: flex;
  gap: 16px;
`;

const ContentSection = styled.div``;

const HeadingSection = styled.div`
  display: flex;
  margin-top: 12px;
  width: 525px;
  padding-bottom: 13px;
  border-bottom: 1px solid #ededed;
`;

const BrandLabel = styled(Label)`
  height: ${sizes.size39};
  color: ${colors.black_223136};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size29};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size39};
`;

const TypeLabel = styled(Label)`
  height: ${sizes.size19};
  color: #757575 ${colors.grey_757575};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const LabelSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 27px;
  justify-content: center;
`;

const DescriptionLabel = styled(Label)`
  display: inline-block;
  height: auto;
  max-width: 412px;
  color: ${colors.grey_6a6a6a};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin-top: 17.52px;
`;

const OutletImage = styled(Image)`
  position: absolute;
  bottom: 13px;
  right: 22px;
`;

const BrandCardImage = styled(Image)``;

export default BrandsNearbyCard;
