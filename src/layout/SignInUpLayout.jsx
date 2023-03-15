import { ADMIN, ATTENDANT, ORGANIZATION, USER } from "@constants/moduleNames";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/SignInForm";
import SignUpForm from "@components/sign-in-up/SignUpForm";
import { useEffect, useState } from "react";
import { WHITE } from "@constants/colors";
import styled from "styled-components";
import FlexBox from "@common/FlexBox";

const SignInUpWrapper = styled(FlexBox)`
  width: 100%;
  height: calc(100vh - ${(props) => props.navbarheight}px);
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

const SignUpLayout = ({ path }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [moduleName, setModuleName] = useState(null);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });

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
      <SignInUpWrapper directionmobile="column" navbarheight={navBarHeight}>
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
