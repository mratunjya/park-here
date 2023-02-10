import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/SignInForm";
import SignUpForm from "@components/sign-in-up/SignUpForm";
import { WHITE } from "@constants/colors";

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
  return (
    <>
      <CommonHead title={pageTitle} />
      <SignInUpWrapper directionmobile="column">
        <SignInUpLeft />
        {path == "/sign-in" ? <SignInForm /> : <SignUpForm />}
      </SignInUpWrapper>
    </>
  );
};

export default SignUpLayout;
