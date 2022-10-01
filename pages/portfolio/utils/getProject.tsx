import Project from "../fearures/Project";
import { Translate } from "library/Translation/ts";
import { AnyObject } from "typescript/models/common";
import {
  ProjectLink,
  ProjectModalImage,
  ProjectWithNoLink,
} from "./getProjects.styled";
import { basePath } from "utils/routing";
import { showModalType } from "components/Modal/ts";
import { ReactNode } from "react";

export default function getProject(
  project: AnyObject,
  t: Translate,
  context: AnyObject,
  showModal: showModalType
): ReactNode {
  const projectComponent = (
    <Project project={project} context={context} t={t} />
  );

  if (project.link) {
    return (
      <ProjectLink
        href={`${basePath()}/${project.link}`}
        rel="noreferrer"
        target="_blank"
      >
        {projectComponent}
      </ProjectLink>
    );
  }

  const modalContent = (
    <ProjectModalImage
      src={`${basePath()}/Portfolio/${project.demo}`}
      alt={t(project.title)}
    />
  );

  return (
    <ProjectWithNoLink onClick={() => showModal(modalContent)}>
      {projectComponent}
    </ProjectWithNoLink>
  );
}
