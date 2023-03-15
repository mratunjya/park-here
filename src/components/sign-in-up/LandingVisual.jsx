import CarParking from "@assets/sign-in-up/car-parking.png";
import { PRIMARY_100, WHITE } from "@constants/colors";
import CommonImage from "@common/CommonImage";
import FlexBox from "@common/FlexBox";

const LandingVisual = () => {
  return (
    <FlexBox
      width="100%"
      widthmobile="30%"
      height="fit-content"
      heightmobile="-webkit-fill-available"
      justify="flex-end"
      backgroundcolor={PRIMARY_100}
      paddingmobile="2rem 0 0"
    >
      <CommonImage
        src={CarParking}
        alt="Park Here"
        objectfit="scale-down"
        objectposition="right bottom"
        backgroundcolor={WHITE}
        height="fit-content"
        width="100%"
        borderadius="2.5rem 0 0"
        alignself="flex-end"
        priority={false}
        padding="5% 0 0 5%"
        paddingmobile="5%"
        quality={7}
      />
    </FlexBox>
  );
};

export default LandingVisual;
