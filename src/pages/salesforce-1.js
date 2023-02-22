import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Success from "@/components/Success";
import CaseStudy from "@/components/CaseStudy";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import Meta from "@/components/Meta";
import { salesforce1Meta } from "@/data/meta";
import BannerForm from "@/components/Banner/BannerForm";
import BulletPointList from "@/ui/BulletPointList";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import { salesforce1Features } from "@/data/features";
import { salesforce1BannerHeading } from "@/data/bannerHeading";
import challanges from "../../public/images/salesforce-developmentcompany/challanges.jpg";
import SectionHeading from "@/ui/SectionHeading";
import ImageSection from "@/ui/ImageSection";
import WeOfferAdditionlComponent from "@/components/WeOfferAdditionlComponent";
import { salesforce_developers } from "@/data/weOffer";
import { salesforce1TechnicalExpertise } from "@/data/TechnicalExpertise";
import { salesforce1NumberBackground } from "@/data/numberBackground";
import SectionDescription from "@/ui/SectionDescription";
import NumberBackgroundBox from "@/ui/NumberBackgroundBox";
import ButtonLink from "@/ui/ButtonLink";

// todo: add context variables
const index = () => {
  return (
    <>
      <Head>
        <Meta data={salesforce1Meta} />
      </Head>

      <Header></Header>

      <Banner id="Form">
        <BannerHeading data={salesforce1BannerHeading}>
          <BulletPointList data={salesforce1Features.banner} />
        </BannerHeading>
        <BannerForm />
      </Banner>

      <section>
        <SectionHeading additionalClasses="text-center mb-16">
          Challenges Re-Solved by
          <span className="font-bold">
            {" "}
            Our Professional Salesforce Developer
          </span>
        </SectionHeading>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <ImageSection
            divClasses="mx-auto"
            imageAlt="Challenges Re-Solved by Our Professional Salesforce Developer"
            imageSrc={challanges}
            imageClasses="h-[max(198px,24.167vw)] w-[max(280px,34.167vw)]"
          />
          <BulletPointList data={salesforce1Features.challenges_re_solved} />
        </div>
      </section>

      <WeOffer data={salesforce_developers}>
        <WeOfferAdditionlComponent />
      </WeOffer>

      <HireSalesforceDeveloper />
      <Success />

      <section className="text-center" id="TechnicalStack">
        <SectionHeading additionalClasses="mb-16">
          Technical Expertise of
          <span className="font-bold"> Our Salesforce Developers</span>
        </SectionHeading>
        <TechnicalExpertise data={salesforce1TechnicalExpertise} />
      </section>

      <CaseStudy />

      <section className="space-y-16 text-center">
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
        <NumberBackgroundBox data={salesforce1NumberBackground} />
        <ButtonLink additionalClasses="bg-secondary hover:bg-secondary-hover">
          Share Your Requirements
        </ButtonLink>
      </section>

      <Faq />
      <WeHelp />
      <Footer />
    </>
  );
};

export default index;
