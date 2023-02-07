import { salesforce_developers } from "@/data/weOffer";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const WeOffer = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water px-[max(20px,13.542vw)] py-[max(50px,5.208vw)]">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="mb-[max(15px,1.250vw)] font-bold text-dark">
            <span className="font-light">Salesforce Development Services </span>
            We Offer
          </h2>
          <div className="space-y-[max(35px,2.500vw)]">
            <p>
              We offer a comprehensive range of Salesforce development services
              at pocket-friendly prices.
            </p>
            <div className="grid grid-cols-3 space-x-[max(35px,2.396vw)]">
              <div className="border-r border-gray">
                <h3 className="font-bold text-dark">
                  11+
                </h3>
                <p className="text-primary">
                  Years of CRM Experience
                </p>
              </div>
              <div className="border-r border-gray">
                <h3 className="font-bold text-dark">
                  100+
                </h3>
                <p className="text-primary">
                  Salesforce Project Delivered
                </p>
              </div>
              <div>
                <h3 className="font-bold text-dark">
                  24*7
                </h3>
                <p className="text-primary">
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
