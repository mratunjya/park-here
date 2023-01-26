import CommonHead from "@common/CommonHead";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/sign-up");
  }, [router]);

  return <CommonHead />;
}

export default Home;