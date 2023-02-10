import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import Carousel from "./Carousel";
import LandingVisual from "./LandingVisual";
import { WHITE } from "@constants/colors";

const SignInUpWrapper = styled(FlexBox)`
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: unset;
    position: relative;

    &:after {
      height: 2.5rem;
      width: 100%;
      bottom: -2.5rem;
      left: 0;
      content: "";
      display: block;
      background: linear-gradient(
        to bottom,
        ${WHITE} 0%,
        ${WHITE} 20%,
        transparent 100%
      );
      position: absolute;
    }
  }
`;

const SignInUp = () => {
  return (
    <SignInUpWrapper
      direction="column"
      directionmobile="row"
      justify="flex-end"
      align="center"
      alignmobile="flex-start"
    >
      <Carousel />
      <LandingVisual />
    </SignInUpWrapper>
  );
};

export default SignInUp;
