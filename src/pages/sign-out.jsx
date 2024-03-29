import { LargeButton } from "@components/common/Button";
import CommonHead from "@components/common/CommonHead";
import CommonLink from "@components/common/CommonLink";
import CommonLayout from "@layout/common/CommonLayout";
import { ACCENT_900, WHITE } from "@constants/colors";
import FlexBox from "@components/common/FlexBox";
import { H1 } from "@components/common/Headings";
import { signOut } from "@utils/auth";

const SignOut = () => {
  signOut();
  return (
    <>
      <CommonHead title="Park Here: Signed Out Successfully" />
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
          <H1
            color={WHITE}
            bold
            backgroundcolor={ACCENT_900}
            padding="0.5rem 1rem"
          >
            Sign Out Successful
          </H1>
          <CommonLink href="/">
            <LargeButton>Go to Home</LargeButton>
          </CommonLink>
        </FlexBox>
      </CommonLayout>
    </>
  );
};

export default SignOut;
