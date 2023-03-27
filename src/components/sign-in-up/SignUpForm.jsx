import { ADMIN, ATTENDANT, ORGANIZATION } from '@constants/moduleNames';
import { USER_ADD_SUCCESS } from '@constants/api-messages';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomSelectBox from './CustomSelectBox';
import CommonLink from '../common/CommonLink';
import { H1, H3, P } from '@common/Headings';
import { SmallButton } from '@common/Button';
import { copy } from '@meta/sign-in-up/copy';
import axiosInstance from '@axiosInstance';
import { useRouter } from 'next/router';
import FlexBox from '@common/FlexBox';
import {
  TERTIARY_800,
  PRIMARY_800,
  ACCENT_900,
  WHITE_200,
  BLACK,
  WHITE,
  SECONDARY_800,
} from '@constants/colors';

const SignUpFormWrapper = styled(FlexBox)`
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
    box-shadow: inset 0rem 0rem 0rem 1.875rem ${PRIMARY_800};
  }
`;

const SuccessCheckSvg = styled.svg`
  width: 3.5rem;
  aspect-ratio: 1/1;
  margin: 10% auto;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: ${WHITE};
  stroke-miterlimit: 10;
  box-shadow: inset 0rem 0rem 0rem ${PRIMARY_800};
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

const SignUpForm = ({ module }) => {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [organizationAddress, setOrganizationAddress] = useState('');
  const [organizationOptions, setOrganizationOptions] = useState([]);
  const [customEmailError, setCustomEmailError] = useState(null);
  const [organizationName, setOrganizationName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [parkingLotID, setParkingLotID] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const firstNameRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    module === ADMIN &&
      axiosInstance
        .get('/organization/names')
        .then((res) => {
          const organizationNames = res.data.organizationNames.map((org) => ({
            value: org.organizationName,
            label: org.organizationName,
          }));
          setOrganizationOptions(organizationNames);
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.data || err.message);
        });
  }, [module]);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError || phoneError) {
      setSubmitButtonDisabled(true);
    } else if (
      firstName &&
      lastName &&
      email &&
      phone &&
      password &&
      confirmPassword
    ) {
      if (module === ADMIN) {
        organizationName && setSubmitButtonDisabled(false);
      } else if (module === ATTENDANT) {
        parkingLotID && setSubmitButtonDisabled(false);
      } else if (module === ORGANIZATION) {
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
    emailError,
    passwordError,
    confirmPasswordError,
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    phoneError,
    module,
    organizationName,
    parkingLotID,
    organizationAddress,
  ]);

  useEffect(() => {
    if (signUpSuccess) {
      const routeToSignIn = setTimeout(
        () => router.push(`/sign-in/${module}`),
        1750,
      );
      return () => clearTimeout(routeToSignIn);
    }
  }, [module, router, signUpSuccess]);

  const handleOrganizationAddress = (e) => {
    setOrganizationAddress(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const verifyEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
    setEmailError(
      e.target.value === ''
        ? false
        : !verifyEmail(e.target.value.toLowerCase()),
    );
    setCustomEmailError(null);
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

  const verifyPassword = (password) => {
    // Verify Password for at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character and no spaces allowed in password and return a appropriate message
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    } else if (password.length > 50) {
      return 'Password must be less than 50 characters';
    } else if (password.search(/\s/) !== -1) {
      return 'Password must not contain spaces';
    } else if (password.search(/[a-z]/) === -1) {
      return 'Password must contain at least one lowercase letter';
    } else if (password.search(/[A-Z]/) === -1) {
      return 'Password must contain at least one uppercase letter';
    } else if (password.search(/[0-9]/) === -1) {
      return 'Password must contain at least one number';
    } else if (password.search(/[!@#$%^&*]/) === -1) {
      return 'Password must contain at least one special character';
    } else {
      return passwordRegex.test(String(password));
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      e.target.value === '' ? false : verifyPassword(e.target.value),
    );
    setConfirmPasswordError(
      confirmPassword === ''
        ? false
        : verifyConfirmPassword(e.target.value, confirmPassword),
    );
  };

  const verifyConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword ? false : true;

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(verifyConfirmPassword(password, e.target.value));
  };

  const handleParkingLotID = (e) => {
    setParkingLotID(e.target.value);
  };

  const handleReactSelectOrganizationName = (selectedOption) => {
    setOrganizationName(selectedOption?.value);
  };

  const handleOrganizationName = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (submitButtonDisabled) return;

    let dataPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone.replace(/\D/g, ''),
      password: password,
    };

    if (module === ADMIN || module === ORGANIZATION) {
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

    if (module === ATTENDANT) {
      dataPayload = {
        ...dataPayload,
        parkingLotID: parkingLotID,
      };
    }

    axiosInstance
      .post(`/sign-up/${module}`, dataPayload)
      .then((res) => {
        if (res.status === 200) {
          res.data.message === USER_ADD_SUCCESS && setSignUpSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data || err.message);
      });
  };

  return (
    <SignUpFormWrapper
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
        <H1 bold>{copy[`${module}`]?.signUp.title}</H1>
        {signUpSuccess ? (
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
              {module === ORGANIZATION && <H3 bold>Contact Person Details</H3>}
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleEmail}
                autoComplete="true"
                value={email}
              />
              {emailError && (
                <P style={{ color: TERTIARY_800 }}>
                  Please enter a valid email address
                </P>
              )}
              {customEmailError && (
                <P style={{ color: TERTIARY_800 }}>{customEmailError}</P>
              )}
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
            {module === ATTENDANT && (
              <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                <label htmlFor="parkingLotID">Parking Lot ID</label>
                <input
                  type="number"
                  placeholder="Parking Lot ID"
                  id="parkingLotID"
                  onChange={handleParkingLotID}
                  autoComplete="true"
                  value={parkingLotID}
                />
              </FlexBox>
            )}
            {module === ADMIN && (
              <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
                <label>Organization Name</label>
                <CustomSelectBox
                  options={organizationOptions}
                  onChange={handleReactSelectOrganizationName}
                />
              </FlexBox>
            )}
            <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handlePassword}
                autoComplete="true"
                value={password}
              />
              {passwordError && (
                <P style={{ color: TERTIARY_800 }}>{passwordError}</P>
              )}
            </FlexBox>
            <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm-password"
                onChange={handleConfirmPassword}
                autoComplete="true"
                value={confirmPassword}
              />
              {confirmPasswordError && (
                <P style={{ color: TERTIARY_800 }}>
                  Passwords do not match. Please try again.
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
                onClick={handleSignUp}
              >
                Sign Up
              </SmallButton>
              {copy[`${module}`]?.signUp.signInRoute && (
                <CommonLink
                  href={copy[`${module}`]?.signUp.signInRoute}
                  alignself="flex-end"
                >
                  <P
                    fontSize="0.75rem"
                    bold
                    color={SECONDARY_800}
                    margin="-1.75rem 0 0"
                    marginmobile="-0.75rem 0 0"
                  >
                    Already have an account? <u>Sign In</u>
                  </P>
                </CommonLink>
              )}
            </FlexBox>
          </FlexForm>
        )}
      </FlexBox>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
