import FlexBox from "@components/common/FlexBox";
import { H1 } from "@components/common/Headings";
import { ACCENT_900, WHITE } from "@constants/colors";
import CommonLayout from "@layout/common/CommonLayout";
import styled from "styled-components";

export const PageNotFoundWrapper = styled(FlexBox)``;

const PageNotFound = () => {
  return (
    <CommonLayout>
      <PageNotFoundWrapper
        width="100%"
        backgroundcolor={ACCENT_900}
        align="center"
        justify="center"
        height="100%"
      >
        <FlexBox
          width="fit-content"
          gap="0.125rem"
          backgroundcolor={WHITE}
          align="center"
          justify="center"
        >
          <H1
            color={WHITE}
            bold
            backgroundcolor={ACCENT_900}
            padding="0.5rem 1rem"
          >
            404
          </H1>
          <H1
            color={WHITE}
            bold
            backgroundcolor={ACCENT_900}
            padding="0.5rem 1rem"
          >
            Page Not Found
          </H1>
        </FlexBox>
      </PageNotFoundWrapper>
    </CommonLayout>
  );
};

export default PageNotFound;
