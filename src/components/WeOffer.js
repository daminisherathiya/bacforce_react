import Accordion from "@/ui/Accordion";
import ButtonLink from "@/ui/ButtonLink";
import SectionHeading from "@/ui/SectionHeading";
const WeOffer = ({ data, children }) => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <div className="sticky top-48 space-y-8 text-center md:text-left">
            <SectionHeading>
              Salesforce Development Services
              <span className="font-bold"> We Offer</span>
            </SectionHeading>
            <p>{data.description}</p>
            {children}
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Book A Free Consultation
            </ButtonLink>
          </div>
        </div>
        <Accordion accordionItemsData={data.weOffer} />
      </div>
    </section>
  );
};

export default WeOffer;
