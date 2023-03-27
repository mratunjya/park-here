import { ACCENT_400, TERTIARY_100, TERTIARY_800 } from '@constants/colors';
import DeleteAttendantConfirmModal from './DeleteAttendantConfirmModal';
import CustomSelectBox from '@components/sign-in-up/CustomSelectBox';
import CommonHead from '@components/common/CommonHead';
import styled, { keyframes } from 'styled-components';
import { H1, H4 } from '@components/common/Headings';
import { useEffect, useRef, useState } from 'react';
import FlexBox from '@components/common/FlexBox';
import { GiCrossedBones } from 'react-icons/gi';
import axiosInstance from '@axiosInstance';

const AllParkingLots = styled(FlexBox)`
  padding-bottom: 5rem;

  hr {
    width: 100%;
    border: 1px solid ${ACCENT_400};
  }
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

const DeleteAttendantButton = styled(FlexBox)`
  top: 0;
  right: 0;
  padding: 0.5rem;
  cursor: pointer;
  width: fit-content;
  position: absolute;
  border-radius: 0 1rem 0 0.5rem;
  background-color: ${TERTIARY_800};
`;

const ManageAttendants = ({ data }) => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [parkingLotOptions, setParkingLotOptions] = useState([]);
  const [allParkingLots, setAllParkingLots] = useState([]);

  const ManageParkingLotRef = useRef();

  const getAllAttendants = () => {
    axiosInstance
      .post('/attendants', {
        email: data.email,
      })
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getAllAttendants = () => {
      axiosInstance
        .post('/attendants', {
          email: data.email,
        })
        .then((res) => {
          setAllParkingLots(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllAttendants();

    const getAllParkingLots = () => {
      axiosInstance
        .post('/parking-lots', {
          email: data.email,
        })
        .then((res) => {
          const options = res.data.map((attendant) => {
            return {
              value: attendant.id,
              label: attendant.name,
            };
          });
          setParkingLotOptions(options);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllParkingLots();
  }, [data.email]);

  const handleNewParkingLot = (selectedParkingLot) => {
    if (selectedParkingLot) {
      axiosInstance
        .post('/attendants/update', {
          email: selectedParkingLot.email,
          parkingLotId: selectedParkingLot.value,
        })
        .then((res) => {
          getAllAttendants();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const openModal = () => {
    setShowDeleteConfirmationModal(true);
  };

  const closeModal = () => {
    setShowDeleteConfirmationModal(false);
  };

  const handleDeleteAttendant = (attendantEmail, password) => {
    axiosInstance
      .post('/attendants/delete', {
        attendantEmail: attendantEmail,
        email: data.email,
        password: password,
      })
      .then((res) => {
        getAllAttendants();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CommonHead
        title="Park Here: Manage Attendants"
        meta="Assign Attendants to Parking Lots"
      />
      <FlexBox
        gap="3rem"
        width="100%"
        height="100%"
        direction="column"
        align="flex-start"
        position="relative"
        ref={ManageParkingLotRef}
      >
        <FlexBox align="center" justify="space-around">
          <H1 bold>Manage Attendants</H1>
        </FlexBox>
        <AllParkingLots
          width="100%"
          align="flex-start"
          justify="center"
          gap="2rem"
          wrap="wrap"
        >
          {allParkingLots?.map((attendant, index) => (
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
                  <H4 bold>Email</H4>
                  <H4 bold>Phone</H4>
                  <H4 bold>Parking Lot Name</H4>
                  <H4 bold>Parking Lot ID</H4>
                </FlexBox>
                <FlexBox
                  direction="column"
                  justify="space-between"
                  align="stretch"
                  gap="0.5rem"
                >
                  <H4>
                    {attendant.firstName} {attendant.lastName}
                  </H4>
                  <H4>{attendant.email}</H4>
                  <H4>+91 {attendant.phone}</H4>
                  <H4>{attendant.parkingLotName}</H4>
                  <H4>{attendant.parkingLotID}</H4>
                </FlexBox>
              </FlexBox>
              <hr />
              <H4 bold>Assign another Parking Lot</H4>
              <CustomSelectBox
                email={attendant.email}
                options={parkingLotOptions}
                onChange={handleNewParkingLot}
                placeholder="Select Parking Lot"
                attendantEmail={attendant.email}
              />
              <DeleteAttendantButton onClick={openModal}>
                <GiCrossedBones color={TERTIARY_100} />
              </DeleteAttendantButton>
              {showDeleteConfirmationModal && (
                <DeleteAttendantConfirmModal
                  closeModal={closeModal}
                  handleDeleteAttendant={handleDeleteAttendant}
                  attendantEmail={attendant.email}
                />
              )}
            </ParkingLotCard>
          ))}
        </AllParkingLots>
      </FlexBox>
    </>
  );
};

export default ManageAttendants;
