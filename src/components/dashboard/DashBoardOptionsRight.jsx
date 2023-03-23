import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DashBoard from "./DashBoard";
import Profile from "./Profile";

const DashboardOptionRightWrapper = styled(FlexBox)``;

const DashBoardOptionsRight = ({ module, data }) => {
  const [route, setRoute] = useState();
  const router = useRouter();

  useEffect(() => {
    setRoute(router?.query["dashboard-options"]);
  }, [router]);

  return (
    <DashboardOptionRightWrapper height="100%" align="center" justify="center">
      {route === module && <DashBoard />}
      {route === "profile" && <Profile module={module} data={data} />}
    </DashboardOptionRightWrapper>
  );
};

export default DashBoardOptionsRight;
