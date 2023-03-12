import Logo from "@common/Logo";
import { H1, P } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import FlexBox from "@components/common/FlexBox";
import CustomSelectBox from "./CustomSelectBox";
import styled from "styled-components";
import {
  ACCENT_900,
  BLACK,
  PRIMARY_900,
  TERTIARY_800,
  WHITE_200,
} from "@constants/colors";
import CommonLink from "../common/CommonLink";
import { useDesktop } from "@hooks/CustomHook";
import { copy } from "@meta/sign-in-up/copy";
import { ADMIN, ATTENDANT } from "@constants/moduleNames";

const SignUpFormWrapper = styled(FlexBox)`
  width: 100%;
  height: fit-content;
  max-width: 26.25rem;
  overflow: auto;
  max-height: 100vh;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26.25rem;
  gap: 1.5rem;

  & label {
    font-size: 1rem;
    cursor: pointer;
  }

  & label,
  input {
    width: 100%;
    color: ${ACCENT_900};
  }

  input {
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input:focus,
  input:active,
  input:hover {
    border: 0.0625rem solid ${BLACK};
  }

  input::placeholder {
    color: ${WHITE_200};
  }

  .PhoneInput {
    width: 100%;
    gap: 0.5rem;

    .PhoneInputCountry {
      border: 0.0625rem solid ${WHITE_200};
      border-radius: 0.5rem;
      outline: none;
      font-size: 1.125rem;
      font-weight: 600;
      padding: 0.5rem;
      cursor: pointer;

      .PhoneInputCountrySelect {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .PhoneInputCountrySelect
        + .PhoneInputCountryIcon
        > .PhoneInputCountryIconImg {
        opacity: 1;
      }

      .PhoneInputCountrySelect:focus
        + .PhoneInputCountryIcon
        > .PhoneInputCountryIconImg
        > .PhoneInputInternationalIconGlobe {
        color: ${BLACK};
        stroke-width: 2.5;
      }

      .PhoneInputCountrySelect:focus
        + .PhoneInputCountryIcon
        + .PhoneInputCountrySelectArrow {
        color: ${BLACK};
        border-width: 0.125rem 0 0 0.125rem;
      }

      .PhoneInputCountryIcon--border {
        box-shadow: none;
        border: none;
        background: none;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem;
      }
    }

    * {
      transition: none !important;
    }
  }

  .PhoneInput:focus,
  .PhoneInput:active,
  .PhoneInput:hover {
    .PhoneInputCountry {
      border: 0.0625rem solid ${BLACK};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SignUpForm = ({ moduleName }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [parkingLotID, setParkingLotID] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const firstNameRef = useRef(null);

  const isDesktop = useDesktop();

  useEffect(() => {
    isDesktop ? firstNameRef.current.focus() : firstNameRef.current.blur();
  }, [isDesktop]);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setSubmitButtonDisabled(true);
    } else if (firstName && lastName && email && password && confirmPassword) {
      setSubmitButtonDisabled(false);
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
    password,
    confirmPassword,
  ]);

  const organizationOptions = [
    {
      value: "Organization 1",
      label: "Organization 1",
    },
    {
      value: "Organization 2",
      label: "Organization 2",
    },
    {
      value: "Organization 3",
      label: "Organization 3",
    },
    {
      value: "Organization 4",
      label: "Organization 4",
    },
    {
      value: "Organization 5",
      label: "Organization 5",
    },
  ];

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
      e.target.value === "" ? false : !verifyEmail(e.target.value.toLowerCase())
    );
  };

  const VerifyPhone = (phone) => {
    // Verify Phone for country code and 10 digits
    const phoneRegex = /^\+[1-9]{1}[0-9]{3,14}$/;
    return phoneRegex.test(String(phone));
  };

  useEffect(() => {
    const handlePhone = () => {
      setPhoneError(
        phone === "" || phone === undefined ? false : !VerifyPhone(phone)
      );
    };
    handlePhone();
  }, [phone]);

  const verifyPassword = (password) => {
    // Verify Password for at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character and no spaces allowed in password and return a appropriate message
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    } else if (password.length > 50) {
      return "Password must be less than 50 characters";
    } else if (password.search(/\s/) !== -1) {
      return "Password must not contain spaces";
    } else if (password.search(/[a-z]/) === -1) {
      return "Password must contain at least one lowercase letter";
    } else if (password.search(/[A-Z]/) === -1) {
      return "Password must contain at least one uppercase letter";
    } else if (password.search(/[0-9]/) === -1) {
      return "Password must contain at least one number";
    } else if (password.search(/[!@#$%^&*]/) === -1) {
      return "Password must contain at least one special character";
    } else {
      return !passwordRegex.test(String(password));
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      e.target.value === "" ? false : verifyPassword(e.target.value)
    );
    setConfirmPasswordError(
      confirmPassword === ""
        ? false
        : verifyConfirmPassword(e.target.value, confirmPassword)
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

  const handleOrganizationName = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (submitButtonDisabled) return;

    const date = new Date();
    const timestamp = date.getTime();

    const dataPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      parkingLotID: parkingLotID,
      password: password,
      timestamp: timestamp,
    };

    axios
      .post("http://localhost:4000/api/sign-up", dataPayload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignUpFormWrapper
      direction="column"
      gap="2rem"
      gapmobile="1.2rem"
      margin="0 auto"
      padding="3% 0 2%"
      paddingmobile="2.5rem 5% 4rem"
    >
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="1.5rem" gapmobile="1rem">
        <H1 bold>{copy[`${moduleName}`]?.signUp.title}</H1>
        <FlexForm onSubmit={handleSignUp}>
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
          </FlexBox>
          <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
            />
            {phoneError && (
              <P style={{ color: TERTIARY_800 }}>
                Please enter a valid phone number
              </P>
            )}
          </FlexBox>
          {moduleName === ATTENDANT && (
            <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
              <label htmlFor="parkingLotID">Parking Lot ID</label>
              <input
                type="text"
                placeholder="Parking Lot ID"
                id="parkingLotID"
                onChange={handleParkingLotID}
                autoComplete="true"
                value={parkingLotID}
              />
            </FlexBox>
          )}
          {moduleName === ADMIN && (
            <FlexBox direction="column" gap="0.5rem" gapmobile="0.35rem">
              <label htmlFor="organizationName">Organization Name</label>
              <CustomSelectBox
                options={organizationOptions}
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
            <SmallButtom type="submit" disabled={submitButtonDisabled}>
              Sign Up
            </SmallButtom>
            {copy[`${moduleName}`]?.signUp.signInRoute && (
              <CommonLink
                href={copy[`${moduleName}`]?.signUp.signInRoute}
                alignself="flex-end"
              >
                <P
                  fontSize="0.75rem"
                  bold
                  color={TERTIARY_800}
                  margin="-1.75rem 0 0"
                  marginmobile="-0.75rem 0 0"
                >
                  Don&apos;t have an account? <u>Sign In</u>
                </P>
              </CommonLink>
            )}
          </FlexBox>
        </FlexForm>
      </FlexBox>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
