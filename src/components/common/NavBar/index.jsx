import { navButtonsData, navLinksData } from '@meta/NavBar/navLinksData';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import styled, { css, keyframes } from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { AllModules } from '@constants/moduleNames';
import { FiChevronDown } from 'react-icons/fi';
import { isAuthenticated, signOut } from '@utils/auth';
import CommonLink from '@common/CommonLink';
import { useRouter } from 'next/router';
import FlexBox from '@common/FlexBox';
import { H4, H5 } from '@common/Headings';
import Logo from '@common/Logo';
import {
  ACCENT_400,
  ACCENT_700,
  ACCENT_800,
  ACCENT_900,
  PRIMARY_800,
  TERTIARY_800,
  TERTIARY_900,
  WHITE,
} from '@constants/colors';
import { SmallButton } from '../Button';

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

const OnlyMobileNavBarEnteringAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const OnlyMobileNavBarExitingAnimation = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0.5;
  }
`;

const OnlyMobileNavBar = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    animation: ${(props) =>
        props.isnavbaropen
          ? OnlyMobileNavBarEnteringAnimation
          : OnlyMobileNavBarExitingAnimation}
      0.3s ease-in-out;
    left: ${(props) => (props.isnavbaropen ? '30%' : '100%')};
  }
`;

const AllNavLinksMobile = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ChevronUpRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
`;

const ChevronDownRotate = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const NavButtonOpenAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const NavButtonCloseAnimation = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const NavButton = styled(FlexBox)`
  animation: ${(props) =>
      props.isnavbuttonclicked
        ? NavButtonOpenAnimation
        : NavButtonCloseAnimation}
    0.3s ease-in-out;
  transform: ${(props) =>
    props.isnavbuttonclicked ? 'scale(1.1)' : 'scale(1)'};

  svg {
    transform: rotate(${(props) => (props.isnavbuttonclicked ? '180deg' : 0)});
    animation: ${(props) =>
        props.isnavbuttonclicked
          ? ChevronUpRotate
          : props.isnavbuttonclicked === false && ChevronDownRotate}
      0.3s ease-in-out;
  }
`;

const LogInTooltip = styled(FlexBox)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: fit-content;
  background-color: ${WHITE};
  border-radius: 0.5rem;
  z-index: 1000;
  border: 1px solid ${ACCENT_400};
  box-shadow: 0 0 0.5rem ${ACCENT_400};

  @media (max-width: 768px) {
    left: 0;
    right: unset;
  }
`;

const SubNavBtn = styled(FlexBox)`
  &:active {
    transform: scale(0.95);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const HamBurgerButton = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const FallBackNavBar = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CommonNavBar = (ctx) => {
  const [isNavButtonClicked, setIsNavButtonClicked] = useState(null);
  const [isSignInRoute, setIsSignInRoute] = useState(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navBarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setNavBarHeight(navBarRef?.current?.offsetHeight);
  }, [navBarRef]);

  useEffect(() => {
    localStorage.setItem('navBarHeight', navBarHeight);
  }, [navBarHeight]);

  useEffect(() => {
    setIsNavOpen(false);
    setIsNavButtonClicked(null);
    router.isReady && setIsSignInRoute(router?.asPath?.includes('sign-in'));
  }, [router]);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsNavButtonClicked(null);
    });
  }, []);

  const openNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

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
          <H5
            bold
            color={
              router?.asPath?.includes(
                navLink.name
                  .toLocaleLowerCase()
                  .replaceAll('&', '')
                  .split(' ')
                  .filter((item) => item !== '')
                  .join('-'),
              )
                ? ACCENT_900
                : ACCENT_700
            }
            whitespace="nowrap"
            hovercolor={ACCENT_800}
          >
            {navLink.name}
          </H5>
        </FlexBox>
      </CommonLink>
    ));

  const RenderNavButtons = ({ name }) => (
    <NavButton
      width="8.75rem"
      height="2.5rem"
      align="center"
      justify="space-evenly"
      borderadius="1.25rem"
      fontweight="bold"
      backgroundcolor={PRIMARY_800}
      color={WHITE}
      fontsize="0.8rem"
      texttransform="uppercase"
      cursor="pointer"
      isnavbuttonclicked={isNavButtonClicked}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsNavButtonClicked(!isNavButtonClicked);
      }}
    >
      {name}
      <FiChevronDown size={20} />
    </NavButton>
  );

  const RenderSubNavButtons = ({ name, href }) => (
    <SubNavBtn
      onClick={() => router.push(href)}
      texttransform="uppercase"
      justify="flex-start"
      fontweight="bold"
      fontsize="0.8rem"
      padding="0.5rem"
      cursor="pointer"
      align="center"
      width="100%"
    >
      <H5 bold color={ACCENT_700} whitespace="nowrap" hovercolor={ACCENT_800}>
        {name}
      </H5>
    </SubNavBtn>
  );

  return (
    <>
      <NavBarWrapper ref={navBarRef}>
        <NavBar justify="space-between" align="center">
          <CommonLink href="/">
            <Logo size={48} sizemobile={44} />
          </CommonLink>
          <AllNavLinks align="center" gap="1.5rem" position="relative">
            <FlexBox align="center" justify="center" gap="0.75rem">
              <RenderAllNavLinks />
            </FlexBox>
            <FlexBox>
              {isAuthenticated() ? (
                <RenderNavButtons name="My Account" />
              ) : (
                isSignInRoute !== null && (
                  <RenderNavButtons
                    name={
                      navButtonsData?.[!isSignInRoute ? 'signIn' : 'signUp']
                        ?.name
                    }
                  />
                )
              )}
              <LogInTooltip
                gap="1rem"
                padding="0.6rem 0.8rem"
                align="flex-start"
                justify="flex-start"
                direction="column"
                display={isNavButtonClicked ? 'flex' : 'none'}
              >
                {isAuthenticated() ? (
                  <>
                    {navButtonsData.myAccount.subNav.map(
                      (accountOption, index) => (
                        <RenderSubNavButtons
                          href={accountOption.href}
                          key={index + 1000}
                          name={accountOption.name}
                        />
                      ),
                    )}
                    <SmallButton
                      padding="0 2rem"
                      backgroundcolor={TERTIARY_800}
                      hoverbackgroundcolor={TERTIARY_900}
                      onClick={() => {
                        signOut(ctx);
                        router.push('/sign-out');
                      }}
                    >
                      <H4 bold color={WHITE} texttransform="uppercase">
                        Sign Out
                      </H4>
                    </SmallButton>
                  </>
                ) : (
                  AllModules.map((module, index) => (
                    <RenderSubNavButtons
                      href={`/${
                        isSignInRoute ? 'sign-up' : 'sign-in'
                      }/${module}`}
                      key={index + 1000}
                      name={module}
                    />
                  ))
                )}
              </LogInTooltip>
            </FlexBox>
          </AllNavLinks>
          <HamBurgerButton
            width="fit-content"
            padding="0.5rem 0 0.5rem 0.5rem"
            onClick={isNavOpen ? closeNavBar : openNavBar}
          >
            {isNavOpen ? (
              <RxCross1 size={24} color={ACCENT_800} />
            ) : (
              <RxHamburgerMenu size={24} color={ACCENT_800} />
            )}
          </HamBurgerButton>
        </NavBar>
      </NavBarWrapper>
      {isNavOpen && (
        <FallBackNavBar
          height={`calc(100vh - ${navBarHeight}px)`}
          onClick={closeNavBar}
          width="100%"
          position="fixed"
          backgroundcolor={WHITE}
          direction="column"
          padding="2rem 1rem"
          zindex="100"
        />
      )}
      <OnlyMobileNavBar
        height={`calc(100vh - ${navBarHeight}px)`}
        width="70%"
        position="fixed"
        backgroundcolor={WHITE}
        direction="column"
        padding="2rem 0rem"
        isnavbaropen={isNavOpen}
        zindex="100"
      >
        <AllNavLinksMobile align="center" gap="1.5rem" direction="column">
          <FlexBox
            align="flex-start"
            justify="center"
            gap="0.75rem"
            direction="column"
          >
            <RenderAllNavLinks />
          </FlexBox>
          <FlexBox position="relative">
            {isAuthenticated() ? (
              <RenderNavButtons
                name={navButtonsData.myAccount.name}
                href={navButtonsData.myAccount.href}
              />
            ) : isSignInRoute ? (
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
            <LogInTooltip
              gap="1rem"
              padding="0.6rem 0.8rem"
              align="flex-start"
              justify="flex-start"
              direction="column"
              display={isNavButtonClicked ? 'flex' : 'none'}
            >
              {isAuthenticated() ? (
                <>
                  {navButtonsData.myAccount.subNav.map(
                    (accountOption, index) => (
                      <RenderSubNavButtons
                        href={accountOption.href}
                        key={index + 1000}
                        name={accountOption.name}
                      />
                    ),
                  )}
                  <SmallButton
                    backgroundcolor={TERTIARY_800}
                    hoverbackgroundcolor={TERTIARY_900}
                    onClick={() => {
                      signOut(ctx);
                      router.push('/sign-out');
                    }}
                    mobilepadding="0.5rem 1rem"
                  >
                    <H4 bold color={WHITE} texttransform="uppercase">
                      Sign Out
                    </H4>
                  </SmallButton>
                </>
              ) : (
                AllModules.map((module, index) => (
                  <RenderSubNavButtons
                    href={`/${isSignInRoute ? 'sign-up' : 'sign-in'}/${module}`}
                    key={index + 1000}
                    name={module}
                  />
                ))
              )}
            </LogInTooltip>
          </FlexBox>
        </AllNavLinksMobile>
      </OnlyMobileNavBar>
    </>
  );
};

export default CommonNavBar;
