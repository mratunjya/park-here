import CommonImage from "@components/common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import AboutSvg from "@assets/about/about.svg";
import CommonHead from "@components/common/CommonHead";
import { H1, H4, P } from "@components/common/Headings";
import { useEffect, useState } from "react";

const About = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    setNavBarHeight(localStorage.getItem("navBarHeight"));
  });
  return (
    <>
      <CommonHead title="Park Here: About" />
      <FlexBox
        height={`calc(100vh - ${navBarHeight}px)`}
        overflow="auto"
        padding="2.5rem 0"
        paddingmobile="1.5rem 0"
      >
        <FlexBox
          width="86.67%"
          maxwidth="75rem"
          margin="0 auto"
          gap="5rem"
          gapmobile="2rem"
          wrapmobile="wrap-reverse"
        >
          <FlexBox width="50%" widthmobile="100%" direction="column" gap="1rem">
            <H1 bold>About</H1>
            <FlexBox
              direction="column"
              width="100%"
              gap="0.5rem"
              height="fit-content"
            >
              <P>
                Welcome to our parking system! We are committed to providing
                efficient, convenient, and secure parking solutions for both
                individuals and organizations. With our advanced technology and
                user-friendly interface, we aim to make parking hassle-free and
                stress-free.
              </P>
              <P>
                Our parking system utilizes state-of-the-art technology to
                ensure accurate tracking of parking spots, availability, and
                fees. Customers can easily search for available parking spots,
                reserve their preferred parking space, and make payments online.
                We also offer real-time analytics, enabling you to optimize
                parking operations and increase revenue.
              </P>
              <P>
                We are committed to delivering top-notch customer service and
                support. Our team of experienced professionals is always
                available to help you with any questions or issues you may
                encounter. We value your feedback and are constantly working to
                improve our services and enhance your parking experience.
              </P>
            </FlexBox>
            <H4 bold>
              Thank you for choosing our parking system. We look forward to
              serving you and making parking stress-free and convenient for you.
            </H4>
          </FlexBox>
          <CommonImage
            src={AboutSvg}
            width="50%"
            widthmobile="100%"
            alt="About Visual"
            objectposition="top center"
            height="fit-content"
            quality={1}
            priority={true}
            position="sticky"
            top="0"
            left="0"
            alignself="flex-start"
          />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default About;
