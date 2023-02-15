import ButtonLink from "@/ui/ButtonLink";
// todo background
const HireSalesforceDeveloper = () => {
  return (
    <section
      className="bg-black bg-cover bg-top pb-64 text-center text-white"
      id="PlanandPricing"
    >
      <h1 className="mb-6">
        <span className="font-bold">Hire Salesforce Developer </span>
        as Per Your Need
      </h1>
      <div className="space-y-12">
        <h4>
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </h4>
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="divide-y border border-white p-8">
                <h4 className="bold">
                  <span className="text-4xl">$28 </span>
                  Hourly (USD)
                </h4>
                <p className="mt-5 pt-5">
                  We’ll provide a fully signed NDA for your Project’s
                  confidentiality
                </p>
              </div>
              <div className="divide-y border border-white p-8">
                <h4 className="bold">
                  <span className="text-4xl">$4000 </span>Monthly (USD)
                </h4>
                <p className="mt-5 pt-5">
                  4+ to 6 Years of Exp. Salesforce Developer - 160 hours per
                  month
                </p>
              </div>
            </div>
            <p className="mt-12">
              Share your business requirements and the results you&apos;d want
              to achieve. Our Salesforce consulting experts helps you maximize
              your investment with the right Salesforce solution that perfectly
              fits your business needs.
            </p>
          </div>
        </div>
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          href="#Form"
        >
          Schedule A Developer Interview
        </ButtonLink>
      </div>
    </section>
  );
};

export default HireSalesforceDeveloper;
