import { salesforce_developers } from "@/data/faq";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const Faq = () => {
  return (
    <section className="bg-gradient-to-r bg-faq from-white to-water">
      <div className="grid md:grid-cols-11 gap-16 md:gap-20">
        <div className="text-center md:order-2 md:col-span-4 md:text-left">
          <div className="sticky top-48">
            <h2 className="mb-6 font-bold text-dark">
              <span className="font-light md:block">Frequently Asked </span>
              Questions
            </h2>
            <div className="space-y-6">
              <p>Still have questions?</p>
              <ButtonLink
                additionalClasses="bg-primary hover:bg-primary-hover"
                href="#contactForm"
              >
                LET&apos;S TALK
              </ButtonLink>
            </div>
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
