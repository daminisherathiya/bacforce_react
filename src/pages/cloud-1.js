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
import { cloud1BannerHeading } from "@/data/bannerHeading";
import { cloud1Features } from "@/data/bulletPointList";
import {
  cloud1DescriptionWithIcon,
  cloud2DescriptionWithIcon,
} from "@/data/descriptionWithIcon";
import { cloud1Faq } from "@/data/faq";
import { cloud1Meta } from "@/data/meta";
import { cloud1SideSectionHeading } from "@/data/sideSectionHeading";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/cloud-1/banner.png";
import challanges from "../../public/images/cloud-1/challanges.jpg";

const cloud1 = () => {
  return (
    <>
      <Meta data={cloud1Meta} />
      <Header />
      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Hire Salesforce Marketing Cloud Developer"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
        />
        <BannerHeading
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
          data={cloud1BannerHeading}
        ></BannerHeading>
      </Banner>

      <section className="space-y-16">
        <SectionHeading>
          Challenges Re-Solved By
          <span className="font-bold">
            {" "}
            Our Salesforce Marketing Cloud Developer
          </span>
        </SectionHeading>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <ImageSection
            divClasses="mx-auto"
            imageAlt="Challenges Re-Solved By Our Salesforce Marketing Cloud Developer"
            imageSrc={challanges}
            imageClasses="w-[max(280px,36.354vw)]"
          />
          <BulletPointList
            additionalClasses="after:top-1/2 after:-translate-y-2/4"
            data={cloud1Features.challenges_re_solved}
          />
        </div>
      </section>
      <section id="TechnicalStack" className="scroll-mt-28 bg-light-blue">
        <SectionHeading additionalClasses="mb-8">
          Services Offered By
          <span className="font-bold"> Our Marketing Cloud Developers</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto mb-16 text-xl lg:w-4/5 2xl:w-3/4">
            Hire SFMC developers with versatile skills aligning with your
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
          href="#Form"
        >
          Plan & Pricing
        </ButtonLink>
      </section>
      <section id="PlanandPricing" className="scroll-mt-28 bg-primary">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold">Hire Salesforce Developer </span>
          as Per Your Need
        </SectionHeading>
        <div className="lg:grid lg:grid-cols-10">
          <div className="space-y-12 lg:col-span-8 lg:col-start-2">
            <h4 className="text-white">
              Simple &amp; Transparent Pricing | Fully Signed NDA | Code
              Security | Easy Exit Policy
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
          <br className="hidden lg:block" /> Salesforce Marketing Cloud
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
          <span className="font-bold">Our Expertise</span>
          With Marketing Cloud Products
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
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <SideSectionHeading
            data={cloud1SideSectionHeading}
          ></SideSectionHeading>
          <DescriptionWithIcon
            boxSize="md:w-[43%]"
            iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
            boxAdditionalClasses="space-y-4 bg-light-blue min-h-[max(100px,11.042vw)]"
            data={cloud1DescriptionWithIcon}
          />
        </div>
      </section>
      <Faq data={cloud1Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default cloud1;
