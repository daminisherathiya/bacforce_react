import { salesforce_developers } from "@/data/weOffer";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const WeOffer = () => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <div className="sticky top-48 text-center md:text-left">
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
              <div className="flex justify-center md:justify-start">
                <div className="border-r border-gray pr-12">
                  <h3 className="font-bold text-dark">11+</h3>
                  <p className="text-primary">Years of CRM Experience</p>
                </div>
                <div className="border-r border-gray px-12">
                  <h3 className="font-bold text-dark">100+</h3>
                  <p className="text-primary">Salesforce Project Delivered</p>
                </div>
                <div className="pl-12">
                  <h3 className="font-bold text-dark">24*7</h3>
                  <p className="text-primary">Technical Support</p>
                </div>
              </div>
              <ButtonLink
                additionalClasses="bg-secondary hover:bg-secondary-hover"
                href="#Form"
              >
                Book A Free Consultation
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
