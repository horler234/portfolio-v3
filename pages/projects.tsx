import Head from "next/head";
import { FlexWrapper } from "../components/FlexWrapper";
import { PageTransition } from "../components/PageTransition";
import { Project } from "../components/project";
import { SocialIcons } from "../components/SocialIcons";

export default function AboutPage() {
  return (
    <PageTransition>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | Projects</title>
      </Head>

      <FlexWrapper>
        <Project />
        <SocialIcons notCentered />
      </FlexWrapper>
    </PageTransition>
  );
}
