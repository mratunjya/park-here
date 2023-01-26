import Logo from "@common/Logo";
import { H1 } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useState } from "react";
import axios from "axios";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_900 } from "@constants/colors";

const SignUpFormWrapper = styled(FlexBox)`
  width: 50%;
  height: 100%;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  gap: 24px;

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
    padding: 8px 16px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    outline: none;
    font-size: 1.2rem;
    font-weight: 600;
  }

  & input:focus {
    border: 1px solid #000000;
  }

  & input::placeholder {
    color: #d2d2d2;
  }
`;

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <SignUpFormWrapper direction="column" padding="4% 8% 0" gap="40px">
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="32px">
        <H1>Sign Up</H1>
        <FlexForm onSubmit={handleSignUp}>
          <FlexBox gap="8px">
            <FlexBox direction="column" gap="8px">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                onChange={handleFirstName}
                autoComplete="true"
              />
            </FlexBox>
            <FlexBox direction="column" gap="8px">
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
          <FlexBox direction="column" gap="8px">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleEmail}
              autoComplete="true"
            />
          </FlexBox>
          <FlexBox direction="column" gap="8px">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePassword}
              autoComplete="true"
            />
          </FlexBox>
          <FlexBox direction="column" gap="8px">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              onChange={handleConfirmPassword}
              autoComplete="true"
            />
          </FlexBox>
          <SmallButtom type="submit" disabled={false}>
            Sign Up
          </SmallButtom>
        </FlexForm>
      </FlexBox>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
