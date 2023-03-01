import { pricingBox } from "@/data/pricingBox";
const PricingBox = ({ theme }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 2xl:col-span-8 2xl:col-start-3">
        <div className="grid gap-4 sm:grid-cols-2">
          {pricingBox.map((item, index) => (
            <div
              key={index}
              className={`divide-y border py-8 ${
                theme === "light-blue"
                  ? `divide-light-blue border-light-blue`
                  : ""
              }`}
            >
              <h4
                className={`px-9 font-bold ${theme ? `text-${theme}` : ""}`}
                dangerouslySetInnerHTML={{ __html: item.price }}
              ></h4>
              <div className="mt-5 px-9 pt-5">
                <p
                  className={theme ? "" : "opacity-70"}
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
