import { AnyObject } from "typescript/models/common";

import { Translate } from "../../../../library/Translation/ts";
import { ReactNode } from "react";
import { publicImage } from "../../../../utils/images";
import { TechnologyImage, TechnologyImages } from "./technologies.styled";
interface Props {
  t: Translate;
  technologies: AnyObject;
}

export default function Technologies({ technologies, t }: Props) {
  return (
    <>
      <p>{t(technologies.intro)}:</p>
      <ul>
        {Object.values(technologies.list).map((el, key) => (
          <li key={key}>{el as string}</li>
        ))}
      </ul>
      <TechnologyImages>
        {Object.values(technologies.images).map((el, key) => {
          const technology = el as AnyObject;
          return (
            technology.isVisible && (
              <li key={key}>
                <TechnologyImage
                  src={publicImage(`/skills/${technology?.image}`)}
                />
              </li>
            )
          );
        })}
      </TechnologyImages>
    </>
  );
}
