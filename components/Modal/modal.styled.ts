import styled from "styled-components";
import { fontSize, gap } from "styles/theme";

interface ModalProps {
  zIndex: number;
}

export const Wrapper = styled.div<ModalProps>`
  z-index: ${({ zIndex }) => zIndex};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${gap.general};
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 3px 8px;
  top: 10px;
  right: 10px;
  position: absolute;
  font-size: ${fontSize.medium};
  font-weight: bold;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: red;
  cursor: pointer;
`;
