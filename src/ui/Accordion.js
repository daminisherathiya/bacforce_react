import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ salesforce_developers, additionalClasses }) => {
  const [openIndex, setopenIndex] = useState(-1);
  const openHandler = (index) => {
    if (openIndex === index) {
      return setopenIndex(-1);
    }
    return setopenIndex(index);
  };
  return (
    <div className={`space-y-3 ${additionalClasses ? additionalClasses : ""}`}>
      {salesforce_developers.map((faq, index) => (
        <AccordionItem
          faq={faq}
          index={index}
          key={index}
          openIndex={openIndex}
          openHandler={openHandler}
        />
      ))}
    </div>
  );
};

export default Accordion;
