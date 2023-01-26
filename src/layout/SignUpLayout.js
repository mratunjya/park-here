import FlexBox from "@components/common/FlexBox";
import CommonHead from "@common/CommonHead";
import styled from "styled-components";
import SignUpLeft from "@components/sign-up/SignUpLeft";
import SignUpForm from "@components/sign-up/SignUpForm";

const SignUpWrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

const SignUpLayout = () => {
  return (
    <>
      <CommonHead />
      <SignUpWrapper>
        <SignUpLeft />
        <SignUpForm />
      </SignUpWrapper>
    </>
  );
};

export default SignUpLayout;
