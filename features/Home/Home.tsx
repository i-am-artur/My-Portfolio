import Head from "next/head";
import { Fragment, useContext } from "react";
import context from "./context.json";
import { translation } from "library/Translation/translation";
import { Avatar, Wrapper } from "./home.styled";
import { publicImage } from "utils/images";
import SharedContext from "components/ContextProvider";

export default function Home() {
  const { language } = useContext(SharedContext);
  const t = translation(language);

  return (
    <Fragment>
      <Head>
        <title>{t(context.title)}</title>
        <meta name="description" content={t(context.meta_description)} />
      </Head>
      <Wrapper>
        <p>&gt; {t(context.greeting)}</p>
        <p>&gt; {t(context.name)}</p>
        <Avatar src={publicImage("avatar.jpg")} alt="avatar" />
        <p>&gt; {t(context.offer)}</p>
      </Wrapper>
    </Fragment>
  );
}
