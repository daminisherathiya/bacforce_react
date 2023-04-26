import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import SideSectionHeading from "@/components/SideSectionHeading";
import Success from "@/components/Success";
import WeHelp from "@/components/WeHelp";
import { salesforce4BannerHeading } from "@/data/bannerHeading";
import { salesforce4DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce4Faq } from "@/data/faq";
import { salesforce4Meta } from "@/data/meta";
import { salesforce4SideSectionHeading } from "@/data/sideSectionHeading";
import { salesforce4WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/salesforce-4/banner.png";
import salesforceCertifiedConsultants from "../../public/images/salesforce-4/salesforceCertifiedConsultants.png";

const salesforce2 = () => {
  return (
    <>
      <Meta data={salesforce4Meta} />

      <Header hiddenLinkIds={[4]} />

      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Salesforce Development Company"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
        />
        <BannerHeading
          data={salesforce4BannerHeading}
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
        />
      </Banner>

      <section>
        <div>
          <SectionHeading additionalClasses="mb-16">
            Choose the Best
            <span className="font-bold">
              {" "}
              Salesforce Consulting Service Option
            </span>
          </SectionHeading>
        </div>
        <DescriptionWithIcon
          iconSize="w-[max(30px,2.500vw)] w-[max(30px,2.500vw)]"
          data={salesforce4DescriptionWithIcon.ChooseBestService}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 border border-gray"
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Connect with Our Salesforce Consultant Now
        </ButtonLink>
      </section>

      <section className="bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce4SideSectionHeading}
          ></SideSectionHeading>
          <Accordion accordionItemsData={salesforce4WeOffer} />
        </div>
      </section>

      <section id="PlanandPricing" className="scroll-mt-28 bg-black bg-cover bg-top">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">Hire Salesforce Developer </span>
          as Per Your Need
        </SectionHeading>
        <div className="lg:grid lg:grid-cols-10">
          <div className="space-y-12 lg:col-span-8 lg:col-start-2">
            <h4 className="text-white">
              Simple &amp; Transparent Pricing{" "}
              <span className="opacity-30">|</span> Fully Signed NDA{" "}
              <span className="opacity-30">|</span> Code Security{" "}
              <span className="opacity-30">|</span> Easy Exit Policy
            </h4>
            <PricingBox heightSmall={true} />
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Schedule A Developer Interview
            </ButtonLink>
          </div>
        </div>
      </section>
      <HireSalesforceDeveloper bgColor="bg-light-blue" id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl">
          <span className="font-bold">Get a Strategic Guidance from Our</span>
          <br className="hidden lg:block" /> Salesforce Commerce Cloud
          Consultant
        </SectionHeading>
        <div className="grid md:grid-cols-10">
          <div className="space-y-12 text-primary md:col-span-8 md:col-start-2">
            <div>
              <h2>Let&apos;s get to know each other with a Free call.</h2>
              <p className="mt-8">
                Share your business requirements and the results you&apos;d want to
                achieve. Our Salesforce consulting experts helps you maximize
                your investment with the right Salesforce solution that
                perfectly fits your business needs.
              </p>
            </div>
            <Form
              border="none"
              additionalClasses="space-y-4"
              column="column-3"
            />
          </div>
        </div>
      </HireSalesforceDeveloper>
      <Success />

      <section id="TechnicalStack" className="scroll-mt-28">
        <SectionHeading additionalClasses="mb-16">
          <span className="font-bold">Expertise We Are Offering</span> Across
          Various Salesforce Products
        </SectionHeading>
        <DescriptionWithIcon
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={salesforce4DescriptionWithIcon.ourExpertise}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 border border-gray"
        />
      </section>

      <section className="bg-light-blue">
        <div>
          <SectionHeading additionalClasses="mb-16">
            What You Can Expect From
            <span className="font-bold">
              {" "}
              Our Salesforce Certified Consultants
            </span>
          </SectionHeading>
        </div>
        <div className="flex flex-wrap gap-11 md:flex-nowrap">
          <div className="shrink-0">
            <ImageSection
              divClasses="mx-auto md:mx-0 sticky top-48"
              imageAlt="Salesforce Certified Consultants"
              imageSrc={salesforceCertifiedConsultants}
              imageClasses="w-[max(280px,33.333vw)]"
            />
          </div>
          <DescriptionWithIcon
            iconSize="w-[max(30px,2.500vw)] w-[max(30px,2.500vw)]"
            data={salesforce4DescriptionWithIcon.SalesforceCertifiedConsultants}
            boxSize="py-1.5 px-0 first:pt-0"
            boxAdditionalClasses="space-y-4 bg-white"
            additionalClassesForHeading="!font-bold"
          />
        </div>
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Talk to Our Salesforce Experts
        </ButtonLink>
      </section>

      <CaseStudy theme="white" />

      <Faq data={salesforce4Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce2;
