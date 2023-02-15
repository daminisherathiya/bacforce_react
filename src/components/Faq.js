import { salesforce_developers } from "@/data/faq";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const Faq = () => {
  return (
    <section className="bg-light-blue">
      <div className="grid gap-16 md:grid-cols-11 md:gap-20">
        <div className="text-center md:col-span-4 md:text-left">
          <div className="sticky top-48 space-y-6">
            <h2 className=" text-dark">
              Frequently Asked
              <span className="font-bold md:block"> Questions</span>
            </h2>
            <p>Still have questions?</p>
            <ButtonLink
              additionalClasses="bg-secondary hover:bg-secondary-hover"
              href="#Form"
            >
              Let&apos;s Talk
            </ButtonLink>
          </div>
        </div>
        <Accordion
          salesforce_developers={salesforce_developers}
          additionalClasses="md:col-span-7"
        />
      </div>
    </section>
  );
};

export default Faq;
