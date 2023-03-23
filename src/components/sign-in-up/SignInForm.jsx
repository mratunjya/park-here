import { ACCENT_900, BLACK, TERTIARY_800, WHITE_200 } from "@constants/colors";
import { useEffect, useRef, useState } from "react";
import { useDesktop } from "@hooks/CustomHooks";
import { SmallButton } from "@common/Button";
import { copy } from "@meta/sign-in-up/copy";
import CommonLink from "@common/CommonLink";
import axiosInstance from "@axiosInstance";
import { H1, P } from "@common/Headings";
import { useRouter } from "next/router";
import styled from "styled-components";
import FlexBox from "@common/FlexBox";
import { signIn } from "@utils/auth";
import localforage from "localforage";

const SignInFormWrapper = styled(FlexBox)`
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

  input[type="email"] {
    text-transform: lowercase;
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

const SignInForm = ({ module }) => {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

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
      email: email.toLowerCase(),
      password: password,
    };

    axiosInstance
      .post(`/sign-in/${module}`, dataPayload)
      .then((res) => {
        const token = res.data.token;
        localforage.setItem("data", res.data.user);
        signIn(token, module);
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
        <H1 bold>{copy[`${module}`]?.signIn.title}</H1>
        <FlexForm>
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
            <SmallButton
              type="submit"
              disabled={submitButtonDisabled}
              onClick={handleSignIn}
            >
              Sign In
            </SmallButton>
            {copy[`${module}`]?.signIn.signUpRoute && (
              <CommonLink
                href={copy[`${module}`]?.signIn.signUpRoute}
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
