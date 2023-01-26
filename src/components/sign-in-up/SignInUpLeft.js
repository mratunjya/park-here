import CarParking from "@assets/sign-in-up/car-parking.png";
import CommonImage from "@common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { PRIMARY_100 } from "@constants/colors";

const SignInUpWrapper = styled(FlexBox)`
  width: 40%;
  height: 100%;

  & > ${FlexBox} {
    background-color: ${PRIMARY_100};
  }
`;

const SignInUp = () => {
  return (
    <SignInUpWrapper direction="column" justify="flex-end" align="center">
      <FlexBox width="100%" height="100%" borderadius="0 0 40px 0"></FlexBox>
      <FlexBox width="100%" height="fit-content" justify="flex-end">
        <CommonImage
          src={CarParking}
          alt="College"
          objectfit="scale-down"
          objectposition="right bottom"
          backgroundcolor="#ffffff"
          height="fit-content"
          width="95%"
          borderadius="40px 0 0"
          alignself="flex-end"
          priority={false}
          padding="5% 0 0 5%"
          quality={40}
        />
      </FlexBox>
    </SignInUpWrapper>
  );
};

export default SignInUp;
