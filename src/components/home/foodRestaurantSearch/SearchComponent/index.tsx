import styled from "styled-components";
import { FC } from "react";
import { colors, fontFamilies, sizes } from "../../../../variables";
import SearchBoxComp from "./../../../common/searchBox";
import LocationInput from "../../../common/locationInput";
import DateInput from "../../../common/dateInput";

interface foodSearchProps {
  pageType: string;
}

const Foodsearch: FC<foodSearchProps> = ({ pageType }) => {
  return (
    <Wrapper className={pageType}>
      <SearchBoxComp className={pageType} />
      <LocAndDate className={pageType}>
        <Locationholder className={pageType}>
          <LocationInput className={pageType} />
        </Locationholder>
        <Dateholder className={pageType}>
          <DateInput className={pageType} />
        </Dateholder>
      </LocAndDate>
    </Wrapper>
  );
};
export default Foodsearch;

const Wrapper = styled.div`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size889} ${sizes.size176} ${sizes.size420};`
      : null}
  height: ${(props) =>
    props.className === "home" ? `${sizes.size175}` : null};
  width: ${(props) => (props.className === "home" ? `${sizes.size611}` : null)};
  display: flex;
  flex-direction: column;
`;

const LocAndDate = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.className === "home" ? `${sizes.size611}` : null)};
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size35} ${sizes.size0} ${sizes.size0} ${sizes.size0}`
      : ``};
  display: flex;
  flex-direction: row;
`;

const Locationholder = styled.div`
  height: ${(props) =>
    props.className === "home" ? `${sizes.size70}` : `${sizes.size50}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size338}` : `${sizes.size283}`};
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size22} ${sizes.size0} ${sizes.size4}`
      : null};
`;

const Dateholder = styled.div`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : null)};
  margin: ${(props) => (props.className === "home" ? `${sizes.size0}` : null)};
  display: flex;
`;
