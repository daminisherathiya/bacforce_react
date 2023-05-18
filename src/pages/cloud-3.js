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
import { cloud3BannerHeading } from "@/data/bannerHeading";
import { cloud3Features } from "@/data/bulletPointList";
import { cloud3DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { cloud2Faq } from "@/data/faq";
import { cloud3Meta } from "@/data/meta";
import {
  cloud2SideSectionHeading,
  cloud3SideSectionHeading,
} from "@/data/sideSectionHeading";
import { cloud3WeOffer } from "@/data/weOffer";
import Accordion from "@/ui/Accordion";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/cloud-3/banner.png";
import challanges from "../../public/images/cloud-3/challanges.jpg";
const cloud2 = () => {
  return (
    <>
      <Meta data={cloud3Meta} />
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
          data={cloud3BannerHeading}
        ></BannerHeading>
      </Banner>

      <section className="space-y-16">
        <SectionHeading>
          Challenges Re-Solved By
          <span className="font-bold">
            {" "}
            Our Salesforce Sales Cloud Developer
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
            data={cloud3Features.challenges_re_solved}
          />
        </div>
      </section>
      <section className="bg-light-blue">
        <div className="grid gap-20 md:grid-cols-2">
          <SideSectionHeading
            data={cloud3SideSectionHeading}
          ></SideSectionHeading>
          <Accordion accordionItemsData={cloud3WeOffer} />
        </div>
      </section>
      <section id="PlanandPricing" className="scroll-mt-28">
        <div className="relative -mb-80 bg-light-blue py-24">
          <SectionHeading additionalClasses="mb-6 text-6xl px-14">
            <span className="font-bold lg:block">Hire SFSC Developer </span>
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
      <HireSalesforceDeveloper additionalClasses="-scroll-mt-28" id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white pt-52">
          <span className="font-bold">Get a Strategic Guidance from Our</span>
          <br className="hidden lg:block" /> Salesforce Sales Cloud Consultant
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
          Salesforce Sales Cloud to
          <span className="font-bold"> Achieve Sales Success</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto mb-16 text-xl lg:w-4/5 2xl:w-3/4">
            Take your sales and revenue to the next level with Salesforce Sales
            Cloud
          </p>
        </SectionDescription>
        <DescriptionWithIcon
          additionalClassesForHeading="text-lg"
          iconSize="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]"
          data={cloud3DescriptionWithIcon.challanges}
          boxSize="sm:w-1/2 lg:w-1/3"
          boxAdditionalClasses="space-y-6 border border-gray"
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Talk To Our Expert
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
            data={cloud3DescriptionWithIcon.chooseBacForce}
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
