import CommonHead from "@components/common/CommonHead";
import SignInUpLayout from "@layout/SignInUpLayout";
import { copy } from "@meta/sign-in-up/copy";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SignInModule = () => {
  const [route, setRoute] = useState(null);
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPath(router.asPath);
      setRoute(router.query.signInModule);
    }
  }, [route, router, router.isReady, router.query]);

  return (
    <>
      <CommonHead title={`Park Here: ${copy[route]?.signIn?.title}`} />
      <SignInUpLayout path={path} />
    </>
  );
};

export default SignInModule;
