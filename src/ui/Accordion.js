import Image from "next/image";
import arrow_circle_down from "../../public/images/arrow-circle-down.jpg";
const Accordion = ({ salesforce_developers, additionalClasses }) => {
  // https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx
  return (
    <div className={`space-y-4 ${additionalClasses ? additionalClasses : ""}`}>
      {salesforce_developers.map((faq) => (
        <div
          key={faq.question}
          className="group bg-white p-8 text-primary outline-none shadow"
          tabIndex="1"
        >
          <div className="text-gray-500 ease group flex cursor-pointer items-center justify-between transition duration-500">
            <h4
              className="ease font-bold transition duration-500"
              dangerouslySetInnerHTML={{ __html: faq.question }}
            ></h4>
            <div className="ease group-focus:text-red-500 transition duration-500 group-focus:-rotate-180">
              <Image src={arrow_circle_down} alt="arrow-circle-down" className="w-8 h-8" />
            </div>
          </div>

          <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
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
