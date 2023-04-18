import Banner from "@/components/Banner/Banner";
import BannerForm from "@/components/Banner/BannerForm";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import SideSectionHeading from "@/components/SideSectionHeading";
import Success from "@/components/Success";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import WeHelp from "@/components/WeHelp";
import WeOfferAdditionlComponent from "@/components/WeOfferAdditionlComponent";
import { salesforce1BannerHeading } from "@/data/bannerHeading";
import { salesforce1Features } from "@/data/bulletPointList";
import { salesforce1Faq } from "@/data/faq";
import { salesforce1Meta } from "@/data/meta";
import { salesforce1NumberBackground } from "@/data/numberBackground";
import { salesforce1SideSectionHeading } from "@/data/sideSectionHeading";
import { salesforce1TechnicalExpertise } from "@/data/TechnicalExpertise";
import { salesforce1WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import ImageSection from "@/ui/ImageSection";
import NumberBackgroundBox from "@/ui/NumberBackgroundBox";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import challanges from "../../public/images/salesforce-1/challanges.jpg";

// todo: add context variables
const salesforce1 = () => {
  return (
    <>
      <Meta data={salesforce1Meta} />

      <Header></Header>

      <Banner id="Form">
        <BannerHeading
          data={salesforce1BannerHeading}
          additionalClasses="md:col-span-6 md:pr-28"
        >
          <BulletPointList
            additionalClasses="after:top-1/2 after:-translate-y-2/4"
            data={salesforce1Features.banner}
          />
        </BannerHeading>
        <BannerForm />
      </Banner>

      <section className="space-y-16">
        <SectionHeading>
          Challenges Re-Solved by
          <span className="font-bold">
            {" "}
            Our Professional Salesforce Developer
          </span>
        </SectionHeading>
        <div className="grid gap-20 md:grid-cols-2">
          <ImageSection
            divClasses="mx-auto"
            imageAlt="Challenges Re-Solved by Our Professional Salesforce Developer"
            imageSrc={challanges}
            imageClasses="w-[max(280px,34.167vw)]"
          />
          <BulletPointList
            additionalClasses="after:top-1/2 after:-translate-y-2/4"
            data={salesforce1Features.challenges_re_solved}
          />
        </div>
      </section>

      <section className="bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading data={salesforce1SideSectionHeading}>
            <WeOfferAdditionlComponent />
          </SideSectionHeading>
          <Accordion accordionItemsData={salesforce1WeOffer} />
        </div>
      </section>

      <HireSalesforceDeveloper id="PlanandPricing">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">Hire Salesforce Developer </span>
          as Per Your Need
        </SectionHeading>
        <div className="lg:grid lg:grid-cols-10">
          <div className="space-y-12 lg:col-span-8 lg:col-start-2">
            <h4>
              Simple &amp; Transparent Pricing{" "}
              <span className="opacity-30">|</span> Fully Signed NDA{" "}
              <span className="opacity-30">|</span> Code Security{" "}
              <span className="opacity-30">|</span> Easy Exit Policy
            </h4>
            <PricingBox />
            <p>
              Share your business requirements and the results you&apos;d want
              to achieve. Our Salesforce consulting experts helps you maximize
              your investment with the right Salesforce solution that perfectly
              fits your business needs.
            </p>
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Schedule A Developer Interview
            </ButtonLink>
          </div>
        </div>
      </HireSalesforceDeveloper>
      <Success />

      <section className="scroll-mt-28" id="TechnicalStack">
        <SectionHeading>
          Technical Expertise of
          <span className="font-bold"> Our Salesforce Developers</span>
        </SectionHeading>
        <TechnicalExpertise data={salesforce1TechnicalExpertise} />
      </section>

      <CaseStudy />

      <section>
        <div>
          <SectionHeading additionalClasses="mb-8">
            Process of
            <span className="font-bold"> Hiring Salesforce Developer</span>
          </SectionHeading>
          <SectionDescription>
            <p>
              We always aim to offer the best Salesforce services for that, we
              make sure that you will get the perfect team of Salesforce
              professionals.
            </p>
          </SectionDescription>
        </div>
        <div className="[counter-reset:my-counter] grid text-left mt-16 gap-4 md:grid-cols-2">
          {salesforce1NumberBackground.map((item, index) => (
            <NumberBackgroundBox
              key={index}
              data={item}
            />
          ))}
        </div>
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Share Your Requirements
        </ButtonLink>
      </section>

      <Faq data={salesforce1Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce1;
