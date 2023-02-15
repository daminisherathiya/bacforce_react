const { default: ButtonLink } = require("@/ui/ButtonLink");

const ProcessofHiring = () => {
  return (
    <section className="step-col-1 space-y-16 text-center">
      <div>
        <h2 className="mb-8 text-dark ">
          Process of
          <span className="font-bold"> Hiring Salesforce Developer</span>
        </h2>
        <p>
          We always aim to offer the best Salesforce services for that, we make
          sure that you will get the perfect team of Salesforce professionals.
        </p>
      </div>
      <div className="grid gap-4 text-left md:grid-cols-2">
        <div className="services-cell relative overflow-hidden border border-gray p-10">
          <h3 className="mb-6 font-semibold text-light-blue">
            Let us know your Business Requirements
          </h3>
          <p>
            We will be glad to hear your business requirements to offer you
            highly skilled talent that completely matches your needs and help
            you achieve your business goals in a quick turnaround time.
          </p>
        </div>
        <div className="services-cell relative overflow-hidden border border-gray p-10">
          <h3 className="mb-6 font-semibold text-light-blue">
            Get a call from our experts
          </h3>
          <p>
            We guarantee seamless data transfer from any conventional process to
            Salesforce. Before migration, we properly prepare all data per the
            Salesforce ecosystem and double-check its accuracy.
          </p>
        </div>
        <div className="services-cell relative overflow-hidden border border-gray p-10">
          <h3 className="mb-6 font-semibold text-light-blue">
            Choose Your Hiring Model
          </h3>
          <p>
            To keep the hiring process easy, we follow a simple hiring model.
            Our model involves every category with complete and transparent
            pricing that helps you to make insightful decisions easily. You can
            hire certified salesforce developers on an hourly and monthly basis
            from us.
          </p>
        </div>
        <div className="services-cell relative overflow-hidden border border-gray p-10">
          <h3 className="mb-6 font-semibold text-light-blue">
            Select, Pay and Let’s Start
          </h3>
          <p>
            Choose the model as per your business requirements, complete the
            payment process with 100% confidentiality and security and start
            your project with us.
          </p>
        </div>
      </div>
      <ButtonLink additionalClasses="bg-secondary hover:bg-secondary-hover">
        Share Your Requirements
      </ButtonLink>
    </section>
  );
};

export default ProcessofHiring;
