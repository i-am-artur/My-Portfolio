import { Content, Image, Title } from "./project.styled";
import { AnyObject } from "typescript/models/common";
import { Translate } from "library/Translation/ts";
import { basePath } from "utils/routing";

interface Props {
  context: AnyObject;
  project: AnyObject;
  t: Translate;
}

export default function Project(props: Props) {
  const { project, t, context } = props;

  return (
    <>
      <Image
        src={`${basePath()}/${context.portfolioPath}/${project.thumb}`}
        alt={t(project.title)}
      />
      <Content>
        <Title>{t(project.title)}</Title>
        <div>
          {t(context.languages)}: {t(project.languages)}
        </div>
        <div>
          {t(context.technologies)}: {project.technologies}
        </div>
      </Content>
    </>
  );
}
