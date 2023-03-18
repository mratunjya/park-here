import CommonLayout from "@layout/common/CommonLayout";
import { ACCENT_900, WHITE } from "@constants/colors";
import CommonHead from "@common/CommonHead";
import { H1, H3 } from "@common/Headings";
import { LargeButton } from "./Button";
import CommonLink from "./CommonLink";
import FlexBox from "@common/FlexBox";

const PageNotFound = () => {
  return (
    <>
      <CommonHead title="Park Here: Error 404, Page Not Found" />
      <CommonLayout>
        <FlexBox
          width="100%"
          backgroundcolor={ACCENT_900}
          align="center"
          justify="center"
          height="100%"
          direction="column"
          gap="2rem"
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
          <H3 color={WHITE} bold>
            The page you are looking for does not exist.
          </H3>
          <CommonLink href="/">
            <LargeButton>Go to Home</LargeButton>
          </CommonLink>
        </FlexBox>
      </CommonLayout>
    </>
  );
};

export default PageNotFound;
