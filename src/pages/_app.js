import NextNProgress from "nextjs-progressbar";
import CommonHead from "@common/CommonHead";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonHead />
      <NextNProgress
        color="#4c4c4c"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
