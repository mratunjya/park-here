import { AllModules } from '@constants/moduleNames';
import SignInUpLayout from '@layout/SignInUpLayout';
import { isAuthenticated } from '@utils/auth';
import { copy } from '@meta/sign-in-up/copy';
import { useEffect, useState } from 'react';
import CommonHead from '@common/CommonHead';
import { useRouter } from 'next/router';
import PageNotFound from '@common/404';
import { parseCookies } from 'nookies';

const SignInModule = () => {
  const [routeNotFound, setRouteNotFound] = useState(null);
  const [signInUp, setSignInUp] = useState(null); // ["sign-in", "sign-up"]
  const [module, setModule] = useState(null);
  const [path, setPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const signInUpQueryParamsAllowed = ['sign-in', 'sign-up'];

      setPath(router.asPath);
      setSignInUp(router.query.signInUp);
      setModule(router.query.signInUpModule);
      setRouteNotFound(
        !signInUpQueryParamsAllowed.includes(router.query.signInUp) ||
          !AllModules.includes(router.query.signInUpModule),
      );
    }
  }, [router]);

  return (
    routeNotFound !== null &&
    (routeNotFound ? (
      <PageNotFound />
    ) : (
      <>
        <CommonHead
          title={
            copy[module]?.[signInUp === 'sign-in' ? 'signIn' : 'signUp']
              ?.title &&
            `Park Here: ${
              copy[module]?.[signInUp === 'sign-in' ? 'signIn' : 'signUp']
                ?.title
            }`
          }
        />
        <SignInUpLayout path={path} module={module} />
      </>
    ))
  );
};

export async function getServerSideProps(ctx) {
  if (isAuthenticated(ctx)) {
    const { module } = parseCookies(ctx);

    return {
      redirect: {
        destination: '/dashboard/' + module,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default SignInModule;
