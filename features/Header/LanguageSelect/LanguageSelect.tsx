import { Language, LanguageItem, LanguageList } from "./language-select.styled";
import { Languages } from "data/languages";
import { useContext } from "react";
import SharedContext from "components/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSelect() {
  const { language } = useContext(SharedContext);

  return (
    <LanguageList>
      {Object.values(Languages).map((el) => (
        <LanguageItem key={el}>
          <Link href={getPath(el)}>
            <Language selected={language === el}>{el.toUpperCase()}</Language>
          </Link>
        </LanguageItem>
      ))}
    </LanguageList>
  );
}

function getPath(language: string) {
  const { pathname } = useRouter();

  return pathname.replace("[language]", "").concat(language);
}
