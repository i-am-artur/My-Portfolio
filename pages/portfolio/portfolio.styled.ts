import styled from "styled-components";
import { radius } from "styles/theme";

export const Projects = styled.ul`
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 50px;
  display: grid;
  list-style-type: none;
`;

export const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
  overflow: hidden;
  background-color: #e5e5e5;
  color: black;
  border: 1px solid black;
  border-radius: ${radius.general};
`;
