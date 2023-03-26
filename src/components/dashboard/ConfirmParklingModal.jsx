import CommonHead from '@components/common/CommonHead';
import styled, { keyframes } from 'styled-components';
import { H4 } from '@components/common/Headings';
import FlexBox from '@components/common/FlexBox';
import axiosInstance from '@axiosInstance';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  PRIMARY_800,
  PRIMARY_900,
  ACCENT_900,
  WHITE_200,
  BLACK,
  WHITE,
} from '@constants/colors';

const GrowAniamtion = keyframes`
    0% {
        transform: scale(0.25);
    }
    100% {
        transform: scale(1);
    }
`;

const ConfirmParklingModalWrapper = styled(FlexBox)`
  position: fixed;
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);

  &:before {
    content: "";
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    backdrop-filter: blur(12px);
  }

  form {
    gap: 2rem;
    z-index: 2;
    width: 100%;
    padding: 1rem;
    display: flex;
    max-width: 500px;
    border-radius: 0.5rem;
    flex-direction: column;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(12px) contrast(2);
    animation: ${GrowAniamtion} 0.3s ease-out;

    & label {
        font-size: 1rem;
        cursor: pointer;
    }

    & label {
        ${H4} {
            white-space: nowrap;
        }
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

const ConfirmParklingModal = ({
  closeModal,
  data,
  getBookedParkingLots,
  bookingIdToConfirm,
}) => {
  const [bookingId, setBookingId] = useState(bookingIdToConfirm);
  const [transactionId, setTransactionId] = useState('');
  const router = useRouter();

  const handleBookingIdChange = (e) => {
    setBookingId(e.target.value);
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPayload = {
      email: data.email,
      bookingId: bookingId,
      transactionId: transactionId,
    };

    axiosInstance
      .post('/bookings/confirm', dataPayload)
      .then((res) => {
        getBookedParkingLots();
        router.push('/dashboard/view-parking-history');
      })
      .catch((err) => {
        console.log(err);
      });

    closeModal();
  };

  return (
    <>
      <CommonHead
        title="Park Here: Confirm Parking"
        meta="Confirm Parking by entering transaction id"
      />
      <ConfirmParklingModalWrapper
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
          <FlexBox gap="1rem" align="stretch">
            <FlexBox
              direction="column"
              width="fit-content"
              gap="0.5rem"
              justify="space-around"
              align="stretch"
            >
              <label htmlFor="bookingId">
                <H4 bold>Booking Id</H4>
              </label>
              <label htmlFor="transactionId">
                <H4 bold>Transaction Id</H4>
              </label>
            </FlexBox>
            <FlexBox
              direction="column"
              justify="space-between"
              align="stretch"
              gap="0.5rem"
            >
              <input
                type="number"
                id="bookingId"
                onChange={handleBookingIdChange}
                value={bookingId}
              />
              <input
                type="number"
                id="transactionId"
                onChange={handleTransactionIdChange}
                value={transactionId}
              />
            </FlexBox>
          </FlexBox>
          <input type="submit" value="Confirm" />
        </form>
      </ConfirmParklingModalWrapper>
    </>
  );
};

export default ConfirmParklingModal;
