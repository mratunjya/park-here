import CommonLayout from "@layout/common/CommonLayout";
import { PRIMARY_400, WHITE } from "@constants/colors";
import CommonImage from "@common/CommonImage";
import { H1, H4, P } from "@common/Headings";
import { ContactData } from "@meta/contact";
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

const ContactComponent = () => {
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
          <H1 bold>{ContactData.heading}</H1>
          <P>{ContactData.paragraphs[1]}</P>
          <FlexBox
            direction="column"
            width="100%"
            gap="0.75rem"
            gapmobile="0.5rem"
            height="fit-content"
          >
            <H4 bold>{ContactData.subHeadings[1]}</H4>
            <P>{ContactData.contactInfo.p}</P>
            <StyledUl>
              <li>
                <P>
                  <strong>Email:</strong> {ContactData.contactInfo.email}
                </P>
              </li>
              <li>
                <P>
                  <strong>Phone:</strong> {ContactData.contactInfo.phone}
                </P>
              </li>
              <li>
                <P>
                  <strong>Address:</strong> {ContactData.contactInfo.address}
                </P>
              </li>
            </StyledUl>
          </FlexBox>
          <FlexBox
            direction="column"
            width="100%"
            gap="0.75rem"
            gapmobile="0.5rem"
            height="fit-content"
          >
            <H4 bold>{ContactData.subHeadings[2]}</H4>
            <P>{ContactData.paragraphs[2]}</P>
          </FlexBox>
          <FlexBox
            direction="column"
            width="100%"
            gap="0.75rem"
            gapmobile="0.5rem"
            height="fit-content"
          >
            <H4 bold>{ContactData.subHeadings[3]}</H4>
            <P>{ContactData.paragraphs[3]}</P>
          </FlexBox>
          <H4 bold>{ContactData.contactForm.heading}</H4>
        </FlexBox>
        <CommonImage
          src={ContactData.image}
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

export default ContactComponent;
