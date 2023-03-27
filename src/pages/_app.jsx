import { PRIMARY_900, ACCENT_700, ACCENT_600, PRIMARY_100, PRIMARY_800 } from "@constants/colors";
import { createGlobalStyle } from "styled-components";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import CommonHead from "@common/CommonHead";
import PageLoader from "@common/PageLoader";
import CommonNavBar from "@common/NavBar";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
  * {
    outline-color: ${ACCENT_600};

    @media (min-width: 769px) {
      ::-webkit-scrollbar {
        width: 0.625rem;
        height: 0.625rem;
      }

      ::-webkit-scrollbar-track {
        background: ${PRIMARY_100};
        outline: 0.125rem ridge #1e4620;
        border-radius: 0.9375rem;
      }

      ::-webkit-scrollbar-thumb {
        background: ${PRIMARY_800};
        border-radius: 0.3125rem;
        width: 0.625rem;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${PRIMARY_900};
      }
    }
  }
`;

export default function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <CommonHead />
      {isLoaded ? (
        <>
          <NextNProgress
            color={PRIMARY_900}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <CommonNavBar />
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      ) : (
        <PageLoader />
      )}
    </>
  );
}
