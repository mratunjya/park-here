import { H1, H2, H4 } from '@components/common/Headings';
import CommonHead from '@components/common/CommonHead';
import styled, { keyframes } from 'styled-components';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import axiosInstance from '@axiosInstance';

const ParkinLotDetails = styled(FlexBox)`
  position: sticky;
  top: 0;
  left: 0;
  flex: 1;
  padding: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    position: sticky;
  }

  @media (max-width: 1000px) and (max-width: 575px) {
    position: unset;
  }
`;

const ParkingLotHistory = styled(FlexBox)`
  flex: 3;
  padding: 1rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  backdrop-filter: blur(0px);
  background: rgba(255, 255, 255, 0.5);
`;

const AllParkingLots = styled(FlexBox)``;

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
  background: rgba(255, 255, 255, 0.5);
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

const ViewParkingHistory = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);

  useEffect(() => {
    axiosInstance
      .post('/bookings/booked-history', {
        parkingLotID: data.parkingLotID,
      })
      .then((res) => {
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
        width="100%"
        align="flex-start"
        gap="1rem"
        height="100%"
        position="relative"
        padding="0 0 5rem"
        wrap="wrap"
      >
        <ParkinLotDetails
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
        </ParkinLotDetails>
        <ParkingLotHistory direction="column" gap="2rem">
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
        </ParkingLotHistory>
      </FlexBox>
    </>
  );
};

export default ViewParkingHistory;
