import ButtonLink from "@/ui/ButtonLink";
// todo background
const HireSalesforceDeveloper = () => {
  return (
    <section className="bg-blue bg-top bg-cover text-center text-white pb-64">
      <h2 className="mb-6 font-bold">
        Hire Salesforce Developer
        <span className="font-light"> as Per Your Need</span>
      </h2>
      <div className="space-y-12">
        <p>
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="divide-y border border-white p-8">
                <h3 className="bold">
                  $28 <span className="text-base">Hourly (USD)</span>
                </h3>
                <p className="mt-5 pt-5">
                  We’ll provide a fully signed NDA for your Project’s
                  confidentiality
                </p>
              </div>
              <div className="divide-y border border-white p-8">
                <h3 className="bold">
                  $4000 <span className="text-base">Monthly (USD)</span>
                </h3>
                <p className="mt-5 pt-5">
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
        <ButtonLink additionalClasses="bg-primary" href="#contactForm">
          SCHEDULE A DEVELOPER INTERVIEW
        </ButtonLink>
      </div>
    </section>
  );
};

export default HireSalesforceDeveloper;
