import Image from "next/image";
import arrow_circle_down from "../../public/images/arrow-circle-down.jpg";
const Accordion = ({salesforce_developers}) => {
  return (
    <div className="space-y-[max(10px,0.833vw)]">
      {salesforce_developers.map((faq) => (
        <div
          key={faq.question}
          className="group bg-white p-[max(15px,1.667vw)] text-primary outline-none"
          tabIndex="1"
        >
          <div className="text-gray-500 ease group flex cursor-pointer items-center justify-between transition duration-500">
            <h4 className="ease font-bold transition duration-500">
              {faq.question}
            </h4>
            <div className="ease group-focus:text-red-500 transition duration-500 group-focus:-rotate-180">
              <Image src={arrow_circle_down} alt="arrow-circle-down" />
            </div>
          </div>

          <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
            <p className="text-gray-400 pt-[max(15px,1.042vw)] text-justify">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
