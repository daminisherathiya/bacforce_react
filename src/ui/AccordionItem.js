import Image from "next/image";
import { useRef } from "react";
import arrow_circle_down from "../../public/images/arrow-circle-down.jpg";

const AccordionItem = ({ faq, index, openHandler, openIndex }) => {
  // https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx

  const toogleHeight = useRef();
  return (
    <div
      className={`bg-white p-8 text-primary outline-none text-left ${
        index === openIndex ? "shadow-blue" : ""
      }`}
    >
      <div
        className="text-gray-500 flex cursor-pointer items-center justify-between"
        onClick={() => {
          openHandler(index);
        }}
      >
        <h4
          className={`font-bold ${
            index === openIndex ? "text-light-blue" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: faq.question }}
        ></h4>
        <div
          className={`ease transition-all duration-500 ${
            index === openIndex ? "-rotate-180" : ""
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
            index === openIndex ? toogleHeight.current.scrollHeight : "0",
        }}
      >
        <div
          className="text-gray-400 pt-5 text-justify"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        ></div>
      </div>
    </div>
  );
};

export default AccordionItem;
