// Common components
import CommonImage from "@components/common/CommonImage";
import { H1, H2, P } from "@components/common/Headings";
import CommonHead from "@components/common/CommonHead";
import FlexBox from "@components/common/FlexBox";

// Data
import CommonLayout from "@layout/common/CommonLayout";
import { PRIMARY_400, WHITE } from "@constants/colors";
import PrivacyPolicySvg from "@assets/privacy-policy/privacy-policy.svg";

const HelpFaqComponent = () => {
  return (
    <>
      <CommonHead title="Park Here: Privacy Policy" />
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
            <H1 bold>Privacy Policy</H1>
            <P>
              At our company, we are committed to protecting your privacy as a
              customer and an online visitor to our website. We use the
              information we collect about you to maximize the services that we
              provide to you. We respect the privacy and confidentiality of the
              information provided by you and adhere to the Australian Privacy
              Principles. Please read our privacy policy below carefully.
            </P>

            <H2 bold>Information We Collect From You</H2>

            <P>
              In the course of your visits to our website or use of our products
              and services, we may obtain the following information about you:
              name, company name, email address, telephone number, credit card
              details, billing address, geographic location, IP address, survey
              responses, support queries, and any other personally identifying
              information that you voluntarily submit to us (collectively,
              “Personal Information”).
            </P>

            <H2 bold>How We Use Your Information</H2>

            <P>
              We use your Personal Information to provide you with the products
              and services you have requested, to communicate with you about
              those products and services, to improve our products and services,
              to provide you with information about our products and services,
              and to provide you with information about third-party products and
              services that we believe may be of interest to you. We may also
              use your Personal Information to contact you about your account
              with us, to respond to your inquiries, to provide you with
              information about our products and services, and to provide you
              with information about third-party products and services that we
              believe may be of interest to you. We may also use your Personal
              Information to contact you about your account with us, to respond
              to your inquiries, to provide you with information about our
              products and services, and to provide you with information about
              third-party products and services that we believe may be of
              interest to you.
            </P>

            <H2 bold>How We Share Your Information</H2>

            <P>
              We do not sell, rent, or lease our customer lists to third
              parties. We may share your Personal Information with our
              subsidiaries and affiliates, and with third parties who provide
              services to us or on our behalf, including without limitation,
              companies that provide data processing, fulfillment, marketing,
              and other services to us or on our behalf. We may also share your
              Personal Information with third parties in the following
              circumstances:
            </P>

            <ul
              style={{
                paddingLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>
                We may share your Personal Information with third parties who
                provide services to us or on our behalf, including without
                limitation, companies that provide data processing, fulfillment,
                marketing, and other services to us or on our behalf.
              </li>
              <li>
                We may share your Personal Information with third parties in the
                following circumstances:
              </li>
              <li>
                We may share your Personal Information with third parties who
                provide services to us or on our behalf, including without
                limitation, companies that provide data processing, fulfillment,
                marketing, and other services to us or on our behalf.
              </li>
              <li>
                We may share your Personal Information with third parties in the
                following circumstances:
              </li>
              <li>
                We may share your Personal Information with third parties who
                provide services to us or on our behalf, including without
                limitation, companies that provide data processing, fulfillment,
                marketing, and other services to us or on our behalf.
              </li>
              <li>
                We may share your Personal Information with third parties in the
                following circumstances:
              </li>
            </ul>

            <H2 bold>How We Protect Your Information</H2>

            <P>
              We take reasonable precautions to protect your Personal
              Information from loss, misuse, and unauthorized access,
              disclosure, alteration, or destruction. We use a variety of
              security technologies and procedures to help protect your Personal
              Information from unauthorized access, use, or disclosure. For
              example, we store the Personal Information you provide on computer
              systems with limited access that are located in controlled
              facilities. When we transmit sensitive Personal Information (such
              as a credit card number) over the Internet, we protect it through
              the use of encryption, such as the Secure Socket Layer (SSL)
              protocol.
            </P>

            <H2 bold>How We Use Cookies</H2>

            <P>
              We use “cookies” to help you personalize your online experience. A
              cookie is a text file that is placed on your hard disk by a web
              page server. Cookies cannot be used to run programs or deliver
              viruses to your computer. Cookies are uniquely assigned to you,
              and can only be read by a web server in the domain that issued the
              cookie to you. One of the primary purposes of cookies is to
              provide a convenience feature to save you time. The purpose of a
              cookie is to tell the Web server that you have returned to a
              specific page. For example, if you personalize our pages, or
              register with our site or services, a cookie helps us to recall
              your specific information on subsequent visits. This simplifies
              the process of recording your personal information, such as
              billing addresses, shipping addresses, and so on. When you return
              to the same website, the information you previously provided can
              be retrieved, so you can easily use the features that you
              customized. You have the ability to accept or decline cookies.
              Most Web browsers automatically accept cookies, but you can
              usually modify your browser setting to decline cookies if you
              prefer. If you choose to decline cookies, you may not be able to
              fully experience the interactive features of the site or services
              you visit.
            </P>
          </FlexBox>
          <CommonImage
            src={PrivacyPolicySvg}
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
