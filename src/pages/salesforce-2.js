import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import Meta from "@/components/Meta";
import Success from "@/components/Success";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import WeOfferAdditionlComponent from "@/components/WeOfferAdditionlComponent";
import { salesforce2BannerHeading } from "@/data/bannerHeading";
import { salesforce2DescriptionWithIcon } from "@/data/descriptionWithIcon";
import { salesforce2Faq } from "@/data/faq";
import { salesforce2Features } from "@/data/features";
import { salesforce2Meta } from "@/data/meta";
import { salesforce2WeOffer } from "@/data/weOffer";
import BulletPointList from "@/ui/BulletPointList";
import DescriptionWithIcon from "@/ui/DescriptionWithIcon";
import ImageSection from "@/ui/ImageSection";
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
        <div className="grid grid-cols-2 divide-x divide-gray">
          {salesforce2Features.map((item, index) => (
            <div key={index} className="first:pr-12 last:pl-12">
              <h3 className="mb-8 font-bold text-light-blue">{item.title}</h3>
              <BulletPointList
                additionalClasses="after:top-3"
                data={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <WeOffer data={salesforce2WeOffer}>
        <WeOfferAdditionlComponent />
      </WeOffer>

      <HireSalesforceDeveloper />
      <Success />

      <section>
        <SectionHeading additionalClasses="text-center mb-16">
          <span className="font-bold">Proven Experience</span> With Salesforce
          Technologies
        </SectionHeading>
        <DescriptionWithIcon data={salesforce2DescriptionWithIcon} />
      </section>

      <CaseStudy />
      <Faq data={salesforce2Faq} />
      <WeHelp />
      <Footer />
    </>
  );
};

export default salesforce2;
