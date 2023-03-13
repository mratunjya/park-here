import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import { ACCENT_400, ACCENT_700, PRIMARY_800, WHITE } from "@constants/colors";

import FlexBox from "@components/common/FlexBox";
import Logo from "@components/common/Logo";
import CommonLink from "@components/common/CommonLink";
import { H5 } from "../Headings";
import { navButtonsData, navLinksData } from "@meta/NavBar/navLinksData";

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
`;

const NavBar = styled(FlexBox)`
  width: 86.67%;
  max-width: 75rem;
`;

const AllNavLinks = styled(FlexBox)`
  width: fit-content;
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
          gap="0.25rem"
          fontweight="bold"
          fontsize="0.8rem"
          texttransform="uppercase"
          padding="0.5rem"
        >
          <H5 bold color={ACCENT_700}>
            {navLink.name}
          </H5>
          {navLink.icon}
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
        <Logo size={48} />
        <AllNavLinks align="center" gap="1rem">
          <FlexBox align="center" justify="center">
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
