import SignInUpLayout from "@layout/SignInUpLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setPath(router.pathname);
  }, [router.isReady, router.pathname]);

  return <SignInUpLayout path={path} pageTitle="Park Here: Sign In" />;
};

export default SignIn;
