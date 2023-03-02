import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import Success from "@/components/Success";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import WeOfferAdditionlComponent from "@/components/WeOfferAdditionlComponent";
import { salesforce2BannerHeading } from "@/data/bannerHeading";
import { salesforce2Carousel } from "@/data/carousel";
import { salesforce2DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce2Faq } from "@/data/faq";
import { salesforce2Features } from "@/data/features";
import { salesforce2Meta } from "@/data/meta";
import { salesforce2WeOffer } from "@/data/weOffer";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import Carousel from "@/ui/Carousel";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import PricingBox from "@/ui/PricingBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import banner from "../../public/images/salesforce-2/banner.png";

const salesforce2 = () => {
  return (
    <>
      <Meta data={salesforce2Meta} />

      <Header />

      <Banner>
        <ImageSection
          divClasses="md:col-span-4 xl:col-span-5 mx-auto md:mx-0"
          imageAlt="Salesforce Development Company"
          imageSrc={banner}
          imageClasses="w-[max(300px,31.250vw)] lg:h-[max(300px,31.250vw)]"
        />
        <BannerHeading
          data={salesforce2BannerHeading}
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
        />
      </Banner>

      <section>
        <SectionHeading additionalClasses="mb-8 text-center">
          Types of Salesforce
          <span className="font-bold"> Applications We Build</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mx-auto mb-16 text-center lg:w-4/5 2xl:w-2/3">
            As a leading Salesforce development company, our primary focus is
            helping businesses around the world to augment their business
            operations and sky-rocket their sales. Being a reliable Salesforce
            Partner we can help you create customized Salesforce applications to
            build everlasting relationships with your customers.
          </p>
        </SectionDescription>
        <div className="grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-gray">
          {salesforce2Features.map((item, index) => (
            <div key={index} className="md:first:pr-12 md:last:pl-12">
              <h3 className="mb-8 font-bold text-light-blue">{item.title}</h3>
              <BulletPointList
                additionalClasses="after:top-3 text-secondary"
                data={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <WeOffer data={salesforce2WeOffer}>
        <WeOfferAdditionlComponent />
      </WeOffer>

      <section id="PlanandPricing" className="scroll-mt-28 text-center">
        <SectionHeading additionalClasses="mb-6 text-6xl">
          <span className="font-bold">Hire Salesforce Developer </span>
          as Per Your Need
        </SectionHeading>
        <div className="lg:grid lg:grid-cols-10">
          <div className="space-y-12 lg:col-span-8 lg:col-start-2">
            <h4>
              Simple &amp; Transparent Pricing | Fully Signed NDA | Code
              Security | Easy Exit Policy
            </h4>
            <PricingBox theme="light-blue" />
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
          Schedule A Developer Interview and
          <br className="hidden lg:block" /> Get 15 Days Risk-Free Trial
        </SectionHeading>
        <div className="grid grid-cols-10">
          <div className="col-span-8 col-start-2 space-y-12">
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
        <SectionHeading additionalClasses="text-center mb-16">
          <span className="font-bold">Proven Experience</span> With Salesforce
          Technologies
        </SectionHeading>
        <DescriptionWithIcon data={salesforce2DescriptionWithIcon} />
      </section>

      <CaseStudy />

      <section className="px-0">
        <SectionHeading additionalClasses="text-center mb-8 px-14 xl:px-64">
          What <span className="font-bold">Our Amazing Clients</span> Say About
          Us
        </SectionHeading>
        <SectionDescription>
          <p className="mb-16 px-14 text-center xl:px-64">
            Leading companies have trusted us with staff augmentation for
            fulfilling their IT needs.
          </p>
        </SectionDescription>
        <Carousel data={salesforce2Carousel} />
      </section>

      <Faq data={salesforce2Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce2;
