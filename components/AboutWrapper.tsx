import styled from "styled-components";
import { DisplayAtMedia } from "./DisplayAtMedia";
import { SectionTitle } from "./SectionTitle";
import { Skillset } from "./SkillSet";
import { BodyText } from "./text/BodyText";

const AboutContainer = styled.div`
  width: 41%;

  @media (max-width: 1000px) {
    width: 86.4%;
    margin-bottom: 130px;
  }
`;

export const AboutWrapper = () => (
  <AboutContainer>
    <SectionTitle>About Me</SectionTitle>
    <BodyText>
      Since beginning my journey as a frontend developer, I have been involved
      in projects for agencies and startups; and collaborated with other
      talented individuals to create digital products for aimed at meeting the
      needs of businesses and consumers.
      <br />
      <br />
      I would describe myself as confident and naturally curious. I am
      constantly working on improving my skill set - one fast, scalable web app
      at a time.
      <br />
      <br />I have a lot of hobbies but coding is my favourite. I enjoy gaming a
      lot too!
    </BodyText>
    <DisplayAtMedia laptop desktop>
      <Skillset />
    </DisplayAtMedia>
  </AboutContainer>
);
