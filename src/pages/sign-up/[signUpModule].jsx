import CommonHead from "@components/common/CommonHead";
import SignInUpLayout from "@layout/SignInUpLayout";
import { copy } from "@meta/sign-in-up/copy";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SignUpModule = () => {
  const [route, setRoute] = useState(null);
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPath(router.asPath);
      setRoute(router.query.signUpModule);
    }
  }, [router]);

  return (
    <>
      <CommonHead title={`Park Here: ${copy[route]?.signUp?.title}`} />
      <SignInUpLayout path={path} />
    </>
  );
};

export default SignUpModule;
