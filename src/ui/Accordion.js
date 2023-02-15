import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import arrow_circle_down from "../../public/images/arrow-circle-down.jpg";
const Accordion = ({ salesforce_developers, additionalClasses }) => {
  const [openIndex, setopenIndex] = useState(-1);
  const toogleHeight = useRef();
  const openHandler = (i) => {
    if (openIndex === i) {
      return setopenIndex(-1);
    }
    return setopenIndex(i);
  };
  // https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx
  return (
    <div className={`space-y-3 ${additionalClasses ? additionalClasses : ""}`}>
      {salesforce_developers.map((faq, i) => (
        <div
          key={faq.question}
          className={`bg-white p-8 text-primary outline-none ${
            i === openIndex ? "shadow-blue" : ""
          }`}
        >
          <div
            className="text-gray-500 flex cursor-pointer items-center justify-between"
            onClick={() => {
              openHandler(i);
            }}
          >
            <h4
              className="font-bold"
              dangerouslySetInnerHTML={{ __html: faq.question }}
            ></h4>
            <div
              className={`ease transition-all duration-500 ${
                i === openIndex ? "-rotate-180" : ""
              }`}
            >
              <Image
                src={arrow_circle_down}
                alt="arrow-circle-down"
                className="h-8 w-8 max-w-none"
              />
            </div>
          </div>

          <div
            ref={toogleHeight}
            className="ease overflow-hidden transition-all duration-300"
            style={{
              maxHeight:
                i === openIndex ? toogleHeight.current.scrollHeight : "0",
            }}
          >
            <p
              className="text-gray-400 pt-5 text-justify"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
