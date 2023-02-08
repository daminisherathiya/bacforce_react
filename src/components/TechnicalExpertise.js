import ButtonLink from "@/ui/ButtonLink";
import { salesforce_developers } from "@/data/TechnicalExpertise";

const TechnicalExpertise = () => {
  return (
    <section className="text-center">
      <h2 className="font-bold text-dark text-center mb-16">
        <span className="font-light">Technical Expertise of </span>
        Our Salesforce Developers
      </h2>
      <div className="space-y-4">
        {salesforce_developers.map((data) => (
          <div key={data.key} className="grid md:grid-cols-12">
            <div className="md:col-span-3 flex items-center justify-center bg-primary p-5">
              <h3 className="text-white">{data.key}</h3>
            </div>
            <div className="md:col-span-9 border border-gray p-12 text-left">
              <p>{data.value}</p>
            </div>
          </div>
        ))}
      </div>
      <ButtonLink additionalClasses="bg-secondary mt-12">
        SCHEDULE A DEVELOPER INTERVIEW
      </ButtonLink>
    </section>
  );
};

export default TechnicalExpertise;
