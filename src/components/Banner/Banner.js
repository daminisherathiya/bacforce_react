import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";
const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water pt-60 pb-40">
      <div className="grid md:grid-cols-9 gap-16 md:gap-5">
        <div className="md:col-span-5 space-y-6 lg:pr-24 flex flex-col justify-center">
          <h1 className="text-6xl font-black text-dark">
            Hire Certified Salesforce Developers
          </h1>
          <h4>
            Our certified Salesforce consultants are backed by 11+ years of
            experience in SFDC consulting, integration, customization, and
            support.
          </h4>
          <ul className="style-hyphen space-y-6">
            {salesforce_developers.banner.map((feature) => (
              <li key={feature} className="relative pl-7">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <BannerForm />
      </div>
    </section>
  );
};

export default Banner;
