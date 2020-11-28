import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";
import { Form } from "./form";
import { SectionTitle } from "./SectionTitle";
import { SocialIcons } from "./SocialIcons";
import { BodyText } from "./text/BodyText";
import { H1 } from "./text/H1";

const ContactTextWrapper = styled.div`
  width: 31%;
  h1 {
    margin-top: 20px;
  }
  @media ${(props) => props.theme.media.tablet} {
    h1 {
      margin-top: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 86.4%;
    h1 {
        font-size: 17px;
    }
    p {
        max-width: 100%;
    }
    /* margin-bottom: 130px; */
  }
`;

const TitleWrapper = styled(SectionTitle)`
  margin-left: 7%;
  @media (max-width: 540px) {
    margin-left: 10%;
    margin-top: 0;
  }
`;

const NumberWrapper = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
      margin-top: 35px;
  }
`;
export const ContactWrapper = () => (
  <>
    <TitleWrapper>Contact Me</TitleWrapper>
    <FlexWrapper>
      <ContactTextWrapper>
        <BodyText maxWidth="301px">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diamnonumyeirmod temporinvidunt ut labore et dolormagna
        </BodyText>
        <H1>shuaibabdulmuqit@gmail.com</H1>
        <NumberWrapper>
          <BodyText maxWidth="301px">
            Lorem ipsum dolor sit amet, consetetur
          </BodyText>
          <H1>+234 9083 09 1266</H1>
        </NumberWrapper>
      </ContactTextWrapper>

      <Form />
      <SocialIcons />
    </FlexWrapper>
  </>
);
