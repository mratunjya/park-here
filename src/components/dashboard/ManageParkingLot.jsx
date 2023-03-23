import { H1, H3, H4 } from "@components/common/Headings";
import { SmallButton } from "@components/common/Button";
import styled, { keyframes } from "styled-components";
import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";
import axiosInstance from "@axiosInstance";
import {
  ACCENT_900,
  BLACK,
  PRIMARY_800,
  PRIMARY_900,
  TERTIARY_800,
  TERTIARY_900,
  WHITE,
  WHITE_200,
} from "@constants/colors";

const GrowAniamtion = keyframes`
    0% {
        transform: scale(0.25);
    }
    100% {
        transform: scale(1);
    }
`;

const AddParkingLotModal = styled(FlexBox)`
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  form {
    display: flex;
    background-color: ${WHITE};
    z-index: 2;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    gap: 2rem;
    animation: ${GrowAniamtion} 0.3s ease-out;

    & label {
        font-size: 1rem;
        cursor: pointer;
    }

    & label,
    & input {
        width: 100%;
        color: ${ACCENT_900};
    }

    & input {
        padding: 0.5rem 1rem;
        border: 0.0625rem solid ${WHITE_200};
        border-radius: 0.5rem;
        outline: none;
        font-size: 1.2rem;
        font-weight: 600;

        @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        }
    }

    & input:focus {
        border: 0.0625rem solid ${BLACK};
    }

    & input::placeholder {
        color: ${WHITE_200};
    }

    & input[type="submit"] {
        background-color: ${PRIMARY_800};
        color: ${WHITE};
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        width: fit-content;
        align-self: flex-end;
        text-transform: uppercase;

        &:hover {
        background-color: ${PRIMARY_900};

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
  }
`;

const AllParkingLots = styled(FlexBox)``;

const ParkingLotCard = styled(FlexBox)`
  background-color: ${WHITE};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  gap: 1rem;
  width: 400px;
`;

const DeleteButton = styled(FlexBox)`
  background-color: ${TERTIARY_800};
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
    background-color: ${TERTIARY_900};
  }
`;

const ManageParkingLot = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const getAllParkingLots = () => {
      axiosInstance
        .post("/parking-lots", {
          email: data.email,
        })
        .then((res) => {
          setAllParkingLots(res.data.parkingLots);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllParkingLots();
  }, [data.email]);

  const openModal = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const getAllParkingLots = () => {
    axiosInstance
      .post("/parking-lots", {
        email: data.email,
      })
      .then((res) => {
        setAllParkingLots(res.data.parkingLots);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPayload = {
      email: data.email,
      name: name,
      address: address,
      city: city,
      state: state,
    };

    console.log(dataPayload);

    axiosInstance
      .post("/parking-lots/add", dataPayload)
      .then((res) => {
        getAllParkingLots();
      })
      .catch((err) => {
        console.log(err);
      });

    closeModal();
  };

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
        <H1 bold>Manage Parking Lot</H1>
        <SmallButton onClick={openModal}>
          <H4 bold color={WHITE} texttransform="uppercase">
            + Add Parking Lot
          </H4>
        </SmallButton>
      </FlexBox>
      {showAddModal && (
        <AddParkingLotModal
          height="100%"
          align="center"
          justify="center"
          onClick={closeModal}
        >
          <form
            onClick={(e) => {
              e.stopPropagation();
            }}
            onSubmit={handleSubmit}
          >
            <H3 bold>Add Parking Lot</H3>
            <FlexBox gap="1rem" align="stretch">
              <FlexBox
                direction="column"
                width="fit-content"
                gap="0.5rem"
                justify="space-around"
                align="stretch"
              >
                <label htmlFor="name">
                  <H4 bold>Name</H4>
                </label>
                <label htmlFor="address">
                  <H4 bold>Address</H4>
                </label>
                <label htmlFor="city">
                  <H4 bold>City</H4>
                </label>
                <label htmlFor="state">
                  <H4 bold>State</H4>
                </label>
              </FlexBox>
              <FlexBox
                direction="column"
                justify="space-between"
                align="stretch"
                gap="0.5rem"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleCityChange}
                />
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={handleStateChange}
                />
              </FlexBox>
            </FlexBox>
            <input type="submit" value="Add Parking Lot" />
          </form>
        </AddParkingLotModal>
      )}
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
                <H4 bold>Id</H4>
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
                <H4>{parkingLot.id}</H4>
              </FlexBox>
            </FlexBox>
            <DeleteButton
              onClick={() => {
                deleteParkingLot(parkingLot.id);
              }}
            >
              Delete
            </DeleteButton>
          </ParkingLotCard>
        ))}
      </AllParkingLots>
    </FlexBox>
  );
};

export default ManageParkingLot;
