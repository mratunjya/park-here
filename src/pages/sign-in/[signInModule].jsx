import { AllModules } from "@constants/moduleNames";
import SignInUpLayout from "@layout/SignInUpLayout";
import { copy } from "@meta/sign-in-up/copy";
import { useEffect, useState } from "react";
import CommonHead from "@common/CommonHead";
import { useRouter } from "next/router";
import PageNotFound from "@common/404";

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
