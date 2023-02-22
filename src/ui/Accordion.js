import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionItemsData, additionalClasses }) => {
  const [openIndex, setopenIndex] = useState(-1);
  const openHandler = (index) => {
    if (openIndex === index) {
      return setopenIndex(-1);
    }
    return setopenIndex(index);
  };
  return (
    <div className={`space-y-3 ${additionalClasses ? additionalClasses : ""}`}>
      {accordionItemsData.map((faq, index) => (
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
