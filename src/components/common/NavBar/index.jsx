import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { ACCENT_400, ACCENT_700, WHITE } from "@constants/colors";
import Logo from "@components/common/Logo";
import CommonLink from "@components/common/CommonLink";
import { useRef, useEffect, useState } from "react";

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

  a {
    padding: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.25rem;
    font-weight: bold;
    color: ${ACCENT_700};
    text-transform: uppercase;
  }
`;

const CommonNavBar = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const navBarRef = useRef(null);

  useEffect(() => {
    setNavBarHeight(navBarRef?.current?.offsetHeight);
  }, [navBarRef]);

  useEffect(() => {
    localStorage.setItem("navBarHeight", navBarHeight);
  }, [navBarHeight]);

  return (
    <NavBarWrapper ref={navBarRef}>
      <NavBar justify="space-between" align="center">
        <Logo size={48} />
        <AllNavLinks align="center">
          <CommonLink href="/">Home</CommonLink>
          <CommonLink href="/sign-in">Sign In</CommonLink>
        </AllNavLinks>
      </NavBar>
    </NavBarWrapper>
  );
};

export default CommonNavBar;
