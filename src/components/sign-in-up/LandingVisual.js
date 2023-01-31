import CarParking from "@assets/sign-in-up/car-parking.png";
import CommonImage from "@common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import { PRIMARY_100, WHITE } from "@constants/colors";

const LandingVisual = () => {
  return (
    <FlexBox
      width="100%"
      height="fit-content"
      justify="flex-end"
      backgroundcolor={PRIMARY_100}
    >
      <CommonImage
        src={CarParking}
        alt="Park Here"
        objectfit="scale-down"
        objectposition="right bottom"
        backgroundcolor={WHITE}
        height="fit-content"
        width="95%"
        borderadius="2.5rem 0 0"
        alignself="flex-end"
        priority={false}
        padding="5% 0 0 5%"
        quality={40}
      />
    </FlexBox>
  );
};

export default LandingVisual;
