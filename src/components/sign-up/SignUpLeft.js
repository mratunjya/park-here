import CarParking from "@assets/sign-up/car-parking.png";
import CommonImage from "@common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { PRIMARY_100 } from "@constants/colors";

const SignUpLeftWrapper = styled(FlexBox)`
  width: 50%;
  height: 100%;

  & > ${FlexBox} {
    background-color: ${PRIMARY_100};
  }
`;

const SignUpLeft = () => {
  return (
    <SignUpLeftWrapper direction="column" justify="flex-end" align="center">
      <FlexBox width="100%" height="40%" borderadius="0 0 40px 0"></FlexBox>
      <FlexBox width="100%" height="60%" justify="flex-end">
        <CommonImage
          src={CarParking}
          alt="College"
          draggable={false}
          objectfit="scale-down"
          objectposition="right bottom"
          backgroundcolor="#ffffff"
          height="100%"
          width="95%"
          borderadius="40px 0 0"
          alignself="flex-end"
          priority={false}
          padding="10% 0 0"
        />
      </FlexBox>
    </SignUpLeftWrapper>
  );
};

export default SignUpLeft;
