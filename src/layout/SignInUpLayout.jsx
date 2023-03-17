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

const SignUpLayout = ({ path, module }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });

  return (
    <>
      <SignInUpWrapper directionmobile="column" navbarheight={navBarHeight}>
        <SignInUpLeft module={module} />
        {path?.indexOf("sign-in") != -1 ? (
          <SignInForm module={module} />
        ) : (
          <SignUpForm module={module} />
        )}
      </SignInUpWrapper>
    </>
  );
};

export default SignUpLayout;
