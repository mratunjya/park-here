import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import { ACCENT_400, ACCENT_700, PRIMARY_800, WHITE } from "@constants/colors";

import { navButtonsData, navLinksData } from "@meta/NavBar/navLinksData";
import CommonLink from "@components/common/CommonLink";
import FlexBox from "@components/common/FlexBox";
import Logo from "@components/common/Logo";
import { H5 } from "../Headings";

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid ${ACCENT_400};
  background: ${WHITE};

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const NavBar = styled(FlexBox)`
  width: 86.67%;
  max-width: 75rem;
`;

const AllNavLinks = styled(FlexBox)`
  width: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CommonNavBar = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [isSignInRoute, setIsSignInRoute] = useState(false);
  const navBarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setNavBarHeight(navBarRef?.current?.offsetHeight);
  }, [navBarRef]);

  useEffect(() => {
    localStorage.setItem("navBarHeight", navBarHeight);
  }, [navBarHeight]);

  useEffect(() => {
    setIsSignInRoute(router?.pathname?.includes("sign-in"));
  }, [router]);

  const RenderAllNavLinks = () =>
    navLinksData.map((navLink, index) => (
      <CommonLink href={navLink.href} key={index}>
        <FlexBox
          align="center"
          justify="center"
          fontweight="bold"
          fontsize="0.8rem"
          texttransform="uppercase"
          padding="0.5rem"
        >
          <H5 bold color={ACCENT_700} whitespace="nowrap">
            {navLink.name}
          </H5>
        </FlexBox>
      </CommonLink>
    ));

  const RenderNavButtons = ({ name, href }) => (
    <CommonLink href={href}>
      <FlexBox
        width="8.75rem"
        height="2.5rem"
        align="center"
        justify="center"
        borderadius="1.25rem"
        fontweight="bold"
        backgroundcolor={PRIMARY_800}
        color={WHITE}
        fontsize="0.8rem"
        texttransform="uppercase"
      >
        {name}
      </FlexBox>
    </CommonLink>
  );

  return (
    <NavBarWrapper ref={navBarRef}>
      <NavBar justify="space-between" align="center">
        <CommonLink href="/">
          <Logo size={48} />
        </CommonLink>
        <AllNavLinks align="center" gap="1.5rem">
          <FlexBox align="center" justify="center" gap="0.75rem">
            <RenderAllNavLinks />
          </FlexBox>
          <FlexBox>
            {isSignInRoute ? (
              <RenderNavButtons
                name={navButtonsData.signUp.name}
                href={navButtonsData.signUp.href}
              />
            ) : (
              <RenderNavButtons
                name={navButtonsData.signIn.name}
                href={navButtonsData.signIn.href}
              />
            )}
          </FlexBox>
        </AllNavLinks>
      </NavBar>
    </NavBarWrapper>
  );
};

export default CommonNavBar;
