import ButtonLink from "@/ui/ButtonLink";
import SectionHeading from "@/ui/SectionHeading";

// todo background
const HireSalesforceDeveloper = () => {
  return (
    <section
      className="scroll-mt-28 bg-black bg-cover bg-top pb-64 text-center text-white"
      id="PlanandPricing"
    >
      <SectionHeading additionalClasses="mb-6 text-6xl !text-white">
        <span className="font-bold">Hire Salesforce Developer </span>
        as Per Your Need
      </SectionHeading>
      <div className="lg:grid lg:grid-cols-10">
        <div className="lg:col-span-8 lg:col-start-2 space-y-12">
          <h4>
            Simple & Transparent Pricing | Fully Signed NDA | Code Security |
            Easy Exit Policy
          </h4>
          <div className="grid grid-cols-12">
            <div className="col-span-10 col-start-2 2xl:col-start-3 2xl:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="divide-y border border-white py-8">
                  <h4 className="bold px-9">
                    <span className="text-4xl">$28 </span>
                    Hourly (USD)
                  </h4>
                  <div className="mt-5 px-9 pt-5">
                    <p className="opacity-70">
                      We’ll provide a fully signed NDA for your Project’s
                      confidentiality
                    </p>
                  </div>
                </div>
                <div className="divide-y border border-white py-8">
                  <h4 className="bold px-9">
                    <span className="text-4xl">$4000 </span>Monthly (USD)
                  </h4>
                  <div className="mt-5 px-9 pt-5">
                    <p className="opacity-70">
                      4+ Years of Exp. Salesforce Developer - 160 hours per
                      month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Share your business requirements and the results you&apos;d want to
            achieve. Our Salesforce consulting experts helps you maximize your
            investment with the right Salesforce solution that perfectly fits
            your business needs.
          </p>
          <ButtonLink
            additionalClasses="bg-secondary hover:bg-secondary-hover"
            href="#Form"
          >
            Schedule A Developer Interview
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default HireSalesforceDeveloper;
