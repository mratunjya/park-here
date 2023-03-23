import CommonLink from "@components/common/CommonLink";
import FlexBox from "@components/common/FlexBox";
import { H3 } from "@components/common/Headings";
import { PRIMARY_400 } from "@constants/colors";
import { options } from "@meta/DashBoardOptions/options";
import styled from "styled-components";

const DashboardOptionLeftWrapper = styled(FlexBox)``;

const DashboardOptionsLeft = ({ module }) => {
  return (
    <DashboardOptionLeftWrapper
      height="100%"
      width="100%"
      backgroundcolor={PRIMARY_400}
      padding="2rem"
      gap="1rem"
      direction="column"
    >
      {options[`${module}`]?.map((option, index) => (
        <CommonLink
          key={index}
          href={`/dashboard/${option
            .toLocaleLowerCase()
            .replaceAll("&", "")
            .split(" ")
            .filter((item) => item !== "")
            .join("-")}`}
        >
          <H3 bold>{option}</H3>
        </CommonLink>
      ))}
    </DashboardOptionLeftWrapper>
  );
};

export default DashboardOptionsLeft;
