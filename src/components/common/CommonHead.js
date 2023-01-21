import Head from "next/head";

const CommonHead = ({ title, meta }) => {
  return (
    <Head>
      <title>{title || "Car Parking"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={meta && "Car Parking"} />
      <meta name="keywords" content={"Car Parking"} />
    </Head>
  );
};

export default CommonHead;
