import { salesforce_developers } from "@/data/weOffer";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const WeOffer = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water px-[max(20px,13.542vw)] py-[max(50px,5.208vw)]">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="mb-[max(15px,1.250vw)] text-[max(30px,2.396vw)] font-bold text-dark">
            <span className="font-light">Salesforce Development Services </span>
            We Offer
          </h2>
          <div className="space-y-[max(35px,2.500vw)]">
            <p className="text-[max(16px,0.938vw)]">
              We offer a comprehensive range of Salesforce development services
              at pocket-friendly prices.
            </p>
            <div className="grid grid-cols-3 space-x-[max(35px,2.396vw)]">
              <div className="border-r border-gray">
                <h4 className="text-[max(20px,1.667vw)] font-bold text-dark">
                  11+
                </h4>
                <p className="text-[max(16px,0.938vw)] text-primary">
                  Years of CRM Experience
                </p>
              </div>
              <div className="border-r border-gray">
                <h4 className="text-[max(20px,1.667vw)] font-bold text-dark">
                  100+
                </h4>
                <p className="text-[max(16px,0.938vw)] text-primary">
                  Salesforce Project Delivered
                </p>
              </div>
              <div>
                <h4 className="text-[max(20px,1.667vw)] font-bold text-dark">
                  24*7
                </h4>
                <p className="text-[max(16px,0.938vw)] text-primary">
                  Technical Support
                </p>
              </div>
            </div>
            <ButtonLink>BOOK FREE CONSULTATION</ButtonLink>
          </div>
        </div>
        <Accordion salesforce_developers={salesforce_developers} />
      </div>
    </section>
  );
};

export default WeOffer;
