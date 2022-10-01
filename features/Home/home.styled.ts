import styled from "styled-components";
import { pxToRem } from "styles/theme";

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  width: 100%;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  font-size: ${pxToRem(21)};
`;

export const Avatar = styled.img`
  margin: 15px auto;
  border-radius: 50%;
  overflow: hidden;
`;
