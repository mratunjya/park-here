import PrivacyPolicySvg from "@assets/privacy-policy/privacy-policy.svg";
import CommonLayout from "@layout/common/CommonLayout";
import { PRIMARY_400, WHITE } from "@constants/colors";
import CommonImage from "@common/CommonImage";
import { H1, H2, P } from "@common/Headings";
import styled from "styled-components";
import FlexBox from "@common/FlexBox";

const StyledUl = styled.ul`
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const PrivacyPolicy = () => {
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
          <P>We use the information we receive from you to:</P>
          <StyledUl>
            <li>
              <P>
                Provide our products and services you have requested or
                purchased from us
              </P>
            </li>
            <li>
              <P>Personalize and customize our content</P>
            </li>
            <li>
              <P>Make improvements to our website</P>
            </li>
            <li>
              <P>
                Contact you with updates to our website or products and services
              </P>
            </li>
            <li>
              <P>Resolve problems and disputes</P>
            </li>
            <li>
              <P>
                Contact you with marketing and advertising that we believe may
                be of interest to you
              </P>
            </li>
          </StyledUl>

          <H2 bold>Security of Your Personal Information</H2>
          <P>
            We ensure that all information collected will be safely and securely
            stored. We protect your personal information by:
          </P>
          <StyledUl>
            <li>
              <P>Restricting access to personal information</P>
            </li>
            <li>
              <P>
                Maintaining technology products to prevent unauthorized computer
                access
              </P>
            </li>
            <li>
              <P>
                Securely destroying your personal information when it&apos;s no
                longer needed for our record retention purposes
              </P>
            </li>
          </StyledUl>

          <H2 bold>Changes to This Privacy Policy</H2>
          <P>
            We reserve the right to make changes to this Privacy Policy at any
            time. If you have objections to the Privacy Policy, you should not
            access or use the Site.
          </P>

          <H2 bold>Contact Us</H2>
          <P>
            If you have any questions about our Privacy Policy, please contact
            us at privacy@ourcompany.com
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
  );
};

export default PrivacyPolicy;
