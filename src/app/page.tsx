import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <Results />
        <HowItWorks />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
