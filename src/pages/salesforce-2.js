import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import Header from "@/components/Header/PPC/Header";
import Meta from "@/components/Meta";
import { salesforce2BannerHeading } from "@/data/bannerHeading";
import { salesforce2Meta } from "@/data/meta";
import ImageSection from "@/ui/ImageSection";
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
    </>
  );
};

export default salesforce2;
