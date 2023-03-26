import CommonHead from '@components/common/CommonHead';
import styled, { keyframes } from 'styled-components';
import { H1, H4 } from '@components/common/Headings';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import axiosInstance from '@axiosInstance';

const BookedParkingLots = styled(FlexBox)`
  padding-bottom: 5rem;
`;

// Animation for the parking lot cards, each card will be animated one by one
const ParkingLotCardAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ParkingLotCard = styled(FlexBox)`
  animation: ${ParkingLotCardAnimation} 0.5s ease-in-out;
  // Glass effect
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(100px) contrast(200%) brightness(110%);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 400px;
  width: 100%;
  gap: 1rem;

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

  return (
    <>
      <CommonHead
        title="Park Here: Generate Report"
        meta="Report consist of revenue and bookings for each parking lot"
      />
      <FlexBox
        width="100%"
        align="flex-start"
        gap="3rem"
        height="100%"
        position="relative"
        direction="column"
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
                  <H4 bold>Parking Lot Id</H4>
                  <H4 bold>Total Revenue</H4>
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
                  <H4>₹{parkingLot.totalRevenue}</H4>
                  <H4>{parkingLot.totalBookings}</H4>
                  <H4>{parkingLot.showUp}</H4>
                </FlexBox>
              </FlexBox>
            </ParkingLotCard>
          ))}
        </BookedParkingLots>
      </FlexBox>
    </>
  );
};

export default GenerateReport;
