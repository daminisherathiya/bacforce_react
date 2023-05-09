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
import { salesforce5BannerHeading } from "@/data/bannerHeading";
import { salesforce5Features } from "@/data/bulletPointList";
import { salesforce5DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce4Faq } from "@/data/faq";
import { salesforce5Meta } from "@/data/meta";
import { salesforce5SideSectionHeading } from "@/data/sideSectionHeading";
import { salesforce5Tab } from "@/data/Tab";
import { salesforce5WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import Tabs from "@/ui/Tabs";
import banner from "../../public/images/salesforce-5/banner.png";
import challanges from "../../public/images/salesforce-5/challanges.jpg";

const salesforce2 = () => {
  return (
    <>
      <Meta data={salesforce5Meta} />

      <Header />

      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Salesforce Development Company"
          imageSrc={banner}
          imageClasses="w-[max(280px,31.250vw)] h-[max(280px,31.250vw)]"
        />
        <BannerHeading
          data={salesforce5BannerHeading}
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
        />
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
            imageClasses="w-[max(280px,35.365vw)]"
          />
          <BulletPointList
            additionalClasses="after:top-3"
            data={salesforce5Features.challenges_re_solved}
          />
        </div>
      </section>

      <section className="scroll-mt-28 bg-light-blue">
        <SectionHeading additionalClasses="mb-16 lg:mx-auto lg:w-4/5">
          With <span className="font-bold">Our Experience, Skills</span>, and{" "}
          <span className="font-bold">Technology</span>, We Help You With All
          Kinds of <span className="font-bold">Salesforce Integrations</span>
        </SectionHeading>
        <DescriptionWithIcon
          additionalClassesForHeading="text-lg"
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={salesforce5DescriptionWithIcon.challanges}
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

      <section id="PlanandPricing" className="scroll-mt-28">
        <div className="relative -mb-80 bg-light-blue py-24">
          <SectionHeading additionalClasses="mb-6 text-6xl px-14">
            <span className="font-bold">Hire Salesforce Developer </span>
            As Per Your Need
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
        <Tabs
          data={salesforce5Tab.map((item) => ({
            title: item.tabName,
            description: (
              <>
                <h3 className="mb-7 font-bold">{item.description.heading}</h3>
                <p className="mb-10 text-xl text-secondary">
                  {item.description.paragraph}
                </p>
                <div className="flex flex-wrap items-center space-x-10">
                  {item.description.images.map((image, index) => (
                    <ImageSection
                      divClasses="py-2"
                      key={index}
                      imageAlt={image.alt}
                      imageSrc={image.logoImg}
                      imageClasses={image.size}
                    />
                  ))}
                </div>
              </>
            ),
          }))}
        />
      </section>
      <section className="bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce5SideSectionHeading.weOffer}
          ></SideSectionHeading>
          <Accordion accordionItemsData={salesforce5WeOffer} />
        </div>
      </section>

      <CaseStudy theme="white" />

      <section>
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={salesforce5SideSectionHeading.chooseBacForce}
          ></SideSectionHeading>
          <DescriptionWithIcon
            boxSize="md:w-[43%]"
            iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
            boxAdditionalClasses="space-y-4 bg-light-blue min-h-[max(100px,11.042vw)]"
            data={salesforce5DescriptionWithIcon.chooseBacForce}
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
