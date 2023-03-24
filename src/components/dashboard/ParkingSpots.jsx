import { H1, H4 } from "@components/common/Headings";
import styled, { keyframes } from "styled-components";
import FlexBox from "@components/common/FlexBox";
import { useEffect, useState } from "react";
import axiosInstance from "@axiosInstance";
import { useRouter } from "next/router";
import {
  SECONDARY_900,
  SECONDARY_800,
  PRIMARY_800,
  WHITE,
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

const Stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const Scale = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: scale3d(2.2, 2.2, 2);
  }
`;

const Fill = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px ${PRIMARY_800};
  }
`;

const ParkingSpots = ({ data }) => {
  const [allParkingLots, setAllParkingLots] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axiosInstance
      .get("/parking-lots")
      .then((res) => {
        setAllParkingLots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAvailableParkingLots = () => {
    axiosInstance
      .get("/parking-lots")
      .then((res) => {
        setAllParkingLots([...res.data]);
        router.push("/dashboard/parking-history");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBooking = (parkingLotId) => {
    const dataPayload = {
      email: data.email,
      parkingLotId: parkingLotId,
      timeStamp: new Date().getTime(),
    };

    axiosInstance
      .post("/bookings/create", dataPayload)
      .then((res) => {
        getAvailableParkingLots();
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
                handleBooking(parkingLot.id);
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
