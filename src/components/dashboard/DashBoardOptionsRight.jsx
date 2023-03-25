import MonitorParkingLots from "./MonitorParkingLots";
import FlexBox from "@components/common/FlexBox";
import ParkingHistory from "./ParkingHistory";
import { useEffect, useState } from "react";
import ParkingSpots from "./ParkingSpots";
import { useRouter } from "next/router";
import styled from "styled-components";
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
      {route === "manage-parking-lots" && <MonitorParkingLots data={data} />}
      {route === "parking-spots" && <ParkingSpots data={data} />}
      {route === "parking-history" && <ParkingHistory data={data} />}
      {route === "monitor-parking-lots" && <MonitorParkingLots data={data} />}
    </DashboardOptionRightWrapper>
  );
};

export default DashBoardOptionsRight;
