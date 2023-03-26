import CommonHead from '@components/common/CommonHead';
import ViewParkingHistory from './ViewParkingHistory';
import MonitorParkingLots from './MonitorParkingLots';
import ManageParkingLots from './ManageParkingLots';
import FlexBox from '@components/common/FlexBox';
import ParkingHistory from './ParkingHistory';
import GenerateReport from './GenerateReport';
import { useEffect, useState } from 'react';
import ParkingSpots from './ParkingSpots';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import DashBoard from './DashBoard';
import Profile from './Profile';

const DashboardOptionRightWrapper = styled(FlexBox)``;

const DashBoardOptionsRight = ({ module, data }) => {
  const [route, setRoute] = useState();
  const router = useRouter();

  useEffect(() => {
    setRoute(router?.query['dashboard-options']);
  }, [router]);

  return (
    <>
      <CommonHead title="Park Here: Dashboard Content" />
      <DashboardOptionRightWrapper
        height="100%"
        align="center"
        justify="center"
        overflow="auto"
        padding="1rem"
      >
        {route === 'view-parking-history' && <ViewParkingHistory data={data} />}
        {route === 'monitor-parking-lots' && <MonitorParkingLots data={data} />}
        {route === 'manage-parking-lots' && <ManageParkingLots data={data} />}
        {route === 'profile' && <Profile module={module} data={data} />}
        {route === 'parking-history' && <ParkingHistory data={data} />}
        {route === 'generate-report' && <GenerateReport data={data} />}
        {route === 'parking-spots' && <ParkingSpots data={data} />}
        {route === module && <DashBoard />}
      </DashboardOptionRightWrapper>
    </>
  );
};

export default DashBoardOptionsRight;
