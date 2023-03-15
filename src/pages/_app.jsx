import { PRIMARY_900, ACCENT_700, ACCENT_600 } from "@constants/colors";
import { createGlobalStyle } from "styled-components";
import CommonNavBar from "@components/common/NavBar";
import NextNProgress from "nextjs-progressbar";
import CommonHead from "@common/CommonHead";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import PageLoader from "@components/common/PageLoader";

const GlobalStyle = createGlobalStyle`
  * {
    outline-color: ${ACCENT_600};

    @media (min-width: 769px) {
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: ${ACCENT_600};
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${ACCENT_700};
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
