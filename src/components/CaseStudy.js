import { bacforceYears } from "@/data/constant";
import ButtonLink from "@/ui/ButtonLink";
import ImageSection from "@/ui/ImageSection";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";
import case_study_1 from "../../public/images/case-study/case-study-1.jpg";
import case_study_2 from "../../public/images/case-study/case-study-2.jpg";
import case_study_3 from "../../public/images/case-study/case-study-3.jpg";

const caseStudies = {
  healthcareSolution: {
    subTitle: "HEALTH CARE",
    title: "Healthcare Solution",
    description:
      "Healthcare group of companies with issues that substantially lacked basic insights on lead conversion. Our SF developers made standard sales dashboards, the ability to view customized options, verified exact lead sources & campaign association of online leads to scan it easily.",
    imageSrc: case_study_1,
  },
  salesforceLighting: {
    subTitle: "FINANCE",
    title: "Salesforce Lighting",
    description:
      "Our Canada-based client, peer-to-peer lending & alternative investment marketplace provides an opportunity to lend money to businesses. We successfully advanced the existing underwriting process by implementing the Salesforce Lightning console.",
    imageSrc: case_study_3,
  },
  realEstateSolution: {
    subTitle: "REALESTATE",
    title: "Real Estate Solution",
    description:
      "A Reputed Real Estate Service Provider in San Francisco chose Bacforce for their Salesforce project. Our SF developers provided solutions like a unique set of integrations and custom development addressed to varied requirements, maximized their CRM, and unlocked the full power of their investment from Salesforce features.",
    imageSrc: case_study_2,
  },
};

const CaseStudyDescription = ({ data }) => {
  return (
    <>
      <p className="mb-2 font-bold text-light-blue">{data.subTitle}</p>
      <h3 className="mb-5 text-secondary">{data.title}</h3>
      <p className="leading-[max(23px,1.458vw)]">{data.description}</p>
    </>
  );
};

const CaseStudy = ({ theme }) => {
  return (
    <section
      id="CaseStudy"
      className={`scroll-mt-28 ${theme === "white" ? "" : "bg-light-blue"}`}
    >
      <SectionHeading additionalClasses="mb-8">
        Our Salesforce
        <span className="font-bold"> Success Stories</span>
      </SectionHeading>
      <SectionDescription>
        <p className="mx-auto mb-16 lg:w-3/4">
          Over the past {bacforceYears} years, our dedicated Salesforce
          Developers have helped numbers of clients to get the customization
          done right to improve their sales process and streamline production.
        </p>
      </SectionDescription>
      <div className="grid grid-flow-dense gap-7 text-left md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="grid h-full sm:grid-cols-12">
            <div
              className={`${
                theme === "white" ? "bg-light-blue" : "bg-white"
              } p-12 text-base sm:col-span-8`}
            >
              <CaseStudyDescription data={caseStudies.healthcareSolution} />
            </div>
            <ImageSection
              divClasses="sm:col-span-4"
              imageAlt={caseStudies.healthcareSolution.title}
              imageSrc={caseStudies.healthcareSolution.imageSrc}
              imageClasses="h-full w-full"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid h-full grid-flow-dense sm:grid-cols-12">
            <div
              className={`col-start-1 col-end-13 ${
                theme === "white" ? "bg-light-blue" : "bg-white"
              } p-12 text-base sm:col-start-5 sm:col-end-13`}
            >
              <CaseStudyDescription data={caseStudies.salesforceLighting} />
            </div>
            <ImageSection
              divClasses="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5"
              imageAlt={caseStudies.salesforceLighting.title}
              imageSrc={caseStudies.salesforceLighting.imageSrc}
              imageClasses="h-full w-full"
            />
          </div>
        </div>
        <div className="row-span-2 flex flex-col justify-between bg-white">
          <div className="grid h-full sm:grid-cols-12">
            <div className={`${theme === "white" ? "bg-light-blue" : "bg-white"} p-12 text-base sm:col-span-8 md:col-span-12`}>
              <CaseStudyDescription data={caseStudies.realEstateSolution} />
            </div>
            <ImageSection
              divClasses="sm:col-span-4 md:col-span-12"
              imageAlt={caseStudies.realEstateSolution.title}
              imageSrc={caseStudies.realEstateSolution.imageSrc}
              imageClasses="h-full w-full"
            />
          </div>
        </div>
      </div>
      <ButtonLink
        additionalClasses="bg-secondary mt-12 hover:bg-secondary-hover"
        href="#Form"
      >
        Request For Quotation
      </ButtonLink>
    </section>
  );
};

export default CaseStudy;
