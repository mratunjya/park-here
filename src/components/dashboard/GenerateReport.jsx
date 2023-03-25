import { H1, H4 } from '@components/common/Headings';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import axiosInstance from '@axiosInstance';
import { WHITE } from '@constants/colors';
import styled from 'styled-components';

const BookedParkingLots = styled(FlexBox)``;

const ParkingLotCard = styled(FlexBox)`
  background-color: ${WHITE};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  gap: 1rem;
  width: 400px;

  ${H4} {
    white-space: nowrap;
  }
`;

const GenerateReport = ({ data }) => {
  const [parkingReport, setParkingReport] = useState([]);

  useEffect(() => {
    axiosInstance
      .post('/reports/get-report', {
        email: data.email,
      })
      .then((res) => {
        console.log(res.data);
        const tempData = [];
        res.data.forEach((element) => {
          let totalRevenue = 0;
          let showUp = 0;
          const totalBookings = element.length;
          const id = element[0].parkinglot_id;
          element.forEach((booking) => {
            totalRevenue += booking.price;
            if (booking.status === 1) {
              showUp += 1;
            }
          });
          tempData.push({ id, totalRevenue, totalBookings, showUp });
        });
        setParkingReport([...tempData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.email]);

  console.log(parkingReport);

  return (
    <FlexBox
      padding="1rem"
      width="100%"
      align="flex-start"
      gap="3rem"
      height="100%"
      position="relative"
      direction="column"
      overflow="auto"
    >
      <FlexBox align="flex-start" justify="space-around">
        <H1 bold>Report</H1>
      </FlexBox>
      <BookedParkingLots
        width="100%"
        align="flex-start"
        justify="center"
        gap="2rem"
        wrap="wrap"
      >
        {parkingReport?.map((parkingLot, index) => (
          <ParkingLotCard direction="column" key={index}>
            <FlexBox gap="1rem" width="100%">
              <FlexBox
                direction="column"
                width="fit-content"
                gap="0.5rem"
                justify="space-around"
                align="stretch"
              >
                <H4 bold>Id</H4>
                <H4 bold>Total Revenue (Rs.)</H4>
                <H4 bold>Total bookings</H4>
                <H4 bold>Total Show Up</H4>
              </FlexBox>
              <FlexBox
                direction="column"
                justify="space-between"
                align="stretch"
                gap="0.5rem"
              >
                <H4>{parkingLot.id}</H4>
                <H4>{parkingLot.totalRevenue}</H4>
                <H4>{parkingLot.totalBookings}</H4>
                <H4>{parkingLot.showUp}</H4>
              </FlexBox>
            </FlexBox>
          </ParkingLotCard>
        ))}
      </BookedParkingLots>
    </FlexBox>
  );
};

export default GenerateReport;
