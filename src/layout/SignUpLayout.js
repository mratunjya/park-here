import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignInUpLeft from "@components/sign-in-up/SignInUpLeft";
import SignUpForm from "@components/sign-in-up/sign-up/SignUpForm";

const SignUpWrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

const SignUpLayout = () => {
  return (
    <>
      <CommonHead title="Park Here: Sign Up" />
      <SignUpWrapper>
        <SignInUpLeft />
        <SignUpForm />
      </SignUpWrapper>
    </>
  );
};

export default SignUpLayout;
