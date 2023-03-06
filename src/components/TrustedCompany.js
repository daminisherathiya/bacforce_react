import ImageSection from "@/ui/ImageSection";
import SectionHeading from "@/ui/SectionHeading";
import logo1 from "../../public/images/trusted-company-logo/logo-1.png";
import logo2 from "../../public/images/trusted-company-logo/logo-2.png";
import logo3 from "../../public/images/trusted-company-logo/logo-3.png";
import logo4 from "../../public/images/trusted-company-logo/logo-4.png";
import logo5 from "../../public/images/trusted-company-logo/logo-5.png";

const trustedCompanyList = [
  {
    src: logo1,
    alt: "Mercedes",
  },
  {
    src: logo2,
    alt: "Warnar Bros",
  },
  {
    src: logo3,
    alt: "Disney",
  },
  {
    src: logo4,
    alt: "Dubai Bazar",
  },
  {
    src: logo5,
    alt: "Red Bull",
  },
];
const TrustedCompany = () => {
  return (
    <section className="-mt-14 py-0">
      <div className="bg-white px-16 py-14 shadow">
        <SectionHeading additionalClasses="mb-3">
          Join The Team
          <span className="font-bold"> of Customers Who Trust Us</span>
        </SectionHeading>
        <h4 className="mb-7 text-secondary">
          Trusted by hundreds of Start-ups, Scale-ups, &amp; Enterprises helping
          improve their Salesforce and accelerate revenue.
        </h4>
        <div className="flex flex-wrap justify-center">
          {/*todo*/}
          {trustedCompanyList.map((trustedCompany, i) => (
            <ImageSection
              key={i}
              divClasses="my-3 w-1/3 px-3 md:my-0 sm:w-1/5"
              imageAlt={trustedCompany.alt}
              imageSrc={trustedCompany.src}
              imageClasses="mx-auto w-[max(127px,9.167vw)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
