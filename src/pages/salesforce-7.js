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
import { salesforce7BannerHeading } from "@/data/bannerHeading";
import { salesforce7Features } from "@/data/bulletPointList";
import { salesforce7DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce4Faq } from "@/data/faq";
import { salesforce7Meta } from "@/data/meta";
import { salesforce7SideSectionHeading } from "@/data/sideSectionHeading";
import { salesforce5Tab } from "@/data/Tab";
import { salesforce7WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import Tabs from "@/ui/Tabs";
import banner from "../../public/images/salesforce-7/banner.png";
import bg_img from "../../public/images/salesforce-7/bg-img.jpg";

const salesforce2 = () => {
  return (
    <>
      <Meta data={salesforce7Meta} />

      <Header hiddenLinkIds={[4]} />

      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Salesforce Development Company"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
        />
        <BannerHeading
          data={salesforce7BannerHeading}
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
        />
      </Banner>

      <section className="space-y-16">
        <div>
          <SectionHeading additionalClasses="mb-8">
            Maximize Your Salesforce Investment with
            <span className="font-bold">
              {" "}
              Our Salesforce Customization Services
            </span>
          </SectionHeading>
          <SectionDescription>
            <p className="mx-auto w-11/12 text-xl">
              Our advanced Salesforce customization services comprehensively
              cover the entire Salesforce platform. Get fully customized
              Salesforce CRM architectures and interfaces to maintain excellent
              client relationships and efficient business management.
            </p>
          </SectionDescription>
        </div>
      </section>
      <ImageSection
        divClasses=""
        imageAlt="Salesforce Development Company"
        imageSrc={bg_img}
        imageClasses=""
      />
      <section className="relative z-0 -mt-72">
        <div className="bg-white p-12 shadow">
          <div className="grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-gray">
            {salesforce7Features.map((item, index) => (
              <div key={index} className="md:first:pr-12 md:last:pl-12">
                <h3 className="mb-8 text-left font-bold text-light-blue">
                  {item.title}
                </h3>
                <BulletPointList
                  additionalClasses="after:top-3 text-secondary"
                  data={item.description}
                />
              </div>
            ))}
          </div>
          <ButtonLink
            additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
            href="#Form"
          >
            Customize Your Salesforce Now
          </ButtonLink>
        </div>
      </section>

      <section className="bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce7SideSectionHeading}
          ></SideSectionHeading>
          <Accordion accordionItemsData={salesforce7WeOffer} />
        </div>
      </section>

      <section id="PlanandPricing" className="scroll-mt-28">
        <div className="relative -mb-80 bg-light-blue py-24">
          <SectionHeading additionalClasses="mb-6 text-6xl px-14">
            <span className="font-bold">Hire Salesforce Developer </span>
            For Your Custom Project
          </SectionHeading>
          <div className="lg:grid lg:grid-cols-10">
            <div className="space-y-12 lg:col-span-8 lg:col-start-2">
              <h4 className="px-14 text-gray">
                Simple &amp; Transparent Pricing{" "}
                <span className="opacity-30">|</span> Fully Signed NDA{" "}
                <span className="opacity-30">|</span> Code Security{" "}
                <span className="opacity-30">|</span> Easy Exit Policy
              </h4>
              <PricingBox theme="white-blue" heightSmall={true} />
            </div>
          </div>
        </div>
      </section>
      <HireSalesforceDeveloper id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white pt-52">
          <span className="font-bold">Get a Strategic Guidance from Our </span>
          <br className="hidden lg:block" /> Salesforce Consultant
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

      <section className="mt-28 scroll-mt-28 bg-light-blue">
        <SectionHeading additionalClasses="mb-8">
          Salesforce Products{" "}
          <span className="font-bold">We Can Help You Customize</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto lg:w-7/12 mb-16">
            Our Salesforce experts can help you solve complex business
            challenges by improving your Salesforce platform with these
            customized Salesforce products.
          </p>
        </SectionDescription>
        <DescriptionWithIcon
          additionalClassesForHeading="text-lg"
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={salesforce7DescriptionWithIcon}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 bg-white flex"
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Talk to Our Salesforce Experts
        </ButtonLink>
      </section>
      
      <CaseStudy theme="white" />

      <section id="TechnicalStack" className="scroll-mt-28">
        <SectionHeading additionalClasses="mb-8">
          Explore Our Horizon of
          <span className="font-bold"> Salesforce Integration Services</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto mb-16 lg:w-3/4">
            Access our exemplary Salesforce integration services backed by a
            team of Salesforce integration developers highly skilled and
            proficient in every integration scenario.
          </p>
        </SectionDescription>
        <Tabs data={salesforce5Tab} />
      </section>

      

      <section>
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce7SideSectionHeading}
          ></SideSectionHeading>
          <DescriptionWithIcon
            boxSize="md:w-[43%]"
            iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
            boxAdditionalClasses="space-y-4 bg-light-blue min-h-[max(100px,11.042vw)]"
            data={salesforce7DescriptionWithIcon}
          />
        </div>
      </section>

      <Faq data={salesforce4Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce2;
