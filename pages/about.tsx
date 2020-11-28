import Head from "next/head";
import { AboutWrapper } from "../components/AboutWrapper";
import { DisplayAtMedia } from "../components/DisplayAtMedia";
import { FlexWrapper } from "../components/FlexWrapper";
import { ImageSquare, ImageSquareWrapper } from "../components/ImageSquare";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { Skillset } from "../components/SkillSet";
import { SocialIcons } from "../components/SocialIcons";

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | Portfolio</title>
      </Head>
      <Logo isShort/>
      <Navigation />
      <FlexWrapper>
        <AboutWrapper />
        <ImageSquareWrapper>
          <ImageSquare>
            <img src="/images/codelord1.png" alt="Codelord" />
          </ImageSquare>
        </ImageSquareWrapper>
        <SocialIcons />
        <DisplayAtMedia mobile tablet>
          <Skillset />
        </DisplayAtMedia>
      </FlexWrapper>
      <Number />
    </>
  );
}
