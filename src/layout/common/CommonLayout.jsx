import { useEffect, useState } from "react";
import FlexBox from "@common/FlexBox";

const CommonLayout = ({ backgroundcolor, backgroundcolormobile, children }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });

  return (
    <FlexBox
      height={`calc(100vh - ${navBarHeight}px)`}
      overflow="auto"
      direction="column"
      directionmobile="row"
      backgroundcolor={backgroundcolor}
      backgroundcolormobile={backgroundcolormobile}
    >
      {children}
    </FlexBox>
  );
};

export default CommonLayout;
