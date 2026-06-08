import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { Services } from "@/components/services";
import { WhoWeWorkWith } from "@/components/who-we-work-with";
import { HowItWorks } from "@/components/how-it-works";
import { Cta } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Services />
        <WhoWeWorkWith />
        <HowItWorks />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
