import { PRIMARY_400, WHITE } from "@constants/colors";
import CommonLayout from "@layout/common/CommonLayout";
import CommonImage from "@common/CommonImage";
import { H1, H4, P } from "@common/Headings";
import { AboutData } from "@meta/about";
import FlexBox from "@common/FlexBox";

const AboutComponent = () => {
  return (
    <CommonLayout
      backgroundcolor={PRIMARY_400}
      backgroundcolormobile="transparent"
    >
      <FlexBox
        width="86.67%"
        maxwidth="75rem"
        margin="0 auto"
        padding="2.5rem"
        paddingmobile="1.5rem 0"
        gap="3rem"
        gapmobile="2rem"
        wrapmobile="wrap-reverse"
        align="flex-start"
        justify="center"
        backgroundcolor={WHITE}
        minheight="100%"
        overflow="auto"
      >
        <FlexBox
          width="50%"
          widthmobile="100%"
          direction="column"
          gap="1.5rem"
          gapmobile="0.75rem"
        >
          <H1 bold>{AboutData.heading}</H1>
          <FlexBox
            direction="column"
            width="100%"
            gap="0.75rem"
            gapmobile="0.5rem"
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
  );
};

export default AboutComponent;
