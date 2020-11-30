import styled from "styled-components";
import { DisplayAtMedia } from "./DisplayAtMedia";
import { SectionTitle } from "./SectionTitle";
import { Skillset } from "./SkillSet";
import { BodyText } from "./text/BodyText";

const AboutContainer = styled.div`
  width: 41%;

  @media (max-width: 768px) {
    width: 86.4%;
    margin-bottom: 130px;
  }
`;

export const AboutWrapper = () => (
  <AboutContainer>
    <SectionTitle>About Me</SectionTitle>
    <BodyText>
      Since beginning my journey as a frontend developer, I've done remote work
      for agencies, consulted for startups, and collaborated with talented
      people to create digital products for both business and consumer use. I'm
      quietly confident, naturally curious, and perpetually working on improving
      my skills one fast, scalable web app at a time.
      <br />
      <br />
      People say I'm funny but I think I'm just fun. I have a lot of hobbies but
      coding is my favorite. I enjoy gaming a lot too!
    </BodyText>
    <DisplayAtMedia laptop desktop>
      <Skillset />
    </DisplayAtMedia>
  </AboutContainer>
);
