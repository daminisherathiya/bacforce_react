import Banner from "@/components/Banner/Banner";
import { BannerHeading } from "@/components/Banner/BannerHeading";
import Header from "@/components/Header/PPC/Header";
import Meta from "@/components/Meta";
import { salesforce3BannerHeading } from "@/data/bannerHeading";
import { salesforce3Meta } from "@/data/meta";
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
          <div className="grid xs:grid-cols-2 gap-6 w-full">
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
    </>
  );
};

export default salesforce3;
