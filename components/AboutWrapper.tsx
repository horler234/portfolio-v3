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
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. vero eos et accusamet justo duo dolores et ea rebum. Stet
      clita kasd gubergren, noseatakimatasanctus est Lorem
      <br />
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. vero eos et accusamet justo
    </BodyText>
    <DisplayAtMedia laptop desktop>
      <Skillset />
    </DisplayAtMedia>
  </AboutContainer>
);
