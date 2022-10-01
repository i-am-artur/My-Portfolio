import GlobalStyles from "styles/global.styled";
import { AppProps } from "next/app";
import { Fragment } from "react";
import { defaultLanguage } from "../data/languages";
import SharedContext from "components/ContextProvider";
import Header from "../features/Header/Header";
import { Main } from "./_app.page.styled";
import Footer from "../features/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const language = pageProps.language || defaultLanguage;

  const shared_context = {
    language,
  };

  return (
    <Fragment>
      <SharedContext.Provider value={shared_context}>
        <GlobalStyles />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </SharedContext.Provider>
      <Footer />
    </Fragment>
  );
}

export default MyApp;
