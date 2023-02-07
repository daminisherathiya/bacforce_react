import Image from "next/image";
import logo1 from "../../public/images/trusted-company-logo/logo-1.png";
import logo2 from "../../public/images/trusted-company-logo/logo-2.png";
import logo3 from "../../public/images/trusted-company-logo/logo-3.png";
import logo4 from "../../public/images/trusted-company-logo/logo-4.png";
import logo5 from "../../public/images/trusted-company-logo/logo-5.png";
const TrustedCompany = () => {
  return (
    <section className="px-[max(20px,13.542vw)] pb-[max(50px,5.208vw)] -mt-[max(-35px,3.125vw)]">
      <div className="shadow-sm px-[max(35px,3.385vw)] py-[max(35px,3.125vw)] text-center bg-white">
        <h3 className="text-[max(24px,1.875vw)] mb-[max(8px,0.729vw)] text-dark-blue font-black">Join The Team of Customers Who Trust Us</h3>
        <p className="text-[max(16px,0.938vw)] mb-[max(20px,1.563vw)] text-secondary">
          Trusted by hundreds of Start-ups, Scale-ups, & Enterprises helping
          improve their Salesforce and accelerate revenue.
        </p>
        <div className="grid grid-cols-5">
          <div className="mx-auto"><Image src={logo1} /></div>
          <div className="mx-auto"><Image src={logo2} /></div>
          <div className="mx-auto"><Image src={logo3} /></div>
          <div className="mx-auto"><Image src={logo4} /></div>
          <div className="mx-auto"><Image src={logo5} /></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
