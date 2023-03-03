import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import { salesforce3BannerHeading } from "@/data/bannerHeading";
import { salesforce3DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce3Faq } from "@/data/faq";
import { salesforce3Features } from "@/data/features";
import { salesforce3Meta } from "@/data/meta";
import { salesforce3NumberBackground } from "@/data/numberBackground";
import { salesforce3WeOffer } from "@/data/weOffer";
import BulletPointList from "@/ui/BulletPointList";
import ButtonLink from "@/ui/ButtonLink";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
import NumberBackgroundBox from "@/ui/NumberBackgroundBox";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import benefitsSideImg from "../../public/images/salesforce-3/benefits-sideImg.jpg";

const salesforce3 = () => {
  return (
    <>
      <Meta data={salesforce3Meta} />
      <Header />
      <Banner
        cols="10"
        additionalClasses="bg-[url('/images/salesforce-3/banner.jpg')] bg-no-repeat text-white bg-cover bg-[center_top_max(64px,6.458vw)]"
      >
        <div className="mx-auto md:col-span-5 md:mx-0 lg:pr-6 xl:col-span-5">
          <div className="grid w-full gap-6 xs:grid-cols-2">
            <div className="space-y-6 xs:mb-20">
              <div className="space-y-3 border border-white p-10">
                <h2 className="text-6xl font-bold">11+</h2>
                <h3>Years of CRM experience</h3>
              </div>
              <div className="space-y-3 border border-white p-10">
                <h2 className="text-6xl font-bold">100+</h2>
                <h3>Salesforce Projects Delivered</h3>
              </div>
            </div>
            <div className="space-y-6 xs:mt-20">
              <div className="space-y-3 border border-white p-10">
                <h2 className="text-6xl font-bold">80+</h2>
                <h3>Salesforce Certified Developers</h3>
              </div>
              <div className="space-y-3 border border-white p-10">
                <h2 className="text-6xl font-bold">24*7</h2>
                <h3>Technical Support Available</h3>
              </div>
            </div>
          </div>
        </div>
        <BannerHeading
          additionalClasses="md:col-span-5 xl:col-span-5 md:pl-16"
          headingColor="text-white"
          data={salesforce3BannerHeading}
        ></BannerHeading>
      </Banner>

      <WeOffer data={salesforce3WeOffer}></WeOffer>

      <section className="text-center">
        <SectionHeading additionalClasses="mb-8">
          Custom Salesforce
          <span className="font-bold"> CRM Support Services</span>
        </SectionHeading>
        <SectionDescription>
          <p className="mb-16">
            Our certified Salesforce developers and administrators offer
            cutting-edge support and maintenance services for all your
            Salesforce products.
          </p>
        </SectionDescription>
        <DescriptionWithIcon iconSize="[max(30px,2.500vw)]" data={salesforce3DescriptionWithIcon} />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Book A Free Consultation
        </ButtonLink>
      </section>

      <HireSalesforceDeveloper id="Form">
        <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
          <span className="font-bold lg:block">
            Book Your Free 30-Minute Call
          </span>{" "}
          With Our Salesforce Consultant
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

      <section>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <ImageSection
            divClasses="mx-auto"
            imageAlt="Benefits With BacForce"
            imageSrc={benefitsSideImg}
            imageClasses="h-[max(280px,33.333vw)] w-[max(280px,33.333vw)]"
          />
          <div className="flex flex-col justify-center">
            <SectionHeading additionalClasses="mb-16">
              <span className="font-bold">Benefits</span> With BacForce
            </SectionHeading>
            <BulletPointList
              additionalClasses="after:top-1/2 after:-translate-y-2/4"
              data={salesforce3Features}
            />
          </div>
        </div>
      </section>


      <section className="bg-light-blue">
        <div className="bg-white py-16 px-16 text-center shadow-blue lg:px-36">
          <SectionHeading additionalClasses="mb-8 font-bold !text-light-blue">
            Want to Get the Health of Your Salesforce Checked?
          </SectionHeading>
          <p>
            Get your Salesforce CRM reviewed top-to-bottom with Salesforce audit
            from BacForce. We will check whether your Salesforce processes,
            records, and user roles are functioning properly and eliminate any
            deficiencies to help you make the most of your CRM.
          </p>
          <ButtonLink
            additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
            href="#Form"
          >
            Request Salesforce Audit
          </ButtonLink>
        </div>
      </section>
      <section className="text-center">
        <SectionHeading additionalClasses="mb-16">
          Our <span className="font-bold">Process</span>
        </SectionHeading>
        <NumberBackgroundBox
          additionalClasses="gap-8 md:grid-cols-2 lg:grid-cols-3"
          data={salesforce3NumberBackground}
        />
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
          href="#Form"
        >
          Discuss Your Project with Us
        </ButtonLink>
      </section>
      <Faq data={salesforce3Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce3;
