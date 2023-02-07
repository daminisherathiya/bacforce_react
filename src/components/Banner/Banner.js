import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";
const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water px-[max(20px,13.542vw)] py-[max(50px,8.594vw)]">
      <div className="grid grid-cols-12 gap-10">
        <div className="space-y-[max(10px,1.250vw)] col-span-6">
          <h1 className="text-dark-blue font-black text-[max(40px,3.125vw)]">Hire Certified Salesforce Developers</h1>
          <p className="text-[max(18px,1.250vw)]">
            Our certified Salesforce consultants are backed by 11+ years of
            experience in SFDC consulting, integration, customization, and
            support.
          </p>
          <ul className="style-hyphen space-y-[max(10px,1.250vw)]">
            {salesforce_developers.banner.map((feature) => (
              <li key={feature} className="relative pl-7">
                {feature}
              </li>
            ))}
            <li className="relative pl-7">Flexible engagement models</li>
          </ul>
        </div>
        <BannerForm />
      </div>
    </section>
  );
};

export default Banner;
