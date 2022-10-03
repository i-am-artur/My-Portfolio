import styled from "styled-components";
import { radius, colors, fontSize } from "styles/theme";

export const ProjectLink = styled.a`
  color: ${colors.text};
`;

export const ProjectWithNoLink = styled.button`
  padding: 0;
  margin: 0;
  text-align: start;
  font-size: ${fontSize.original};
  font-family: inherit;
  border: none;
  border-radius: ${radius.general};
  color: ${colors.text};
  cursor: pointer;
`;

export const ProjectModalImage = styled.img`
  max-width: 99%;
  max-height: 99%;
`;
