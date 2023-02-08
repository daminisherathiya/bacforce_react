import { salesforce_developers } from "@/data/weOffer";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const WeOffer = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water">
      <div className="grid gap-20 md:grid-cols-2">
        <div>
          <div className="sticky top-48">
            <h2 className="mb-6 font-bold text-dark">
              <span className="font-light">
                Salesforce Development Services{" "}
              </span>
              We Offer
            </h2>
            <div className="space-y-12">
              <p>
                We offer a comprehensive range of Salesforce development
                services at pocket-friendly prices.
              </p>
              <div className="flex flex-wrap">
                <div className="w-1/4 border-r border-gray pr-12">
                  <h3 className="font-bold text-dark">11+</h3>
                  <p className="text-primary">Years of CRM Experience</p>
                </div>
                <div className="w-2/5 border-r border-gray px-12">
                  <h3 className="font-bold text-dark">100+</h3>
                  <p className="text-primary">Salesforce Project Delivered</p>
                </div>
                <div className="w-1/4 pl-12">
                  <h3 className="font-bold text-dark">24*7</h3>
                  <p className="text-primary">Technical Support</p>
                </div>
              </div>
              <ButtonLink additionalClasses="bg-secondary">
                BOOK FREE CONSULTATION
              </ButtonLink>
            </div>
          </div>
        </div>
        <Accordion salesforce_developers={salesforce_developers} />
      </div>
    </section>
  );
};

export default WeOffer;
