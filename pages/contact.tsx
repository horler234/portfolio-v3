import Head from "next/head";
import { ContactWrapper } from "../components/ContactWrapper";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/navigation";
import { Number } from "../components/Number";
import { PageTransition } from "../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Codelord | Contact</title>
      </Head>
      <ContactWrapper />
    </PageTransition>
  );
}
