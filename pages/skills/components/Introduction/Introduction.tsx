import { Translate } from "library/Translation/ts";
import { AnyObject } from "typescript/models/common";

interface Props {
  t: Translate;
  introduction: AnyObject;
}

export default function Introduction(props: Props) {
  const { t, introduction } = props;

  return (
    <>
      <p>
        {t(introduction.training)}{' '}
        <a href={t(introduction.epam.link)} target="_blank" rel="noreferrer">
          {introduction.epam.text}
        </a>
        {t(introduction.epam.description)}
      </p>
      <p>{t(introduction.abilities.intro)}</p>
      <ul>
        {Object.values(introduction.abilities.list).map((el, key) => (
          <li key={key}>{t(el as AnyObject)}</li>
        ))}
      </ul>
    </>
  );
}
