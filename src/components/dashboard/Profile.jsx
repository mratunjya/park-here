import CommonHead from '@components/common/CommonHead';
import { ORGANIZATION } from '@constants/moduleNames';
import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { H1, H3, P } from '@common/Headings';
import { SmallButton } from '@common/Button';
import axiosInstance from '@axiosInstance';
import FlexBox from '@common/FlexBox';
import localforage from 'localforage';
import {
  TERTIARY_800,
  PRIMARY_800,
  ACCENT_900,
  WHITE_200,
  BLACK,
  WHITE,
} from '@constants/colors';

const ProfileWrapper = styled(FlexBox)`
  overflow: auto;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  & label {
    font-size: 1rem;
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  & label,
  input,
  textarea {
    width: 100%;
    color: ${ACCENT_900};
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    border: 0.0625rem solid ${WHITE_200};
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.3rem 0.5rem;
    }
  }

  // Remove arrow from number input
  /* Chrome, Safari, Edge, Opera */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='email'] {
    text-transform: lowercase;
  }

  input:focus,
  input:active,
  input:hover,
  textarea:focus,
  textarea:active,
  textarea:hover {
    border: 0.0625rem solid ${BLACK};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${WHITE_200};
  }

  @media (max-width: 768px) {
    gap: 1rem;
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

const SuccessCheckSvg = styled.svg`
  width: 56px;
  aspect-ratio: 1/1;
  margin: 10% auto;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: ${WHITE};
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px ${PRIMARY_800};
  animation: ${Fill} 0.4s ease-in-out 0.4s forwards,
    ${Scale} 0.5s ease-in-out 0.9s both;

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: ${PRIMARY_800};
    fill: none;
    animation: ${Stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: ${Stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
`;

const Profile = ({ module, data }) => {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [organizationAddress, setOrganizationAddress] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const firstNameRef = useRef(null);

  useEffect(() => {
    if (data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      let phoneNumber = `${data.phone}`;
      phoneNumber = phoneNumber.split('');
      phoneNumber.length > 0 && phoneNumber.splice(0, 0, '(');
      phoneNumber.length > 4 && phoneNumber.splice(4, 0, ') ');
      phoneNumber.length > 9 && phoneNumber.splice(9, 0, '-');
      setPhone(phoneNumber.join(''));
      setOrganizationName(data.organizationName);
      setOrganizationAddress(data.organizationAddress);
    }
  }, [data]);

  useEffect(() => {
    if (phoneError) {
      setSubmitButtonDisabled(true);
    } else if (firstName && lastName && phone) {
      if (module === ORGANIZATION) {
        organizationAddress &&
          organizationName &&
          setSubmitButtonDisabled(false);
      } else {
        setSubmitButtonDisabled(false);
      }
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [
    firstName,
    lastName,
    phone,
    phoneError,
    module,
    organizationName,
    organizationAddress,
  ]);

  const handleOrganizationAddress = (e) => {
    setOrganizationAddress(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const VerifyPhone = (phone) => {
    // Verify Phone for at least 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(String(phone));
  };

  const handlePhone = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, '');
    setPhoneError(phoneNumber === '' ? false : !VerifyPhone(phoneNumber));
    phoneNumber = phoneNumber.split('');
    phoneNumber.length > 0 && phoneNumber.splice(0, 0, '(');
    phoneNumber.length > 4 && phoneNumber.splice(4, 0, ') ');
    phoneNumber.length > 9 && phoneNumber.splice(9, 0, '-');
    phoneNumber = phoneNumber.join('');
    setPhone(phoneNumber);
  };

  const handleOrganizationName = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (submitButtonDisabled) return;

    let dataPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone.replace(/\D/g, ''),
      oldData: data,
    };

    if (module === ORGANIZATION) {
      dataPayload = {
        ...dataPayload,
        organizationName: organizationName,
      };

      if (module === ORGANIZATION) {
        dataPayload = {
          ...dataPayload,
          organizationAddress: organizationAddress,
        };
      }
    }

    axiosInstance
      .post(`/update/${module}`, dataPayload)
      .then((res) => {
        localforage.setItem('data', res.data.newData);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CommonHead title="Park Here: Profile" meta="Edit you profile details" />
      <ProfileWrapper
        direction="column"
        gap="2rem"
        gapmobile="1.2rem"
        margin="0 auto"
        paddingmobile="0 5%"
        width="100%"
        height="100%"
        maxheight="inherit"
        minheight="fit-content"
      >
        <FlexBox
          direction="column"
          width="100%"
          gap="1.5rem"
          gapmobile="1rem"
          maxwidth="26.25rem"
          margin="2% auto"
          marginmobile="calc(2% + 1.5rem) auto"
          height="auto"
        >
          <H1 bold>Update your details</H1>
          {updateSuccess ? (
            <SuccessCheckSvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </SuccessCheckSvg>
          ) : (
            <FlexForm>
              {module === ORGANIZATION && (
                <>
                  <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                    <label htmlFor="organization-name">Organization Name</label>
                    <input
                      type="text"
                      placeholder="Organization Name"
                      id="organization-name"
                      onChange={handleOrganizationName}
                      autoComplete="true"
                      value={organizationName}
                    />
                  </FlexBox>
                  <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                    <label htmlFor="organization-address">
                      Organization Address
                    </label>
                    <textarea
                      placeholder="Organization Address"
                      id="organization-address"
                      onChange={handleOrganizationAddress}
                      autoComplete="true"
                      value={organizationAddress}
                      rows={4}
                    />
                  </FlexBox>
                </>
              )}
              <FlexBox direction="column" gap="0.5rem">
                {module === ORGANIZATION && (
                  <H3 bold>Contact Person Details</H3>
                )}
                <FlexBox gap="0.5rem">
                  <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="first-name"
                      onChange={handleFirstName}
                      autoComplete="true"
                      ref={firstNameRef}
                      value={firstName}
                    />
                  </FlexBox>
                  <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="last-name"
                      onChange={handleLastName}
                      autoComplete="true"
                      value={lastName}
                    />
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                <label htmlFor="phone">Phone</label>
                <FlexBox align="center" gap="1rem">
                  <FlexBox
                    padding="0 0 0 1rem"
                    width="fit-content"
                    align="center"
                    justify="center"
                  >
                    <H3 bold>+91</H3>
                  </FlexBox>
                  <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    onChange={handlePhone}
                    autoComplete="true"
                    value={phone}
                    style={{ width: '100%' }}
                  />
                </FlexBox>
                {phoneError && (
                  <P style={{ color: TERTIARY_800 }}>
                    Please enter a valid phone number
                  </P>
                )}
              </FlexBox>
              <FlexBox
                justify="space-between"
                gap="0.5rem"
                gapmobile="2rem"
                margin="0.625rem 0 0"
                direction="column-reverse"
                marginmobile="0"
              >
                <SmallButton
                  type="submit"
                  disabled={submitButtonDisabled}
                  onClick={handleUpdate}
                >
                  Update
                </SmallButton>
              </FlexBox>
            </FlexForm>
          )}
        </FlexBox>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
