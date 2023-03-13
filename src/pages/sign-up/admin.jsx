import SignInUpLayout from "@layout/SignInUpLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setPath(router.pathname);
  }, [router.isReady, router.pathname]);

  return <SignInUpLayout path={path} pageTitle="Park Here: Admin Sign Up" />;
};

export default SignUp;
