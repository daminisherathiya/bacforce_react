import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import Header from "@/components/Header/PPC/Header";
import Meta from "@/components/Meta";
import { cloud1BannerHeading } from "@/data/bannerHeading";
import { cloud1Meta } from "@/data/meta";
import ImageSection from "@/ui/ImageSection";
import banner from "../../public/images/cloud-1/banner.png";

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
          imageClasses="w-[max(300px,31.250vw)] lg:h-[max(300px,31.250vw)]"
        />
        <BannerHeading
          additionalClasses="md:col-span-7 xl:col-span-6 md:pl-16"
          data={cloud1BannerHeading}
        ></BannerHeading>
      </Banner>
    </>
  );
};

export default cloud1;
