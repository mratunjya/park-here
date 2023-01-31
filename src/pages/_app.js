import NextNProgress from "nextjs-progressbar";
import CommonHead from "@common/CommonHead";
import { PRIMARY_900 } from "@constants/colors";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonHead />
      <NextNProgress
        color={PRIMARY_900}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
