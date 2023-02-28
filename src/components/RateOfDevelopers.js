const RateOfDevelopers = ({ children, theme }) => {
  return (
    <div className="lg:grid lg:grid-cols-10">
      <div className="space-y-12 lg:col-span-8 lg:col-start-2">
        <h4>
          Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy
          Exit Policy
        </h4>
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2 2xl:col-span-8 2xl:col-start-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className={`divide-y border py-8 ${
                  theme === "light-blue"
                    ? `divide-light-blue border-light-blue`
                    : ""
                }`}
              >
                <h4
                  className={`px-9 font-bold ${theme ? `text-${theme}` : ""}`}
                >
                  <span className="text-4xl">$28 </span>
                  Hourly (USD)
                </h4>
                <div className="mt-5 px-9 pt-5">
                  <p className={theme ? "" : "opacity-70"}>
                    We’ll provide a fully signed NDA for your Project’s
                    confidentiality
                  </p>
                </div>
              </div>
              <div
                className={`divide-y border py-8 ${
                  theme === "light-blue"
                    ? `divide-light-blue border-light-blue`
                    : ""
                }`}
              >
                <h4
                  className={`px-9 font-bold ${
                    theme === "light-blue" ? `text-${theme}` : ""
                  }`}
                >
                  <span className="text-4xl">$4000 </span>Monthly (USD)
                </h4>
                <div className="mt-5 px-9 pt-5">
                  <p className={theme ? "" : "opacity-70"}>
                    4+ Years of Exp. Salesforce Developer - 160 hours per month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RateOfDevelopers;
