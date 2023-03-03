import Accordion from "@/ui/Accordion";
import ButtonLink from "@/ui/ButtonLink";

const WeOffer = ({ data, children }) => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <div className="sticky top-48 space-y-8 md:text-left">
            <h2
              className="text-dark"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p>{data.description}</p>
            {children}
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              {data.button}
            </ButtonLink>
          </div>
        </div>
        <Accordion accordionItemsData={data.weOffer} />
      </div>
    </section>
  );
};

export default WeOffer;
