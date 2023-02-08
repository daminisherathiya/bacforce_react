import ButtonLink from "@/ui/ButtonLink";
import Image from "next/image";
import case_study_1 from "../../public/images/case-study/case-study-1.jpg";
import case_study_2 from "../../public/images/case-study/case-study-2.jpg";
import case_study_3 from "../../public/images/case-study/case-study-3.jpg";
const SuccessStories = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water text-center">
      <div className="mb-16 flex-wrap justify-center lg:flex">
        <h2 className="mb-6 font-bold text-dark lg:w-3/4">
          <span className="font-light">Our Salesforce </span>
          Success Stories
        </h2>
        <p className="lg:w-3/4">
          Over the past 10+ years, check out these awesome case studies for
          Salesforce applications we have built for our valuable clients to
          solve real-life problems and help them to overcome start-up
          challenges.
        </p>
      </div>
      <div className="grid gap-5 text-left md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-12">
            <div className="bg-white p-12 text-base md:col-span-7">
              <p className="mb-2 font-bold text-light-blue">HEALTH CARE</p>
              <h3 className="mb-5 font-semibold text-secondary">
                Healthcare Solution
              </h3>
              <p>
                Healthcare group of companies with issues that substantially
                lacked basic insights on lead conversion. Our SF developers made
                standard sales dashboards, the ability to view customized
                options, verified exact lead sources & campaign association of
                online leads to scan it easily.
              </p>
            </div>
            <div className="md:col-span-5">
              <Image
                src={case_study_1}
                alt="Healthcare Solution"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="row-span-2">
          <div className="bg-white p-12 text-base">
            <p className="mb-2 font-bold text-light-blue">REALESTATE</p>
            <h3 className="mb-5 font-semibold text-secondary">
              Real Estate Solution
            </h3>
            <p>
              A Reputed Real Estate Service Provider in San Francisco chose
              Bacancy for their Salesforce project. Our SF developers provided
              solutions like a unique set of integrations and custom development
              addressed to varied requirements, maximized their CRM, and
              unlocked the full power of their investment from Salesforce
              features.
            </p>
          </div>
          <div>
            <Image
              src={case_study_2}
              alt="Real Estate Solution"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-12">
            <div className="bg-white p-12 text-base md:col-span-7">
              <p className="mb-2 font-bold text-light-blue">FINANCE</p>
              <h3 className="mb-5 font-semibold text-secondary">
                Salesforce Lighting
              </h3>
              <p>
                Our Canada-based client, peer-to-peer lending & alternative
                investment marketplace provides an opportunity to lend money to
                businesses. We successfully advanced the existing underwriting
                process by implementing the Salesforce Lightning console.
              </p>
            </div>
            <div className="md:col-span-5">
              <Image
                src={case_study_3}
                alt="Salesforce Lighting"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonLink additionalClasses="bg-secondary mt-12">
        REQUEST FOR QUOTATION
      </ButtonLink>
    </section>
  );
};

export default SuccessStories;
