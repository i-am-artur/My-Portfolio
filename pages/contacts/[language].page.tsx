import { addToPaths, createParamsObjects } from "utils/staticFunctionsUtils";

import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Paths } from "typescript/models/nextjs";

import { ContactSource, Wrapper, Slogan } from "./contacts.styled";
import { Languages } from "data/languages";

import { useContext } from "react";
import SharedContext from "components/ContextProvider";
const context = require("./context.json");

import { translation } from "library/Translation/translation";
import { publicImage } from "utils/images";
import { PageTitle } from "styles/common";

export default function Contacts() {
  const { language } = useContext(SharedContext);
  const t = translation(language);
  const { email } = context;

  return (
    <>
      <PageTitle>{t(context.page_title)}</PageTitle>
      <Wrapper>
        <h3>{t(context.name)}</h3>
        <Slogan>{t(context.slogan)}</Slogan>
        <ContactSource>
          <img
            alt="phone number and messengers"
            height="30"
            src={publicImage("messengers.gif")}
          />
          :&nbsp; <a href="tel:+380985693051">+38 098 569 3051</a>
        </ContactSource>
        <ContactSource>
          <img alt="email" height="22" src={publicImage("gmail.gif")} />
          :&nbsp;
          <a href={`mailto:${email}`}>{email}</a>
        </ContactSource>
      </Wrapper>
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
