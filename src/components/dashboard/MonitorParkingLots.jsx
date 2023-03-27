import { SECONDARY_900, SECONDARY_800, WHITE } from '@constants/colors';
import ConfirmParklingModal from './ConfirmParklingModal';
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
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.625rem);
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: 1000px) {
    position: unset;
  }

  @media (max-width: 768px) {
    position: sticky !important;
  }
`;

const ParkingLotHistory = styled(FlexBox)`
  flex: 3;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0rem);
  border-radius: 1rem;
  padding: 1rem;
`;

const AllParkingLots = styled(FlexBox)``;

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
  backdrop-filter: contrast(200%) brightness(110%);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 25rem;
  width: 100%;
  gap: 1rem;

  ${H4} {
    white-space: nowrap;
  }
`;

const ConfirmButton = styled(FlexBox)`
  background-color: ${SECONDARY_800};
  color: ${WHITE};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  width: fit-content;

  &:hover {
    background-color: ${SECONDARY_900};
  }
`;

const MonitorParkingLots = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const closeModal = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    axiosInstance
      .post('/bookings/booked', {
        parkingLotID: data.parkingLotID,
      })
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.parkingLotID]);

  const getBookedParkingLots = () => {
    axiosInstance
      .post('/bookings/booked', {
        parkingLotID: data.parkingLotID,
      })
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = (id) => {
    setShowAddModal(true);
    setBookingId(id);
  };

  return (
    <>
      <CommonHead
        title="Park Here: Monitor Parking Lots"
        meta="See the todays upcoming bookings and confirm them"
      />
      <FlexBox
        width="100%"
        align="flex-start"
        gap="1rem"
        height="100%"
        position="relative"
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
            <H1 bold>All Bookings for Today</H1>
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
                  <ConfirmButton
                    onClick={() => handleConfirm(parkingLot.booking_id)}
                  >
                    Confirm
                  </ConfirmButton>
                </ParkingLotCard>
              ))}
          </AllParkingLots>
        </ParkingLotHistory>
      </FlexBox>
      {showAddModal && (
        <ConfirmParklingModal
          closeModal={closeModal}
          getBookedParkingLots={getBookedParkingLots}
          data={data}
          bookingIdToConfirm={bookingId}
        />
      )}
    </>
  );
};

export default MonitorParkingLots;
