import Head from "next/head";
import { ContactWrapper } from "../components/ContactWrapper";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";

export default function AboutPage() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Codelord | Contact</title>
        </Head>
        <Logo isShort/>
        <Navigation />
        <ContactWrapper />
        <Number />
      </>
    );
  }