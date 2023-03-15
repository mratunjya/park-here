import CommonHead from "@components/common/CommonHead";
import { AllModules } from "@constants/moduleNames";
import SignInUpLayout from "@layout/SignInUpLayout";
import PageNotFound from "@components/common/404";
import { copy } from "@meta/sign-in-up/copy";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SignInModule = () => {
  const [routeNotFound, setRouteNotFound] = useState(false);
  const [route, setRoute] = useState(null);
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPath(router.asPath);
      setRoute(router.query.signInModule);
    }
  }, [router]);

  useEffect(() => {
    route && setRouteNotFound(AllModules?.indexOf(route) === -1);
  }, [route]);

  return routeNotFound ? (
    <PageNotFound />
  ) : (
    copy[route] && (
      <>
        <CommonHead title={`Park Here: ${copy[route]?.signIn?.title}`} />
        <SignInUpLayout path={path} />
      </>
    )
  );
};

export default SignInModule;
