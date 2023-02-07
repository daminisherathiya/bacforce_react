import Image from "next/image";
import logo1 from "../../public/images/trusted-company-logo/logo-1.png";
import logo2 from "../../public/images/trusted-company-logo/logo-2.png";
import logo3 from "../../public/images/trusted-company-logo/logo-3.png";
import logo4 from "../../public/images/trusted-company-logo/logo-4.png";
import logo5 from "../../public/images/trusted-company-logo/logo-5.png";
const TrustedCompany = () => {
  return (
    <section className="-mt-[max(-35px,3.125vw)] px-[max(20px,13.542vw)] pb-[max(50px,5.208vw)]">
      <div className="bg-white px-[max(35px,3.385vw)] py-[max(35px,3.125vw)] text-center shadow">
        <h3 className="mb-[max(8px,0.729vw)] text-[max(24px,1.875vw)] font-black text-dark">
          Join The Team of Customers Who Trust Us
        </h3>
        <p className="mb-[max(20px,1.563vw)] text-[max(16px,0.938vw)] text-secondary">
          Trusted by hundreds of Start-ups, Scale-ups, & Enterprises helping
          improve their Salesforce and accelerate revenue.
        </p>
        <div className="grid grid-cols-5">
          <div className="mx-auto">
            <Image src={logo1} alt="Mercedes" />
          </div>
          <div className="mx-auto">
            <Image src={logo2} alt="Warnar Bros" />
          </div>
          <div className="mx-auto">
            <Image src={logo3} alt="Disney" />
          </div>
          <div className="mx-auto">
            <Image src={logo4} alt="Dubai Bazar" />
          </div>
          <div className="mx-auto">
            <Image src={logo5} alt="Red Bull" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
