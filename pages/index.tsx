import Head from "next/head";
import { FlexWrapper } from "../components/FlexWrapper";
import { HomeWrapper } from "../components/HomeWrapper";
import { ImageSquare, ImageSquareWrapper } from "../components/ImageSquare";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { SocialIcons } from "../components/SocialIcons";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | Portfolio</title>
      </Head>
      <Logo />
      <Navigation />
      <FlexWrapper>
        <ImageSquareWrapper>
          <ImageSquare>
            <img src="/images/code.png" alt="Codelord" />
          </ImageSquare>
        </ImageSquareWrapper>
        <HomeWrapper />
        <SocialIcons />
      </FlexWrapper>
      <Number />
    </>
  );
}
