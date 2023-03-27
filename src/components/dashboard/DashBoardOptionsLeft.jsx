import { options } from '@meta/DashBoardOptions/options';
import CommonLink from '@components/common/CommonLink';
import CommonHead from '@components/common/CommonHead';
import FlexBox from '@components/common/FlexBox';
import { H3 } from '@components/common/Headings';
import { ACCENT_900, PRIMARY_400, PRIMARY_800 } from '@constants/colors';
import styled, { keyframes } from 'styled-components';

const SlideInLeftAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    border: none;
  }
  100% {
    transform: translateX(0);
    border-right: 0.125rem solid ${PRIMARY_800};
  }
`;

const SlideInTopAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    border: none;
  }
  100% {
    transform: translateY(0);
    border-bottom: 0.125rem solid ${PRIMARY_800};
  }
`;

const DashboardOptionLeftWrapper = styled(FlexBox)`
  animation: ${SlideInLeftAnimation} 1s ease-in-out;
  border-right: 0.125rem solid ${PRIMARY_800};

  @media (max-width: 768px) {
    border-bottom: 0.125rem solid ${PRIMARY_800};
    border-right: none;
    animation: ${SlideInTopAnimation} 1s ease-in-out;
  }
`;

const CustomH3 = styled(H3)`
  white-space: nowrap;
  -webkit-text-stroke-width: 0.0313rem;
  -webkit-text-stroke-color: black;

  &:hover {
    transform: scale(1.05);
    margin-left: 2.5%;
  }
`;

const DashboardOptionsLeft = ({ module }) => {
  return (
    <>
      <CommonHead title="Park Here: Dashboard Options" />
      <DashboardOptionLeftWrapper
        height="100%"
        width="100%"
        backgroundcolor="rgba(76,175,80,0.25)"
        borderadius="0 1rem 1rem 0"
        borderadiusmobile="0 0 1rem 1rem"
        padding="2rem 4rem 2rem 1rem"
        paddingmobile="1rem 2rem 1rem 1rem"
        gap="1rem"
        direction="column"
      >
        {options[`${module}`]?.map((option, index) => (
          <CommonLink
            key={index}
            href={`/dashboard/${option
              .toLocaleLowerCase()
              .replaceAll('&', '')
              .split(' ')
              .filter((item) => item !== '')
              .join('-')}`}
          >
            <CustomH3 bold color={ACCENT_900}>
              {option}
            </CustomH3>
          </CommonLink>
        ))}
      </DashboardOptionLeftWrapper>
    </>
  );
};

export default DashboardOptionsLeft;
