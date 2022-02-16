import React, { FC } from "react";
import styled from "styled-components";
import { ImageProps } from "../../common/interfaces";

const Image: FC<ImageProps> = (props) => {
  return (
    <ImageSource
      className={props.className}
      src={props.src}
      onClick={props.onClick}
      id={props.id}
    />
  );
};
export default Image;
const ImageSource = styled.img`
  height: auto;
  width: auto;
`;
