import Accordion from "@/ui/Accordion";
import ButtonLink from "@/ui/ButtonLink";
import SectionDescription from "@/ui/SectionDescription";
import SectionHeading from "@/ui/SectionHeading";

const Faq = ({ data }) => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-11 md:gap-20">
        <div className="text-center md:col-span-4 md:text-left">
          <div className="sticky top-48 space-y-6">
            <SectionHeading>
              Frequently Asked
              <span className="font-bold md:block"> Questions</span>
            </SectionHeading>
            <SectionDescription>
              <p>Still have questions?</p>
            </SectionDescription>
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Let&apos;s Talk
            </ButtonLink>
          </div>
        </div>
        <Accordion
          accordionItemsData={data}
          additionalClasses="md:col-span-7"
        />
      </div>
    </section>
  );
};

export default Faq;
