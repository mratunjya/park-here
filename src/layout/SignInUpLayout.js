import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/SignInForm";
import SignUpForm from "@components/sign-in-up/SignUpForm";
import { WHITE } from "@constants/colors";
import { useEffect, useState } from "react";

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
    if (path == "/sign-in/admin" || path == "/sign-up/admin") {
      setModuleName("admin");
    } else if (path == "/sign-in/user" || path == "/sign-up/user") {
      setModuleName("user");
    } else if (path == "/sign-in/attendant" || path == "/sign-up/attendant") {
      setModuleName("attendant");
    } else if (path == "/sign-in/organisation" || path == "/sign-up/organisation") {
      setModuleName("organisation");
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
