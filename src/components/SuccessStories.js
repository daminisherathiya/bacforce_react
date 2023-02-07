import ButtonLink from "@/ui/ButtonLink";
import Image from "next/image";
import case_study_1 from "../../public/images/case-study/case-study-1.jpg";
import case_study_2 from "../../public/images/case-study/case-study-2.jpg";
import case_study_3 from "../../public/images/case-study/case-study-3.jpg";
const SuccessStories = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water px-[max(20px,13.542vw)] py-[max(50px,5.208vw)] text-center">
      <h2 className="mb-[max(15px,1.250vw)] font-bold text-dark">
        <span className="font-light">Our Salesforce </span>
        Success Stories
      </h2>
      <p className="mb-[max(40px,4.427vw)]">
        Over the past 10+ years, check out these awesome case studies for
        Salesforce applications we have built for our valuable clients to solve
        real-life problems and help them to overcome start-up challenges.
      </p>
      <div className="grid grid-cols-3 gap-5 text-left">
        <div className="col-span-2 space-y-5">
          <div className="grid grid-cols-12">
            <div className="col-span-7 bg-white p-[max(30px,2.604vw)]">
              <p>HEALTH CARE</p>
              <h4 className="mb-4">Healthcare Solution</h4>
              <p>
                Healthcare group of companies with issues that substantially
                lacked basic insights on lead conversion. Our SF developers made
                standard sales dashboards, the ability to view customized
                options, verified exact lead sources & campaign association of
                online leads to scan it easily.
              </p>
            </div>
            <div className="col-span-5">
              <Image
                src={case_study_1}
                alt="Healthcare Solution"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-7 bg-white p-[max(30px,2.604vw)]">
              <p>HEALTH CARE</p>
              <h4 className="mb-4">Healthcare Solution</h4>
              <p>
                Healthcare group of companies with issues that substantially
                lacked basic insights on lead conversion. Our SF developers made
                standard sales dashboards, the ability to view customized
                options, verified exact lead sources & campaign association of
                online leads to scan it easily.
              </p>
            </div>
            <div className="col-span-5">
              <Image
                src={case_study_3}
                alt="Healthcare Solution"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="row-span-2">
          <div className="grid grid-cols-1">
            <div className="bg-white p-[max(30px,2.604vw)]">
              <p>HEALTH CARE</p>
              <h4 className="mb-4">Healthcare Solution</h4>
              <p>
                Healthcare group of companies with issues that substantially
                lacked basic insights on lead conversion. Our SF developers made
                standard sales dashboards, the ability to view customized
                options, verified exact lead sources & campaign association of
                online leads to scan it easily.
              </p>
            </div>
            <div>
              <Image
                src={case_study_2}
                alt="Healthcare Solution"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonLink additionalClasses="bg-secondary">
        REQUEST FOR QUOTATION
      </ButtonLink>
    </section>
  );
};

export default SuccessStories;
