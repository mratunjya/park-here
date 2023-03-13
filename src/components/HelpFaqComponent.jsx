// Common components
import CommonImage from "@components/common/CommonImage";
import { H1, H2, P } from "@components/common/Headings";
import CommonHead from "@components/common/CommonHead";
import FlexBox from "@components/common/FlexBox";

// Data
import CommonLayout from "@layout/common/CommonLayout";
import { PRIMARY_400, WHITE } from "@constants/colors";
import HelpFaqSvg from "@assets/help-faq/help-faq.svg";

const HelpFaqComponent = () => {
  return (
    <>
      <CommonHead title="Park Here: Help & FAQ" />
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
          >
            <H1 bold>Help & FAQ</H1>
            <H2 bold>What is the purpose of this website?</H2>
            <P>
              The purpose of this website is to provide a parking system for
              users to find available parking spots and for parking attendants
              to manage and monitor parking spots.
            </P>

            <H2 bold>How do I sign up for an account?</H2>
            <P>
              To sign up for an account, click on the &quote;Sign Up&quote;
              button on the homepage and fill in your details.
            </P>

            <H2 bold>How do I book a parking spot?</H2>
            <P>
              To book a parking spot, click on the &quote;Book Now&quote; button
              on the homepage and select the desired date and time for parking.
            </P>

            <H2 bold>How do I pay for my parking spot?</H2>
            <P>
              You can pay for your parking spot using the payment gateway
              provided on the website.
            </P>

            <H2 bold>How do I cancel my booking?</H2>
            <P>
              To cancel your booking, go to the &quote;My Bookings&quote;
              section of your account and select the booking you wish to cancel.
            </P>

            <H2 bold>What happens if I am late for my booking?</H2>
            <P>
              If you are late for your booking, your parking spot may be given
              to someone else.
            </P>

            <H2 bold>How do I contact customer support?</H2>
            <P>
              You can contact customer support by going to the &quote;Contact
              Us&quote; page and filling out the contact form or by emailing us
              at support@parkingsystem.com.
            </P>
          </FlexBox>
          <CommonImage
            src={HelpFaqSvg}
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

export default HelpFaqComponent;
