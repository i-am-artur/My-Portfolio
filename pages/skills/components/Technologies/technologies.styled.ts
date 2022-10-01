import styled from "styled-components";
import { media } from "../../../../styles/theme";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Technology = styled.li`
  height: 100%;
  text-align: center;
  justify-content: flex-start;
`;

export const TechnologyImages = styled.ul`
  padding: 0;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
  justify-content: flex-start;

  ${media.Desktop} {
    justify-content: space-between;
  }
`;

export const TechnologyImage = styled(LazyLoadImage)`
  height: 50px;
`;
