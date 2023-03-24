import { H1, H4 } from "@components/common/Headings";
import styled, { keyframes } from "styled-components";
import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";
import axiosInstance from "@axiosInstance";
import {
  ACCENT_900,
  BLACK,
  PRIMARY_800,
  PRIMARY_900,
  SECONDARY_800,
  SECONDARY_900,
  TERTIARY_800,
  TERTIARY_900,
  WHITE,
  WHITE_200,
} from "@constants/colors";

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
  const [allParkingLots, setAllParkingLots] = useState([]);

  useEffect(() => {
    const getAllParkingLots = () => {
      axiosInstance
        .get("/parking-lots")
        .then((res) => {
          setAllParkingLots(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllParkingLots();
  }, []);

  const getAllParkingLots = () => {
    axiosInstance
      .get("/parking-lots")
      .then((res) => {
        setAllParkingLots(res.data);
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
                <H4 bold>Price (Rs.)</H4>
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
                <H4>{parkingLot.price}</H4>
              </FlexBox>
            </FlexBox>
            <DeleteButton
              onClick={() => {
                deleteParkingLot(parkingLot.id);
              }}
            >
              Book
            </DeleteButton>
          </ParkingLotCard>
        ))}
      </AllParkingLots>
    </FlexBox>
  );
};

export default ParkingSpots;
