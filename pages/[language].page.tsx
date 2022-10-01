import { addToPaths, createParamsObjects } from "utils/staticFunctionsUtils";

import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Paths } from "typescript/models/nextjs";

import Home from "features/Home/Home";
import { Languages } from "data/languages";

export default function IndexWithLanguages() {
  return <Home />;
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
