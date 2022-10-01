import styled from "styled-components";
import { fontSize, gap } from "styles/theme";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  row-gap: ${gap.original};
  max-width: 600px;
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.medium};
`;

export const Slogan = styled.div`
  text-align: center;
  margin-bottom: ${gap.section};
`;

export const ContactSource = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
