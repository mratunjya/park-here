import { H3, H4 } from "@components/common/Headings";
import styled, { keyframes } from "styled-components";
import FlexBox from "@components/common/FlexBox";
import { useState } from "react";
import axiosInstance from "@axiosInstance";
import {
  ACCENT_900,
  BLACK,
  PRIMARY_800,
  PRIMARY_900,
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

const AddParkingLotModalWrapper = styled(FlexBox)`
  position: fixed;
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);

  &:before {
    content: "";
    position: fixed;
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

    // Remove arrow from number input
    /* Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
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

const AddParkingLotModal = ({ closeModal, data, getAllParkingLots }) => {
  const [capacity, setCapacity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

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

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPayload = {
      email: data.email,
      name: name,
      address: address,
      city: city,
      state: state,
      capacity: capacity,
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
    <AddParkingLotModalWrapper
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
            <label htmlFor="capacity">
              <H4 bold>Capacity</H4>
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
              value={name}
            />
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleAddressChange}
              value={address}
            />
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleCityChange}
              value={city}
            />
            <input
              type="text"
              name="state"
              id="state"
              onChange={handleStateChange}
              value={state}
            />
            <input
              type="number"
              name="capacity"
              id="capacity"
              onChange={handleCapacityChange}
              value={capacity}
            />
          </FlexBox>
        </FlexBox>
        <input type="submit" value="Add Parking Lot" />
      </form>
    </AddParkingLotModalWrapper>
  );
};

export default AddParkingLotModal;
