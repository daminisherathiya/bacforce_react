import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";
const Banner = () => {
  return (
    <section className="bg-light-blue pt-60 pb-40" id="Form">
      <div className="grid gap-16 md:grid-cols-9 md:gap-5">
        <div className="flex flex-col justify-center space-y-8 md:col-span-5 lg:pr-24">
          <h1 className="text-6xl text-dark">
            Hire Certified
            <span className="font-bold"> Salesforce Developers</span>
          </h1>
          <h4>
            Our certified Salesforce consultants are backed by 11+ years of
            experience in SFDC consulting, integration, customization, and
            support.
          </h4>
          <ul className="space-y-6">
            {salesforce_developers.banner.map((feature) => (
              <li
                key={feature}
                className="after:content[''] relative pl-7 after:absolute after:left-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-2/4 after:rounded after:bg-primary after:bg-contain after:bg-center after:bg-no-repeat"
              >
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
