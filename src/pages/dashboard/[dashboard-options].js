import DashBoardOptionsRight from '@components/dashboard/DashBoardOptionsRight';
import DashboardOptionsLeft from '@components/dashboard/DashBoardOptionsLeft';
import { options } from '@meta/DashBoardOptions/options';
import PageNotFound from '@components/common/404';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import localforage from 'localforage';

const DashboardOptionstWrapper = styled(FlexBox)`
  background-image: url('/assets/dashboard/DashboardRightBg.svg');
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;

  & > *:first-child {
    flex: 1;
  }

  & > *:last-child {
    flex: 4;
  }

  @media (max-width: 768px) {
    & > *:first-child {
      flex: 0;
    }

    & > *:last-child {
      flex: 1;
    }
  }
`;

const Dashboard = () => {
  const [possibleRoutes, setPossibleRoutes] = useState(null);
  const [module, setModule] = useState(null);
  const [height, setHeight] = useState(0);
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setHeight(localStorage.getItem('navBarHeight'));
    let allowedRoutes = [];
    let allMenuOptions = [];
    localforage.getItem('module').then((module) => {
      setModule(module);
      allMenuOptions = options[`${module}`]?.map((option) =>
        option
          .toLocaleLowerCase()
          .replaceAll('&', '')
          .split(' ')
          .filter((item) => item !== '')
          .join('-'),
      );
      allowedRoutes.push(module);
      allowedRoutes.push('profile');
      allMenuOptions && allowedRoutes.push(...allMenuOptions);
      setPossibleRoutes([...allowedRoutes]);
    });
  }, [router]);

  useEffect(() => {
    localforage.getItem('data').then((d) => {
      setData(d);
    });
  }, []);

  return (
    possibleRoutes !== null &&
    (possibleRoutes?.includes(router?.query['dashboard-options']) ? (
      <DashboardOptionstWrapper
        width="100%"
        height={`calc(100vh - ${height}px)`}
        directionmobile="column"
      >
        <DashboardOptionsLeft module={module} />
        <DashBoardOptionsRight module={module} data={data} />
      </DashboardOptionstWrapper>
    ) : (
      <PageNotFound />
    ))
  );
};

export default Dashboard;
