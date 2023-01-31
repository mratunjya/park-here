import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import Carousel from "./Carousel";
import LandingVisual from "./LandingVisual";

const SignInUpWrapper = styled(FlexBox)`
  width: 40%;
  height: 100%;
`;

const SignInUp = () => {
  return (
    <SignInUpWrapper direction="column" justify="flex-end" align="center">
      <Carousel />
      <LandingVisual />
    </SignInUpWrapper>
  );
};

export default SignInUp;
