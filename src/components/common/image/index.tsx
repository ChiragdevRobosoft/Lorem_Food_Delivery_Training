import React, { FC } from "react";
import styled from "styled-components";

interface ImageProps {
  className?: string;
  src: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}
const Image: FC<ImageProps> = (props) => {
  return (
    <ImageSource
      className={props.className}
      src={props.src}
      onClick={props.onClick}
    />
  );
};
export default Image;
const ImageSource = styled.img`
  height: auto;
  width: auto;
`;
