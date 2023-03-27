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
    transform: translateY(0.625rem);
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
  backdrop-filter: blur(6.25rem) contrast(200%) brightness(110%);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 25rem;
  width: 100%;
  gap: 1rem;

  ${H4} {
    white-space: nowrap;
  }
`;

const ParkingHistory = ({ data }) => {
  const [allBookedParkingLots, setAllBookedParkingLots] = useState([]);

  useEffect(() => {
    axiosInstance
      .post('/bookings/history', {
        email: data.email,
      })
      .then((res) => {
        setAllBookedParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.email]);

  return (
    <>
      <CommonHead
        title="Park Here: Parking History"
        meta="User Parking History"
      />
      <FlexBox
        gap="3rem"
        width="100%"
        height="100%"
        align="flex-start"
        direction="column"
        position="relative"
      >
        <FlexBox align="flex-start" justify="space-around">
          <H1 bold>Your Parking History</H1>
        </FlexBox>
        <BookedParkingLots
          width="100%"
          align="flex-start"
          justify="center"
          gap="2rem"
          wrap="wrap"
        >
          {allBookedParkingLots.map((parkingLot, index) => (
            <ParkingLotCard direction="column" key={index}>
              <FlexBox gap="1rem" width="100%">
                <FlexBox
                  direction="column"
                  width="fit-content"
                  gap="0.5rem"
                  justify="space-around"
                  align="stretch"
                >
                  <H4 bold>Name</H4>
                  <H4 bold>Address</H4>
                  <H4 bold>City</H4>
                  <H4 bold>State</H4>
                  <H4 bold>Price</H4>
                  <H4 bold>Booking Id</H4>
                  <H4 bold>Transaction Id</H4>
                  <H4 bold>Date</H4>
                </FlexBox>
                <FlexBox
                  direction="column"
                  justify="space-between"
                  align="stretch"
                  gap="0.5rem"
                >
                  <H4>{parkingLot.name}</H4>
                  <H4>{parkingLot.address}</H4>
                  <H4>{parkingLot.city}</H4>
                  <H4>{parkingLot.state}</H4>
                  <H4>₹{parkingLot.price}</H4>
                  <H4>{parkingLot.booking_id}</H4>
                  <H4>{parkingLot.transaction_id}</H4>
                  <H4>
                    {new Date(parkingLot.timestamp).getDate()}-
                    {new Date(parkingLot.timestamp).getMonth() + 1}-
                    {new Date(parkingLot.timestamp).getFullYear()}
                  </H4>
                </FlexBox>
              </FlexBox>
            </ParkingLotCard>
          ))}
        </BookedParkingLots>
      </FlexBox>
    </>
  );
};

export default ParkingHistory;
