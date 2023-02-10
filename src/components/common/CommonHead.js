import Head from "next/head";

const CommonHead = ({ title, meta }) => {
  return (
    <Head>
      <title>{title || "Park Here"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={meta || "Park Here"} />
      <meta name="keywords" content={"Park Here"} />
    </Head>
  );
};

export default CommonHead;
