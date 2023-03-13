import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";

const CommonLayout = ({ backgroundcolor, children }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });

  return (
    <FlexBox
      height={`calc(100vh - ${navBarHeight}px)`}
      overflow="auto"
      paddingmobile="1.5rem 0 3rem"
      direction="column"
      backgroundcolor={backgroundcolor}
    >
      {children}
    </FlexBox>
  );
};

export default CommonLayout;
