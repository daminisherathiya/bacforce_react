import ButtonLink from "@/ui/ButtonLink"


const HireSalesforceDeveloper = () => {
  return (
    <section className="bg-black px-[max(20px,13.542vw)] py-[max(50px,5.208vw)] text-center text-white">
      <h2 className="mb-[max(15px,1.250vw)] text-[max(30px,2.396vw)] font-bold">
        Hire Salesforce Developer
        <span className="font-light"> as Per Your Need</span>
      </h2>
      <div className="space-y-[max(25px,2.083vw)]">
        <p className="text-[max(16px,0.938vw)]">
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="grid grid-cols-2 gap-4 text-[max(16px,0.938vw)]">
              <div className="divide-y border border-white p-[max(20px,1.563vw)]">
                <h4 className="bold"><span className="text-[max(16px,2.083vw)]">$28</span> Hourly (USD)</h4>
                <p className="pt-[max(10px,1.146vw)] mt-[max(10px,1.146vw)]">
                  We’ll provide a fully signed NDA for your Project’s
                  confidentiality
                </p>
              </div>
              <div className="divide-y border border-white p-[max(20px,1.563vw)]">
                <h4 className="bold"><span className="text-[max(16px,2.083vw)]">$4000</span> Monthly (USD)</h4>
                <p className="pt-[max(10px,1.146vw)] mt-[max(10px,1.146vw)]">
                4 to 6 Years of Exp. Salesforce Developer - 160 hours per month
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[max(16px,0.938vw)]">
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </p>
        <ButtonLink additionalClasses="bg-green-blue">SCHEDULE A DEVELOPER INTERVIEW</ButtonLink>
      </div>
    </section>
  );
};

export default HireSalesforceDeveloper;
