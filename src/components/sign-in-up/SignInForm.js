import Logo from "@common/Logo";
import { H1, P } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_900, TERTIARY_800 } from "@constants/colors";
import Link from "next/link";

const SignInFormWrapper = styled(FlexBox)`
  width: 100%;
  height: fit-content;
  max-width: 420px;
  overflow: auto;
  max-height: 100vh;
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

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    const date = new Date();
    const timestamp = date.getTime();

    const dataPayload = {
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

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <SignInFormWrapper
      direction="column"
      gap="32px"
      margin="0 auto"
      padding="3% 0 2%"
    >
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="24px">
        <H1 bold>Sign In</H1>
        <FlexForm onSubmit={handleSignUp}>
          <FlexBox direction="column" gap="8px">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleEmail}
              autoComplete="true"
              ref={emailRef}
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
          <FlexBox justify="space-between" gap="8px" margin="10px 0 0">
            <SmallButtom type="submit" disabled={false}>
              Sign In
            </SmallButtom>
            <Link href="/sign-up">
              <P
                fontSize="0.75rem"
                bold
                color={TERTIARY_800}
                margin="-28px 0 0"
              >
                Don&apos;t have an account? <u>Sign Up</u>
              </P>
            </Link>
          </FlexBox>
        </FlexForm>
      </FlexBox>
    </SignInFormWrapper>
  );
};

export default SignInForm;
