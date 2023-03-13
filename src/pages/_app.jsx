import NextNProgress from "nextjs-progressbar";
import CommonHead from "@common/CommonHead";
import { PRIMARY_900, ACCENT_600 } from "@constants/colors";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import CommonNavBar from "@components/common/NavBar";

const GlobalStyle = createGlobalStyle`
  * {
    outline-color: ${ACCENT_600};
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
