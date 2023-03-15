import LandingVisual from "./LandingVisual";
import { WHITE } from "@constants/colors";
import styled from "styled-components";
import FlexBox from "@common/FlexBox";
import Carousel from "./Carousel";

const SignInUpWrapper = styled(FlexBox)`
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: unset;
    position: relative;

    &:after {
      height: 1.5rem;
      width: 100%;
      bottom: -1.5rem;
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

const SignInUp = ({ moduleName }) => {
  return (
    <SignInUpWrapper
      direction="column"
      directionmobile="row"
      justify="flex-end"
      align="center"
      alignmobile="flex-start"
    >
      <Carousel moduleName={moduleName} />
      <LandingVisual />
    </SignInUpWrapper>
  );
};

export default SignInUp;
