import { salesforce_developers } from "@/data/faq";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const Faq = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="md:order-2">
          <div className="sticky top-48">
            <h2 className="mb-6 font-bold text-dark">
              <span className="font-light block">Frequently Asked </span>
              Questions
            </h2>
            <div className="space-y-6">
              <p>Still have questions?</p>
              <ButtonLink additionalClasses="bg-primary">LET&apos;S TALK</ButtonLink>
            </div>
          </div>
        </div>
        <Accordion salesforce_developers={salesforce_developers} />
      </div>
    </section>
  );
};

export default Faq;
