import { salesforce_developers } from "@/data/faq";
import ButtonLink from "@/ui/ButtonLink";
import Accordion from "@/ui/Accordion";
const Faq = () => {
  return (
    <section className="bg-gradient-to-r from-white to-water px-[max(20px,13.542vw)] py-[max(50px,5.208vw)]">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="mb-[max(15px,1.250vw)] text-[max(30px,2.396vw)] font-bold text-dark-blue">
            <span className="font-light">Frequently Asked </span>
            Questions
          </h2>
          <div className="space-y-[max(35px,2.500vw)]">
            <p className="text-[max(16px,0.938vw)]">Still have questions?</p>
            <ButtonLink>LET'S TALK</ButtonLink>
          </div>
        </div>
        <Accordion salesforce_developers={salesforce_developers} />
      </div>
    </section>
  );
};

export default Faq;
