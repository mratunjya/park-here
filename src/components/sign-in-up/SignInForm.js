import Logo from "@common/Logo";
import { H1, P } from "@common/Headings";
import { SmallButtom } from "@common/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_900, BLACK, TERTIARY_800, WHITE_200 } from "@constants/colors";
import CommonLink from "@common/CommonLink";
import { useDesktop } from "@hooks/CustomHook";
import { copy } from "@meta/sign-in-up/copy";

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

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SignInForm = ({ moduleName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const emailRef = useRef(null);

  const isDesktop = useDesktop();

  useEffect(() => {
    isDesktop ? emailRef.current.focus() : emailRef.current.blur();
  }, [isDesktop]);

  useEffect(() => {
    email && password
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true);
  }, [email, password]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (submitButtonDisabled) return;

    const dataPayload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/", dataPayload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignInFormWrapper
      direction="column"
      gap="2rem"
      gapmobile="1.2rem"
      margin="0 auto"
      padding="3% 0 2%"
      paddingmobile="2.5rem 5% 4rem"
    >
      <Logo alignself="flex-start" />
      <FlexBox direction="column" width="100%" gap="1.5rem" gapmobile="1rem">
        <H1 bold>{copy[`${moduleName}`]?.signIn.title}</H1>
        <FlexForm onSubmit={handleSignIn}>
          <FlexBox direction="column" gap="0.5rem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleEmail}
              autoComplete="true"
              ref={emailRef}
              value={email || ""}
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
              value={password || ""}
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
            <SmallButtom type="submit" disabled={submitButtonDisabled}>
              Sign In
            </SmallButtom>
            {copy[`${moduleName}`]?.signIn.signUpRoute && (
              <CommonLink
                href={copy[`${moduleName}`]?.signIn.signUpRoute}
                alignself="flex-end"
              >
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
            )}
          </FlexBox>
        </FlexForm>
      </FlexBox>
    </SignInFormWrapper>
  );
};

export default SignInForm;
