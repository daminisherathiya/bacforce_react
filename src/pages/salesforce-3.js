import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import Success from "@/components/Success";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import { salesforce3BannerHeading } from "@/data/bannerHeading";
import {
  salesforce3Features,
  supportAndMaintenanceServices,
} from "@/data/bulletPointList";
import { salesforce3DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce3Faq } from "@/data/faq";
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
        cols="md:grid-cols-10"
        additionalClasses="bg-[url('/landing/images/salesforce-3/banner.jpg')] bg-no-repeat text-white bg-cover bg-[center_top_max(64px,6.458vw)]"
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

      <section className="space-y-16">
        <div>
          <SectionHeading additionalClasses="mb-10">
            Leverage Our Salesforce
            <span className="font-bold"> Support and Maintenance Services</span>
          </SectionHeading>
          <SectionDescription>
            <p className="mb-6 lg:mx-auto lg:w-5/6">
              How well your Salesforce solution is executed and implemented is
              irrelevant, it always requires additional functionalities and
              timely updates. Bacforce offers Salesforce Support Services to
              ensure your Salesforce system is error-free, scalable, and equally
              productive.
            </p>
            <p>
              We broke down our Salesforce support services into three
              categories, making them easily accessible and affordable for all
              businesses.
            </p>
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {supportAndMaintenanceServices.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between border border-t-8 border-gray border-t-secondary p-10 hover:border-primary"
            >
              <div>
                <h3 className="mb-8 font-bold">{item.title}</h3>
                <h2 className="mb-2 font-bold">
                  {item.price}
                  <span className="text-xl"> Hourly (USD)</span>
                </h2>
                <p className="text-gray">8 hrs/day and 160 hrs/mo.</p>
                <div className="mt-14">
                  {item.servicesTitle && (
                    <p className="mb-6 font-bold text-left">{item.servicesTitle}</p>
                  )}
                  <BulletPointList
                    additionalClasses="after:top-3 after:!bg-secondary group-hover:after:!bg-primary"
                    data={item.services}
                  />
                </div>
              </div>
              <ButtonLink
                additionalClasses="bg-secondary group-hover:bg-primary-hover mt-16"
                href="#Form"
              >
                {item.button}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>
      <WeOffer data={salesforce3WeOffer}></WeOffer>

      <section>
        <div>
          <SectionHeading additionalClasses="mb-8">
            Custom Salesforce
            <span className="font-bold"> CRM Support Services</span>
          </SectionHeading>
          <SectionDescription>
            <p className="text-xl mx-auto lg:w-4/5 2xl:w-3/4">
              Our certified Salesforce developers and administrators offer
              cutting-edge support and maintenance services for all your
              Salesforce products.
            </p>
          </SectionDescription>
        </div>
        <DescriptionWithIcon
          iconSize="w-[max(30px,2.500vw)] w-[max(30px,2.500vw)]"
          data={salesforce3DescriptionWithIcon}
        />
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
        <div className="grid md:grid-cols-10">
          <div className="md:col-span-8 md:col-start-2 space-y-12">
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

      <section>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <ImageSection
            divClasses="mx-auto"
            imageAlt="Benefits With BacForce"
            imageSrc={benefitsSideImg}
            imageClasses="h-[max(280px,33.333vw)] w-[max(280px,33.333vw)]"
          />
          <div className="flex flex-col justify-center space-y-16 text-left">
            <SectionHeading>
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
        <div className="bg-white p-16 shadow-blue lg:px-36">
          <SectionHeading additionalClasses="mb-8 font-bold !text-light-blue">
            Want to Get the Health of Your Salesforce Checked?
          </SectionHeading>
          <SectionDescription>
            Get your Salesforce CRM reviewed top-to-bottom with Salesforce audit
            from BacForce. We will check whether your Salesforce processes,
            records, and user roles are functioning properly and eliminate any
            deficiencies to help you make the most of your CRM.
          </SectionDescription>
          <ButtonLink
            additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
            href="#Form"
          >
            Request Salesforce Audit
          </ButtonLink>
        </div>
      </section>

      <section>
        <SectionHeading>
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
