// Common components
import CommonImage from "@components/common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import CommonHead from "@components/common/CommonHead";
import { H1, H4, P } from "@components/common/Headings";

// Data
import { AboutData } from "@meta/about";
import CommonLayout from "@layout/common/CommonLayout";

const AboutComponent = () => {
  return (
    <>
      <CommonHead title="Park Here: About" />
      <CommonLayout>
        <FlexBox
          width="86.67%"
          maxwidth="75rem"
          margin="0 auto"
          gap="5rem"
          gapmobile="2rem"
          wrapmobile="wrap-reverse"
          align="center"
          justify="center"
        >
          <FlexBox width="50%" widthmobile="100%" direction="column" gap="1rem">
            <H1 bold>{AboutData.heading}</H1>
            <FlexBox
              direction="column"
              width="100%"
              gap="0.5rem"
              height="fit-content"
            >
              {AboutData.paragraphs.map((paragraph, index) => (
                <P key={index}>{paragraph}</P>
              ))}
            </FlexBox>
            <H4 bold>{AboutData.closing}</H4>
          </FlexBox>
          <CommonImage
            src={AboutData.image}
            width="50%"
            widthmobile="100%"
            alt="About Visual"
            objectposition="top center"
            height="fit-content"
            quality={1}
            priority={true}
            position="sticky"
            positionmobile="unset"
            top="0"
            left="0"
            alignself="flex-start"
          />
        </FlexBox>
      </CommonLayout>
    </>
  );
};

export default AboutComponent;
