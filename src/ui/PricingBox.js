import { pricingBox } from "@/data/pricingBox";
const PricingBox = ({ theme, heightSmall }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 2xl:col-span-8 2xl:col-start-3">
        <div className="grid gap-4 sm:grid-cols-2">
          {pricingBox.map((item, index) => (
            <div
              key={index}
              className={`divide-y border py-8 ${
                !theme ? "divide-white border-white" : ""
              }${
                theme === "white"
                  ? "divide-gray border-white bg-white shadow"
                  : ""
              } ${heightSmall && item.heightSmall ? "mt-14" : ""} ${
                heightSmall && item.heightBig ? "flex flex-col justify-end" : ""
              } ${
                heightSmall && item.heightBig && theme === "white-blue"
                  ? "border-white bg-primary text-white"
                  : ""
              }
              ${
                heightSmall && item.heightSmall && theme === "white-blue"
                  ? "divide-gray border-white bg-white shadow"
                  : ""
              }`}
            >
              <h4
                className={`m-auto px-9 font-bold ${
                  !theme ? "text-white" : ""
                }${theme === "white" ? "text-light-blue" : ""}
                ${
                  heightSmall && item.heightBig && theme === "white-blue"
                    ? "text-white"
                    : ""
                }
                ${
                  heightSmall && item.heightSmall && theme === "white-blue"
                    ? "text-light-blue"
                    : ""
                }`}
                dangerouslySetInnerHTML={{ __html: item.price }}
              ></h4>
              <div className="mt-5 px-9 pt-5">
                <p
                  className={theme ? "" : "text-white opacity-70"}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
