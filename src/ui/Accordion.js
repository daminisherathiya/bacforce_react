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
    <div className={`space-y-4 ${additionalClasses ? additionalClasses : ""}`}>
      {salesforce_developers.map((faq, i) => (
        <div
          key={faq.question}
          className="group bg-white p-8 text-primary shadow outline-none"
        >
          <div
            className="text-gray-500 ease group flex cursor-pointer items-center justify-between transition duration-500"
            onClick={() => {
              openHandler(i);
            }}
          >
            <h4
              className="ease font-bold transition duration-500"
              dangerouslySetInnerHTML={{ __html: faq.question }}
            ></h4>
            <div className="ease group-focus:text-red-500 transition duration-500 group-focus:-rotate-180">
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
