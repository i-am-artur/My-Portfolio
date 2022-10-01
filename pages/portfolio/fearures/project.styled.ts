import styled from "styled-components";
import { fontSize, gap, radius } from "styles/theme";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Content = styled.div`
  padding: ${gap.original};
`;

export const Title = styled.h4`
  margin: 0;
  font-size: ${fontSize.original};
`;

export const Image = styled(LazyLoadImage)`
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-bottom: 1px solid black;
  border-top-right-radius: ${radius.general};
  border-top-left-radius: ${radius.general};
`;

