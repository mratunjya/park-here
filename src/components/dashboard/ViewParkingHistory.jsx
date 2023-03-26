import { H1, H2, H4 } from '@components/common/Headings';
import CommonHead from '@components/common/CommonHead';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import axiosInstance from '@axiosInstance';
import { WHITE } from '@constants/colors';
import styled from 'styled-components';

const AllParkingLots = styled(FlexBox)``;

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

const ViewParkingHistory = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);

  useEffect(() => {
    axiosInstance
      .post('/bookings/booked-history', {
        parkingLotID: data.parkingLotID,
      })
      .then((res) => {
        console.log(res);
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.parkingLotID]);

  return (
    <>
      <CommonHead title="Park Here: Parking Lot parking History" />
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
        <FlexBox
          direction="column"
          gap="1.5rem"
          align="center"
          justify="center"
        >
          <H2 bold>Parking Lot details</H2>
          <FlexBox gap="1rem" width="fit-content" alignself="center">
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
              <H4 bold>Booked</H4>
            </FlexBox>
            <FlexBox
              direction="column"
              justify="space-between"
              align="stretch"
              gap="0.5rem"
            >
              <H4>{allParkingLots[0]?.name}</H4>
              <H4>{allParkingLots[0]?.address}</H4>
              <H4>{allParkingLots[0]?.city}</H4>
              <H4>{allParkingLots[0]?.state}</H4>
              <H4>
                {allParkingLots[0]?.booked}/{allParkingLots[0]?.total_capacity}
              </H4>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox align="flex-start" justify="space-around">
          <H1 bold>Parking Lot Bookings History</H1>
        </FlexBox>
        <AllParkingLots
          width="100%"
          align="flex-start"
          justify="center"
          gap="2rem"
          wrap="wrap"
        >
          {allParkingLots[0]?.firstName &&
            allParkingLots?.map((parkingLot, index) => (
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
                    <H4 bold>Phone</H4>
                    <H4 bold>Booking Date</H4>
                    <H4 bold>Booking Id</H4>
                  </FlexBox>
                  <FlexBox
                    direction="column"
                    justify="space-between"
                    align="stretch"
                    gap="0.5rem"
                  >
                    <H4>
                      {parkingLot.firstName} {parkingLot.lastName}
                    </H4>
                    <H4>
                      <a href={`tel:+91${parkingLot.phone}`}>
                        +91{parkingLot.phone}
                      </a>
                    </H4>
                    <H4>
                      {`${new Date(parkingLot.timestamp).getDate()}-${
                        new Date(parkingLot.timestamp).getMonth() + 1
                      }-${new Date(parkingLot.timestamp).getFullYear()}`}
                    </H4>
                    <H4>{parkingLot.booking_id}</H4>
                  </FlexBox>
                </FlexBox>
              </ParkingLotCard>
            ))}
        </AllParkingLots>
      </FlexBox>
    </>
  );
};

export default ViewParkingHistory;
