import EditParkingLotModal from './EditParkingLotModal';
import { SmallButton } from '@components/common/Button';
import CommonHead from '@components/common/CommonHead';
import AddParkingLotModal from './AddParkingLotModal';
import styled, { keyframes } from 'styled-components';
import { H1, H4 } from '@components/common/Headings';
import { useEffect, useRef, useState } from 'react';
import FlexBox from '@components/common/FlexBox';
import axiosInstance from '@axiosInstance';
import {
  PRIMARY_900,
  SECONDARY_800,
  SECONDARY_900,
  TERTIARY_800,
  TERTIARY_900,
  WHITE,
} from '@constants/colors';

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
  backdrop-filter: contrast(200%) brightness(110%);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 25rem;
  width: 100%;
  gap: 1rem;
`;

const DeleteButton = styled(FlexBox)`
  background-color: ${TERTIARY_800};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  align-items: center;
  width: fit-content;
  font-weight: 600;
  color: ${WHITE};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${TERTIARY_900};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const EditButton = styled(DeleteButton)`
  background-color: ${SECONDARY_800};
  &:hover {
    background-color: ${SECONDARY_900};
  }
`;

const ManageParkingLots = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalName, setModalName] = useState('');
  const [editData, setEditData] = useState({});

  const ManageParkingLotRef = useRef();

  const getAllParkingLots = () => {
    axiosInstance
      .post('/parking-lots', {
        email: data.email,
      })
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data || err.message);
      });
  };

  useEffect(() => {
    const getAllParkingLots = () => {
      axiosInstance
        .post('/parking-lots', {
          email: data.email,
        })
        .then((res) => {
          setAllParkingLots(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.data || err.message);
        });
    };

    getAllParkingLots();
  }, [data.email]);

  const openModal = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setModalName('');
  };

  const editParkingLot = (parkingLotData) => {
    setEditData(parkingLotData);
    setModalName('edit');
    openModal();
  };

  const deleteParkingLot = (id) => {
    axiosInstance
      .post('/parking-lots/delete', {
        id: id,
      })
      .then((res) => {
        getAllParkingLots();
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data || err.message);
      });
  };

  return (
    <>
      <CommonHead
        title="Park Here: Manage Parking Lots"
        meta="Add edit or delete a parking lot"
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
          <H1 bold>Manage Parking Lots</H1>
          <SmallButton
            boxshadow={`0 0 0 0.1rem ${PRIMARY_900}`}
            onClick={() => {
              setModalName('add');
              openModal();
            }}
          >
            <H4 bold color={WHITE} texttransform="uppercase">
              + Add Parking Lot
            </H4>
          </SmallButton>
        </FlexBox>
        <AllParkingLots
          width="100%"
          align="flex-start"
          justify="center"
          gap="2rem"
          wrap="wrap"
        >
          {allParkingLots?.map((parkingLot, index) => (
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
                  <H4 bold>Capacity</H4>
                  <H4 bold>Id</H4>
                  <H4 bold>Price</H4>
                  <H4 bold>Status</H4>
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
                  <H4>{parkingLot.total_capacity}</H4>
                  <H4>{parkingLot.id}</H4>
                  <H4>{parkingLot.price}</H4>
                  <H4 bold>{parkingLot.booked} Booked</H4>
                </FlexBox>
              </FlexBox>
              <FlexBox alignself="flex-end" width="fit-content" gap="1rem">
                <EditButton
                  onClick={() => {
                    editParkingLot(parkingLot);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={() => {
                    deleteParkingLot(parkingLot.id);
                  }}
                >
                  Delete
                </DeleteButton>
              </FlexBox>
            </ParkingLotCard>
          ))}
        </AllParkingLots>
      </FlexBox>
      {(showAddModal && modalName === 'add' && (
        <AddParkingLotModal
          data={data}
          closeModal={closeModal}
          getAllParkingLots={getAllParkingLots}
        />
      )) ||
        (modalName === 'edit' && (
          <EditParkingLotModal
            editData={editData}
            closeModal={closeModal}
            getAllParkingLots={getAllParkingLots}
          />
        ))}
    </>
  );
};

export default ManageParkingLots;
