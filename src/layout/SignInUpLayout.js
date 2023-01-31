import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/SignInForm";
import SignUpForm from "@components/sign-in-up/SignUpForm";

const SignUpWrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SignUpLayout = ({ path, pageTitle }) => {
  return (
    <>
      <CommonHead title={pageTitle} />
      <SignUpWrapper>
        <SignInUpLeft />
        {path == "/sign-in" ? <SignInForm /> : <SignUpForm />}
      </SignUpWrapper>
    </>
  );
};

export default SignUpLayout;