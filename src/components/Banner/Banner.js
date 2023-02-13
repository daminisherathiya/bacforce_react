import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";
const Banner = () => {
  return (
    <section className="bg-light-blue pt-60 pb-40" id="Form">
      <div className="grid gap-16 md:grid-cols-9 md:gap-5">
        <div className="flex flex-col justify-center space-y-6 md:col-span-5 lg:pr-24">
          <h1 className="text-6xl font-black text-dark">
            <span className="font-light">Hire Certified </span>
            Salesforce Developers
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
