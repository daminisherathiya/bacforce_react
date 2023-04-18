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
import { salesforce6BannerHeading } from "@/data/bannerHeading";
import { salesforce6DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce6Faq } from "@/data/faq";
import { salesforce6Meta } from "@/data/meta";
import { salesforce6NumberBackground } from "@/data/numberBackground";
import { salesforce6SideSectionHeading } from "@/data/sideSectionHeading";
import { salesforce6WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import ButtonLink from "@/ui/ButtonLink";
import Carousel from "@/ui/Carousel";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/salesforce-6/banner.png";

const salesforce2 = () => {
  return (
    <>
      <Meta data={salesforce6Meta} />

      <Header />

      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Salesforce Development Company"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
        />
        <BannerHeading
          data={salesforce6BannerHeading}
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
        />
      </Banner>

      <section className="mt-9 space-y-16 px-0">
        <div>
          <SectionHeading additionalClasses="mb-8 px-14 xl:px-64">
            Our Top-Notch{" "}
            <span className="font-bold">Salesforce Implementation Process</span>
          </SectionHeading>
          <SectionDescription>
            <p className="px-14 text-xl xl:px-64">
              We believe in offering best-in-class Salesforce implementation
              services that help our clients to gain a competitive advantage.
              For that, we follow a strict process that helps in achieving
              business objectives.
            </p>
          </SectionDescription>
        </div>
        <div className="[counter-reset:my-counter]">
          <Carousel
            theme="numberBackgroundBox"
            data={salesforce6NumberBackground}
            paginationColor="blue"
          />
        </div>
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          href="#Form"
        >
          Request Free Consultation
        </ButtonLink>
      </section>

      <section className="space-y-16 bg-light-blue">
        <div>
          <SectionHeading additionalClasses="mb-8">
            Why Us As Your
            <span className="font-bold">
              {" "}
              Salesforce Implementation Partner?
            </span>
          </SectionHeading>
          <SectionDescription>
            <p className="mx-auto xl:w-11/12 2xl:w-5/6">
              At Bacforce, we have aligned our Salesforce implementation
              services to be agile, communicative, and organized. We invest as
              much effort as you invest in the Salesforce CRM. We scale and
              support you throughout the transition. Our Salesforce team can
              empower and strengthen your Salesforce investment by successfully
              implementing innovative solutions. Although we implement solutions
              meeting your current needs, we also focus on the evolution of your
              business.
            </p>
          </SectionDescription>
        </div>
        <DescriptionWithIcon
          boxSize="sm:w-1/2 lg:w-1/3"
          iconSize="w-[max(30px,2.500vw)] h-[max(30px,2.500vw)]"
          boxAdditionalClasses="space-y-6 bg-white"
          data={salesforce6DescriptionWithIcon}
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          href="#Form"
        >
          Let’s Define Your Roadmap
        </ButtonLink>
      </section>

      <HireSalesforceDeveloper id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">
            Speak with our Salesforce Implementation Consultant
          </span>{" "}
          and Get a complete Consultation Worth free $1000
        </SectionHeading>
        <div className="grid md:grid-cols-10">
          <div className="space-y-12 md:col-span-8 md:col-start-2">
            <div>
              <h2>Let&apos;s get to know each other with a Free call.</h2>
              <p className="mt-8">
                Share your business requirements and the results you&apos;d want
                to achieve. Our Salesforce consulting experts helps you maximize
                your investment with the right Salesforce solution that
                perfectly fits your business needs.
              </p>
            </div>
            <Form additionalClasses="space-y-4" column="column-3" />
          </div>
        </div>
      </HireSalesforceDeveloper>
      <Success />

      <section className="mt-28 bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce6SideSectionHeading}
          ></SideSectionHeading>
          <Accordion accordionItemsData={salesforce6WeOffer} />
        </div>
      </section>

      <CaseStudy theme="white" />

      <Faq data={salesforce6Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce2;
