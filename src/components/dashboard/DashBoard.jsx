import DashBoardSvg from "@assets/dashboard/DashBoardSvg.svg";
import CommonImage from "@components/common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";

const DashBoardVisual = styled(FlexBox)`
  filter: grayscale(100%) opacity(0.4);

  .visual {
    filter: grayscale(100%) opacity(0.4);
  }
`;

const DashBoard = () => {
  return (
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
  );
};

export default DashBoard;
