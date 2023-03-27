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
                theme === "white"
                  ? "divide-gray border-white bg-white shadow"
                  : "divide-white border-white"
              } ${heightSmall && item.heightSmall ? "mt-14" : ""} ${
                heightSmall && item.heightBig ? "flex flex-col justify-end" : ""
              }`}
            >
              <h4
                className={`px-9 font-bold m-auto ${
                  theme ? "text-light-blue" : "text-white"
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
