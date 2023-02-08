import ButtonLink from "@/ui/ButtonLink";
import { salesforce_developers } from "@/data/TechnicalExpertise";

const TechnicalExpertise = () => {
  return (
    <section className="px-[max(20px,13.542vw)] pb-[max(50px,5.208vw)] text-center">
      <h2 className="mb-[max(35px,3.125vw)] font-bold text-dark">
        <span className="font-light">Technical Expertise of </span>
        Our Salesforce Developers
      </h2>
      <div className="space-y-[max(10px,0.833vw)]">
        {salesforce_developers.map((data) => (
          <div key={data.key} className="grid grid-cols-12">
            <div className="col-span-3 flex items-center justify-center bg-primary p-3">
              <h4 className="text-white">{data.key}</h4>
            </div>
            <div className="col-span-9 border border-gray p-[max(35px,2.500vw)]">
              <p className="text-left">{data.value}</p>
            </div>
          </div>
        ))}
      </div>
      <ButtonLink additionalClasses="bg-secondary">
        SCHEDULE A DEVELOPER INTERVIEW
      </ButtonLink>
    </section>
  );
};

export default TechnicalExpertise;
