import { SECONDARY_900, SECONDARY_800, WHITE } from '@constants/colors';
import ConfirmBookingModal from './ConfirmBookingModal';
import CommonHead from '@components/common/CommonHead';
import styled, { keyframes } from 'styled-components';
import { H1, H4 } from '@components/common/Headings';
import FlexBox from '@components/common/FlexBox';
import { useEffect, useState } from 'react';
import axiosInstance from '@axiosInstance';
import { useRouter } from 'next/router';

const AllParkingLots = styled(FlexBox)`
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

const DeleteButton = styled(FlexBox)`
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

const ParkingSpots = ({ data }) => {
  const [parkingLotId, setParkingLotId] = useState('');
  const [allParkingLots, setAllParkingLots] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    axiosInstance
      .get('/parking-lots')
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAvailableParkingLots = () => {
    axiosInstance
      .get('/parking-lots')
      .then((res) => {
        setAllParkingLots([...res.data]);
        router.push('/dashboard/parking-history');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    setShowBookingModal(true);
  };

  const closeModal = () => {
    setShowBookingModal(false);
  };

  const handleBooking = (parkingLotId) => {
    const dataPayload = {
      email: data.email,
      parkingLotId: parkingLotId,
      timeStamp: new Date().getTime(),
    };

    axiosInstance
      .post('/bookings/create', dataPayload)
      .then((res) => {
        getAvailableParkingLots();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CommonHead
        title="Park Here: All Available parking spots for tomorrow"
        meta="Book a parking for tomorrow"
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
          <H1 bold>Available Parking Lots for tomorrow</H1>
        </FlexBox>
        <AllParkingLots
          width="100%"
          align="flex-start"
          justify="center"
          gap="2rem"
          wrap="wrap"
        >
          {allParkingLots.map((parkingLot, index) => (
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
                  <H4 bold>Booked</H4>
                  <H4 bold>Price</H4>
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
                  <H4>
                    {parkingLot.booked}/{parkingLot.total_capacity}
                  </H4>
                  <H4>₹{parkingLot.price}</H4>
                </FlexBox>
              </FlexBox>
              <DeleteButton
                onClick={() => {
                  setParkingLotId(parkingLot.id);
                  openModal();
                }}
              >
                Book
              </DeleteButton>
            </ParkingLotCard>
          ))}
        </AllParkingLots>
      </FlexBox>
      {showBookingModal && (
        <ConfirmBookingModal
          data={data}
          closeModal={closeModal}
          parkingLotId={parkingLotId}
          handleBooking={handleBooking}
        />
      )}
    </>
  );
};

export default ParkingSpots;
