import Logo from "@common/Logo";
import { H1, P } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_900, TERTIARY_800 } from "@constants/colors";
import CommonLink from "../common/CommonLink";
import { useDesktop } from "@hooks/CustomHook";

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
  & input {
    width: 100%;
    color: ${ACCENT_900};
  }

  & input {
    padding: 0.5rem 1rem;
    border: 0.0625rem solid #d2d2d2;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;
  }

  & input:focus {
    border: 0.0625rem solid #000000;
  }

  & input::placeholder {
    color: #d2d2d2;
  }
`;

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const firstNameRef = useRef(null);

  const isDesktop = useDesktop();

  useEffect(() => {
    isDesktop ? firstNameRef.current.focus() : firstNameRef.current.blur();
  }, [isDesktop]);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const date = new Date();
    const timestamp = date.getTime();

    const dataPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
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

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const verifyEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(e.target.value === "" ? true : verifyEmail(e.target.value));
  };

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
      return passwordRegex.test(String(password));
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

  const verifyConfirmPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(verifyConfirmPassword(password, e.target.value));
  };

  return (
    <SignUpFormWrapper
      direction="column"
      gap="2rem"
      margin="0 auto"
      padding="3% 0 2%"
      paddingmobile="2.5rem 5% 4rem"
    >
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="1.5rem">
        <H1 bold>Sign Up</H1>
        <FlexForm onSubmit={handleSignUp}>
          <FlexBox gap="0.5rem">
            <FlexBox direction="column" gap="0.5rem">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                onChange={handleFirstName}
                autoComplete="true"
                ref={firstNameRef}
              />
            </FlexBox>
            <FlexBox direction="column" gap="0.5rem">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="last-name"
                onChange={handleLastName}
                autoComplete="true"
              />
            </FlexBox>
          </FlexBox>
          <FlexBox direction="column" gap="0.5rem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleEmail}
              autoComplete="true"
            />
            {emailError !== true && (
              <P style={{ color: TERTIARY_800 }}>
                Please enter a valid email address
              </P>
            )}
          </FlexBox>
          <FlexBox direction="column" gap="0.5rem">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePassword}
              autoComplete="true"
            />
            {(passwordError !== true || passwordError !== false) && (
              <P style={{ color: TERTIARY_800 }}>{passwordError}</P>
            )}
          </FlexBox>
          <FlexBox direction="column" gap="0.5rem">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              onChange={handleConfirmPassword}
              autoComplete="true"
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
            <SmallButtom type="submit" disabled={false}>
              Sign Up
            </SmallButtom>
            <CommonLink href="/sign-in" alignself="flex-end">
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
          </FlexBox>
        </FlexForm>
      </FlexBox>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
