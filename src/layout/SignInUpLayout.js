import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/SignInForm";
import SignUpForm from "@components/sign-in-up/SignUpForm";
import { WHITE } from "@constants/colors";
import { useEffect, useState } from "react";
import { ADMIN, ATTENDANT, ORGANIZATION, USER } from "@constants/moduleNames";

const SignInUpWrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    &:after {
      height: 1.25rem;
      width: 100%;
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      background: linear-gradient(to top, ${WHITE} 0%, transparent 100%);
      position: absolute;
    }
  }
`;

const SignUpLayout = ({ path, pageTitle }) => {
  const [moduleName, setModuleName] = useState(null);

  useEffect(() => {
    if (path == `/sign-in/${ADMIN}` || path == `/sign-up/${ADMIN}`) {
      setModuleName(ADMIN);
    } else if (path == `/sign-in/${USER}` || path == `/sign-up/${USER}`) {
      setModuleName(USER);
    } else if (
      path == `/sign-in/${ATTENDANT}` ||
      path == `/sign-up/${ATTENDANT}`
    ) {
      setModuleName(ATTENDANT);
    } else if (
      path == `/sign-in/${ORGANIZATION}` ||
      path == `/sign-up/${ORGANIZATION}`
    ) {
      setModuleName(ORGANIZATION);
    }
  }, [path]);

  return (
    <>
      <CommonHead title={pageTitle} />
      <SignInUpWrapper directionmobile="column">
        <SignInUpLeft moduleName={moduleName} />
        {path?.indexOf("sign-in") != -1 ? (
          <SignInForm moduleName={moduleName} />
        ) : (
          <SignUpForm moduleName={moduleName} />
        )}
      </SignInUpWrapper>
    </>
  );
};

export default SignUpLayout;
