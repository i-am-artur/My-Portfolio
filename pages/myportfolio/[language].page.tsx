import { addToPaths, createParamsObjects } from "utils/staticFunctionsUtils";

import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Paths } from "typescript/models/nextjs";

import { Languages } from "data/languages";
import { useContext } from "react";
import SharedContext from "components/ContextProvider";
const context = require("./context.json");

import { translation } from "library/Translation/translation";
import { ProjectItem, Projects } from "./portfolio.styled";
import { AnyObject } from "typescript/models/common";
import getProject from "./utils/getProject";
import useModal from "components/Modal/useModal";
import { PageTitle } from "styles/common";
import Head from "next/head";

export default function Portfolio() {
  const { language } = useContext(SharedContext);
  const t = translation(language);
  const [modal, showModal] = useModal(true);

  return (
    <>
      <Head>
        <title>{t(context.title)}</title>
        <meta name="description" content={t(context.meta_description)} />
      </Head>
      <PageTitle>{t(context.page_title)}</PageTitle>
      <Projects>
        {context.projects.map((project: AnyObject) => (
          <ProjectItem key={project.id}>
            {getProject(project, t, context, showModal)}
          </ProjectItem>
        ))}
      </Projects>
      {modal}
    </>
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
