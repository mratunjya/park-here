import DashBoardSvg from '@assets/dashboard/DashBoardSvg.svg';
import CommonImage from '@components/common/CommonImage';
import CommonHead from '@components/common/CommonHead';
import FlexBox from '@components/common/FlexBox';
import styled from 'styled-components';

const DashBoardVisual = styled(FlexBox)`
  filter: grayscale(100%) opacity(0.4);

  .visual {
    filter: grayscale(100%) opacity(0.4);
  }
`;

const DashBoard = () => {
  return (
    <>
      <CommonHead title="Park Here: Dashboard" />
      <DashBoardVisual width="100%" align="center" justify="center">
        <CommonImage
          src={DashBoardSvg}
          alt="Dashboard Visual"
          width="35%"
          height="auto"
          priority={false}
          quality={1}
          className="visual"
        />
      </DashBoardVisual>
    </>
  );
};

export default DashBoard;
