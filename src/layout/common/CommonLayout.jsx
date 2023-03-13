import CommonHead from "@components/common/CommonHead";
import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";

const CommonLayout = ({ backgroundcolor, backgroundcolormobile, children }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });

  return (
    <>
      <CommonHead title="Park Here: Contact" />
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
    </>
  );
};

export default CommonLayout;
