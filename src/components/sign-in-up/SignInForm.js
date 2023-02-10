import Logo from "@common/Logo";
import { H1, P } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_900, TERTIARY_800 } from "@constants/colors";
import CommonLink from "@common/CommonLink";

const SignInFormWrapper = styled(FlexBox)`
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
    font-size: 1.2rem;
    font-weight: 600;
  }

  & input:focus {
    border: 0.0625rem solid #000000;
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
      gap="2rem"
      margin="0 auto"
      padding="3% 0 2%"
      paddingmobile="2.5rem 5% 4rem"
    >
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="1.5rem">
        <H1 bold>Sign In</H1>
        <FlexForm onSubmit={handleSignUp}>
          <FlexBox direction="column" gap="0.5rem">
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
          <FlexBox direction="column" gap="0.5rem">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePassword}
              autoComplete="true"
            />
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
              Sign In
            </SmallButtom>
            <CommonLink href="/sign-up" alignself="flex-end">
              <P
                fontSize="0.75rem"
                bold
                color={TERTIARY_800}
                margin="-1.75rem 0 0"
                marginmobile="-0.75rem 0 0"
              >
                Don&apos;t have an account? <u>Sign Up</u>
              </P>
            </CommonLink>
          </FlexBox>
        </FlexForm>
      </FlexBox>
    </SignInFormWrapper>
  );
};

export default SignInForm;
