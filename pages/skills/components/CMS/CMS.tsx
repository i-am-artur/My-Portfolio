import { Translate } from "library/Translation/ts";
import Link from "next/link";
import { Fragment } from "react";
import { AnyObject } from "typescript/models/common";
import { CMS_list, CMS_item, CMS_image } from "./cms.styled";
import { publicImage } from "utils/images";

interface Props {
  t: Translate;
  cms: AnyObject;
}

export default function CMS(props: Props) {
  const { t, cms } = props;

  return (
    <Fragment>
      <p>{t(cms.introduction)}</p>
      <CMS_list>
        {Object.keys(cms.list).map((key) => (
          <CMS_item key={key}>
            <Link href={cms.list[key].link}>
              <a target="_blank" rel="noreferrer">
                <CMS_image
                  src={publicImage(`/skills/${cms.list[key].image}`)}
                  alt="cms"
                />
              </a>
            </Link>
            - {t(cms.list[key])}
          </CMS_item>
        ))}
      </CMS_list>
    </Fragment>
  );
}
