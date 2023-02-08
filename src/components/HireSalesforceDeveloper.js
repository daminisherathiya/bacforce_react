import ButtonLink from "@/ui/ButtonLink";
// todo background
const HireSalesforceDeveloper = () => {
  return (
    <section className="bg-blue bg-top bg-cover px-[max(20px,13.542vw)] pt-[max(50px,5.208vw)] pb-[max(50px,10.417vw)] text-center text-white">
      <h2 className="mb-[max(15px,1.250vw)] font-bold">
        Hire Salesforce Developer
        <span className="font-light"> as Per Your Need</span>
      </h2>
      <div className="space-y-[max(25px,2.083vw)]">
        <p>
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="divide-y border border-white p-[max(20px,1.563vw)]">
                <h3 className="bold">
                  $28 <span className="text-base">Hourly (USD)</span>
                </h3>
                <p className="mt-[max(10px,1.146vw)] pt-[max(10px,1.146vw)]">
                  We’ll provide a fully signed NDA for your Project’s
                  confidentiality
                </p>
              </div>
              <div className="divide-y border border-white p-[max(20px,1.563vw)]">
                <h3 className="bold">
                  $4000 <span className="text-base">Monthly (USD)</span>
                </h3>
                <p className="mt-[max(10px,1.146vw)] pt-[max(10px,1.146vw)]">
                  4 to 6 Years of Exp. Salesforce Developer - 160 hours per
                  month
                </p>
              </div>
            </div>
          </div>
        </div>
        <p>
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </p>
        <ButtonLink additionalClasses="bg-primary">
          SCHEDULE A DEVELOPER INTERVIEW
        </ButtonLink>
      </div>
    </section>
  );
};

export default HireSalesforceDeveloper;
