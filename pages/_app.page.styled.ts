import styled from "styled-components";
import { gap, media, width } from "../styles/theme";

export const Main = styled.main`
  margin-left: ${gap.medium};
  margin-right: ${gap.medium};
  flex: 1;
  flex-direction: column;
  display: flex;

  ${media.Max_Width} {
    max-width: ${width.maximum};
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;
