import { addToPaths, createParamsObjects } from "utils/staticFunctionsUtils";

import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Paths } from "typescript/models/nextjs";

import { Languages } from "data/languages";
import { useContext } from "react";
import SharedContext from "components/ContextProvider";
const context = require("./context.json");
import { translation } from "library/Translation/translation";

import Introduction from "./components/Introduction/Introduction";
import CMS from "./components/CMS/CMS";
import { Fragment } from "react";
import { PageTitle } from "styles/common";
import Technologies from "./components/Technologies/Technologies";
import Head from "next/head";

export default function Skills() {
  const { language } = useContext(SharedContext);
  const t = translation(language);

  return (
    <Fragment>
      <Head>
        <title>{t(context.title)}</title>
        <meta name="description" content={t(context.meta_description)} />
      </Head>
      <PageTitle>{t(context.page_title)}</PageTitle>
      <Introduction t={t} introduction={context.introduction} />
      <Technologies t={t} technologies={context.technologies} />
      <CMS t={t} cms={context.cms} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  let paths: Paths = [];
  const languageParams = createParamsObjects(
    "language",
    Object.values(Languages)
  );

  paths = addToPaths(languageParams, paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { language } = context.params as ParsedUrlQuery;
  return {
    props: {
      language: language,
    },
  };
}
