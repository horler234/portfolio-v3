import Head from "next/head";
import { AboutWrapper } from "../components/AboutWrapper";
import { DisplayAtMedia } from "../components/DisplayAtMedia";
import { FlexWrapper } from "../components/FlexWrapper";
import { ImageSquare, ImageSquareWrapper } from "../components/ImageSquare";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { PageTransition } from "../components/PageTransition";
import { Skillset } from "../components/SkillSet";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | About</title>
      </Head>
      <FlexWrapper>
        <AboutWrapper />
        <ImageSquareWrapper>
          <ImageSquare />
          <Image
            src="/images/codelord1.png"
            alt="Codelord"
            width={396.61}
            height={521.68}
          />
        </ImageSquareWrapper>
        <SocialIcons />
        <DisplayAtMedia mobile tablet>
          <Skillset />
        </DisplayAtMedia>
      </FlexWrapper>
    </PageTransition>
  );
}
