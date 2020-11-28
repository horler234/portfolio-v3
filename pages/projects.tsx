import Head from "next/head";
import { FlexWrapper } from "../components/FlexWrapper";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { Project } from "../components/project";
import { ProjectGrid } from "../components/project/ProjectGrid";
import { ProjectList } from "../components/project/ProjectList";
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
          <Project />
          <SocialIcons notCentered/>
        </FlexWrapper>
        <Number />
      </>
    );
  }