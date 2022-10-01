import { useContext } from "react";
import context from "./context.json";
import { translation } from "library/Translation/translation";
import { HomeLink, Wrapper } from "./logo.styled";
import SharedContext from "components/ContextProvider";
import Link from "next/link";

export default function Logo() {
  const { language } = useContext(SharedContext);
  const t = translation(language);

  return (
    <Wrapper>
      <Link href={`/${language}`}>
        <HomeLink>{t(context.logo)}</HomeLink>
      </Link>
    </Wrapper>
  );
}
