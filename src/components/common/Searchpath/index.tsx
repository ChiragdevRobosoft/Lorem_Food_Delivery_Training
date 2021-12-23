import React from "react";
import { colors, sizes, fontFamilies } from "../../../variables";
import styled from "styled-components";

const Searchpath = ({ path, className }: any) => {
  return (
    <SearchPathContainer>
      <SearchPath className={className}>
        {path.map((page: any, index: any) => {
          return (
            <React.Fragment key={index}>
              {page}
              {index !== path.length - 1 ? (
                <Arrow className={className}>&gt;</Arrow>
              ) : null}
            </React.Fragment>
          );
        })}
      </SearchPath>
    </SearchPathContainer>
  );
};

const SearchPathContainer = styled.div`
  width: 100wh;
  border: ${sizes.size1} ${colors.white2};
  border-style: solid none;
`;

const SearchPath = styled.div`
  height: 17px;
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) =>
    props.className === "grey-light" ? `${colors.grey15}` : `${colors.grey4}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  padding-top: 13.6px;
  padding-bottom: 13.6px;
`;

const Arrow = styled.span`
  margin: 5px;
  color: ${(props) =>
    props.className === "grey-light" ? "inherit" : `${colors.orange1}`};
`;

export default Searchpath;
