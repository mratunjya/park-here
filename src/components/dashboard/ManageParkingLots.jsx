import EditParkingLotModal from "./EditParkingLotModal";
import { SmallButton } from "@components/common/Button";
import AddParkingLotModal from "./AddParkingLotModal";
import { H1, H4 } from "@components/common/Headings";
import { useEffect, useRef, useState } from "react";
import FlexBox from "@components/common/FlexBox";
import axiosInstance from "@axiosInstance";
import styled from "styled-components";
import {
  SECONDARY_800,
  SECONDARY_900,
  TERTIARY_800,
  TERTIARY_900,
  WHITE,
} from "@constants/colors";

const AllParkingLots = styled(FlexBox)``;

const ParkingLotCard = styled(FlexBox)`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  background-color: ${WHITE};
  border-radius: 0.5rem;
  padding: 1rem;
  width: 400px;
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
  const [modalName, setModalName] = useState("");
  const [editData, setEditData] = useState({});

  const ManageParkingLotRef = useRef();

  const getAllParkingLots = () => {
    axiosInstance
      .post("/parking-lots", {
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
    const getAllParkingLots = () => {
      axiosInstance
        .post("/parking-lots", {
          email: data.email,
        })
        .then((res) => {
          setAllParkingLots(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllParkingLots();
  }, [data.email]);

  const openModal = () => {
    ManageParkingLotRef.current.style.overflow = "hidden";
    setShowAddModal(true);
  };

  const closeModal = () => {
    ManageParkingLotRef.current.style.overflow = "auto";
    setShowAddModal(false);
    setModalName("");
  };

  const editParkingLot = (parkingLotData) => {
    setEditData(parkingLotData);
    setModalName("edit");
    openModal();
  };

  const deleteParkingLot = (id) => {
    axiosInstance
      .post("/parking-lots/delete", {
        id: id,
      })
      .then((res) => {
        getAllParkingLots();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FlexBox
      gap="3rem"
      width="100%"
      height="100%"
      padding="1rem"
      overflow="auto"
      direction="column"
      align="flex-start"
      position="relative"
      ref={ManageParkingLotRef}
    >
      <FlexBox align="center" justify="space-around">
        <H1 bold>Manage Parking Lots</H1>
        <SmallButton
          onClick={() => {
            setModalName("add");
            openModal();
          }}
        >
          <H4 bold color={WHITE} texttransform="uppercase">
            + Add Parking Lot
          </H4>
        </SmallButton>
      </FlexBox>
      {(showAddModal && modalName === "add" && (
        <AddParkingLotModal
          data={data}
          closeModal={closeModal}
          getAllParkingLots={getAllParkingLots}
        />
      )) ||
        (modalName === "edit" && (
          <EditParkingLotModal
            editData={editData}
            closeModal={closeModal}
            getAllParkingLots={getAllParkingLots}
          />
        ))}
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
  );
};

export default ManageParkingLots;
