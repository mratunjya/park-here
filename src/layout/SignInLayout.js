import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignInForm from "@components/sign-in-up/sign-in/SignInForm";

const SignUpWrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

const SignUpLayout = () => {
  return (
    <>
      <CommonHead title="Park Here: Sign In" />
      <SignUpWrapper>
        <SignInUpLeft />
        <SignInForm />
      </SignUpWrapper>
    </>
  );
};

export default SignUpLayout;
