import CommonLayout from "@layout/common/CommonLayout";
import { ACCENT_900, WHITE } from "@constants/colors";
import CommonHead from "@common/CommonHead";
import FlexBox from "@common/FlexBox";
import { H1 } from "@common/Headings";

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
        </FlexBox>
      </CommonLayout>
    </>
  );
};

export default PageNotFound;
