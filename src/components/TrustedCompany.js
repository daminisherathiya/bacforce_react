import Image from "next/image";
import logo1 from "../../public/images/trusted-company-logo/logo-1.png";
import logo2 from "../../public/images/trusted-company-logo/logo-2.png";
import logo3 from "../../public/images/trusted-company-logo/logo-3.png";
import logo4 from "../../public/images/trusted-company-logo/logo-4.png";
import logo5 from "../../public/images/trusted-company-logo/logo-5.png";
const TrustedCompany = () => {
  return (
    <section className="-mt-14 py-0">
      <div className="bg-white px-16 py-14 text-center shadow">
        <h3 className="mb-3.5 font-black text-dark">
          Join The Team of Customers Who Trust Us
        </h3>
        <p className="mb-7 text-base text-secondary">
          Trusted by hundreds of Start-ups, Scale-ups, & Enterprises helping
          improve their Salesforce and accelerate revenue.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/3 md:w-1/5 px-3 md:my-0 my-3">
            <Image className="mx-auto w-44" src={logo1} alt="Mercedes" /> {/*todo*/}
          </div>
          <div className="w-1/3 md:w-1/5 px-3 md:my-0 my-3">
            <Image className="mx-auto w-44" src={logo2} alt="Warnar Bros" />
          </div>
          <div className="w-1/3 md:w-1/5 px-3 md:my-0 my-3">
            <Image className="mx-auto w-44" src={logo3} alt="Disney" />
          </div>
          <div className="w-1/3 md:w-1/5 px-3 md:my-0 my-3">
            <Image className="mx-auto w-44" src={logo4} alt="Dubai Bazar" />
          </div>
          <div className="w-1/3 md:w-1/5 px-3 md:my-0 my-3">
            <Image className="mx-auto w-44" src={logo5} alt="Red Bull" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
