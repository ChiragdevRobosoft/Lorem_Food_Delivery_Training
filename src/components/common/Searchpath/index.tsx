import React, { FC } from "react";
import { colors, sizes, fontFamilies } from "../../../variables";
import styled from "styled-components";
import { queries } from "../breakpoints";
import { SearchpathProps } from "../interfaces";

const Searchpath: FC<SearchpathProps> = ({ path, className }) => {
  return (
    <SearchPathContainer>
      <SearchPath className={className}>
        {path.map((page: string, index: number) => {
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
  width: 100%;
  border: ${sizes.size1} ${colors.white_e1e1e1};
  border-style: solid none;
`;

const SearchPath = styled.div`
  height: 17px;
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) =>
    props.className === "grey-light"
      ? `${colors.grey_6f6f6f}`
      : `${colors.grey_3f3f40}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  padding-top: 13.6px;
  padding-bottom: 13.6px;
  ${queries.tabletLandscape} {
    width: auto;
  }
  ${queries.tablet} {
    font-size: ${sizes.size10};
    line-height: ${sizes.size17};
    height: 17px;
  }
`;

const Arrow = styled.span`
  margin: 5px;
  color: ${(props) =>
    props.className === "grey-light" ? "inherit" : `${colors.orange_f78713}`};
`;

export default Searchpath;
