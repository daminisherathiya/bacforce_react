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
import { cloud2BannerHeading } from "@/data/bannerHeading";
import { cloud2Features } from "@/data/bulletPointList";
import { cloud2DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { cloud2Faq } from "@/data/faq";
import { cloud2Meta } from "@/data/meta";
import { cloud2SideSectionHeading } from "@/data/sideSectionHeading";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/cloud-2/banner.png";
import challanges from "../../public/images/cloud-2/challanges.jpg";
const cloud2 = () => {
  return (
    <>
      <Meta data={cloud2Meta} />
      <Header />
      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Hire Salesforce Marketing Cloud Developer"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
          priority={true}
        />
        <BannerHeading
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
          data={cloud2BannerHeading}
        ></BannerHeading>
      </Banner>

      <section className="space-y-16">
        <SectionHeading>
          Challenges Re-Solved By
          <span className="font-bold">
            {" "}
            Our Salesforce Commerce Cloud Developer
          </span>
        </SectionHeading>
        <div className="grid gap-20 md:grid-cols-2">
          <ImageSection
            divClasses="m-auto"
            imageAlt="Challenges Re-Solved By Our Salesforce Marketing Cloud Developer"
            imageSrc={challanges}
            imageClasses="w-[max(280px,35.365vw)]"
          />
          <BulletPointList
            additionalClasses="after:top-3"
            data={cloud2Features.challenges_re_solved}
          />
        </div>
      </section>
      <section className="scroll-mt-28 bg-light-blue">
        <SectionHeading additionalClasses="mb-8">
          Services Offered By
          <span className="font-bold"> Our Commerce Cloud Developers</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto mb-16 text-xl lg:w-4/5 2xl:w-3/4">
            Hire SFCC developers with versatile skills aligning with your
            business requirements. Our Salesforce developers build secure,
            scalable, and dynamic enterprise-grade, cost-effective Salesforce
            Solutions. We have pre-vetted Salesforce developers who excelled in
            all the products of Salesforce CRM.
          </p>
        </SectionDescription>
        <DescriptionWithIcon
          additionalClassesForHeading="text-lg"
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={cloud2DescriptionWithIcon.challanges}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 bg-white"
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#PlanandPricing"
        >
          Plan &amp; Pricing
        </ButtonLink>
      </section>
      <section id="PlanandPricing" className="scroll-mt-28 bg-primary">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">Hire SFCC Developer </span>
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
            <PricingBox theme="white" />
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Schedule A Developer Interview
            </ButtonLink>
          </div>
        </div>
      </section>
      <HireSalesforceDeveloper id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">Get a Strategic Guidance from Our</span>
          <br className="hidden lg:block" /> Salesforce Commerce Cloud
          Consultant
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
      <section id="TechnicalStack" className="scroll-mt-28">
        <SectionHeading additionalClasses="mb-16">
          <span className="font-bold">Our Expertise </span>
          In Salesforce Commerce Cloud
        </SectionHeading>
        <DescriptionWithIcon
          additionalClassesForHeading="text-lg"
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={cloud2DescriptionWithIcon.ourExpertise}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 border border-gray"
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Speak With Our Cloud Consultants
        </ButtonLink>
      </section>

      <CaseStudy />

      <section>
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={cloud2SideSectionHeading}
          ></SideSectionHeading>
          <DescriptionWithIcon
            boxSize="md:w-[43%]"
            iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
            boxAdditionalClasses="space-y-4 bg-light-blue min-h-[max(100px,11.042vw)]"
            data={cloud2DescriptionWithIcon.chooseBacForce}
          />
        </div>
      </section>
      <Faq data={cloud2Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default cloud2;
