import NextNProgress from "nextjs-progressbar";
import CommonHead from "@common/CommonHead";
import { PRIMARY_900, ACCENT_700, ACCENT_600 } from "@constants/colors";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import CommonNavBar from "@components/common/NavBar";

const GlobalStyle = createGlobalStyle`
  * {
    outline-color: ${ACCENT_600};

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
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonHead />
      <CommonNavBar />
      <NextNProgress
        color={PRIMARY_900}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
