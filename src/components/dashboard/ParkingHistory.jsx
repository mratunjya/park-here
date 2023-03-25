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
                <H4 bold>Price (Rs.)</H4>
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
                <H4>{parkingLot.price}</H4>
                <H4>{parkingLot.booking_id}</H4>
                <H4>{parkingLot.transaction_id}</H4>
                <H4>
                  {new Date(parkingLot.timestamp).getDate()}-
                  {new Date(parkingLot.timestamp).getMonth()}-
                  {new Date(parkingLot.timestamp).getFullYear()}
                </H4>
              </FlexBox>
            </FlexBox>
          </ParkingLotCard>
        ))}
      </BookedParkingLots>
    </FlexBox>
  );
};

export default ParkingHistory;
