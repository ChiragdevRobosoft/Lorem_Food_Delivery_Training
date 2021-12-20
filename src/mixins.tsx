import { css } from "styled-components";

interface homeScreenDivsPorps {
  imageUrl?: string;
  height?: string;
}
export const homeScreenDivs = ({
  imageUrl,
  height,
}: homeScreenDivsPorps) => css`
  background-image: url(${imageUrl});
  height: ${height};
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;
