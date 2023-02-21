import { salesforce_developers } from "@/data/weOffer";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const WeOffer = () => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <div className="sticky top-48 space-y-8 text-center md:text-left">
            <h2 className="text-dark">
              Salesforce Development Services
              <span className="font-bold"> We Offer</span>
            </h2>
            <p>
              We offer a comprehensive range of Salesforce development services
              at pocket-friendly prices.
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="border-r border-gray pr-3 xs:pr-12">
                <h3 className="font-bold text-dark">11+</h3>
                <p className="text-primary">Years of CRM Experience</p>
              </div>
              <div className="border-r border-gray px-3 xs:px-12">
                <h3 className="font-bold text-dark">100+</h3>
                <p className="text-primary">Salesforce Project Delivered</p>
              </div>
              <div className="pl-3 xs:pl-12">
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
        <Accordion salesforce_developers={salesforce_developers} />
      </div>
    </section>
  );
};

export default WeOffer;
