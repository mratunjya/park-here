import SignInUpLayout from "@layout/SignInUpLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return <SignInUpLayout path={path} pageTitle="Park Here: Admin Sign In" />;
};

export default SignIn;
