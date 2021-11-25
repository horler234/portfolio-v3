import Head from "next/head";
import { FlexWrapper } from "../components/FlexWrapper";
import { HomeWrapper } from "../components/HomeWrapper";
import { ImageSquare, ImageSquareWrapper } from "../components/ImageSquare";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { PageTransition } from "../components/PageTransition";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageTransition>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | Portfolio</title>
      </Head>

      <FlexWrapper>
        <ImageSquareWrapper>
          <ImageSquare />
          <Image
            src="/images/code.png"
            alt="Codelord"
            width={396.61}
            height={521.68}
          />
        </ImageSquareWrapper>
        <HomeWrapper />
        <SocialIcons />
      </FlexWrapper>
    </PageTransition>
  );
}
