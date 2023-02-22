import ButtonLink from "@/ui/ButtonLink";

const TechnicalExpertise = ({ data }) => {
  return (
    <>
      <div className="space-y-4">
        {data.map((data) => (
          <div
            key={data.key}
            className="group grid border border-gray md:grid-cols-12"
          >
            <div className="flex items-center bg-light py-5 px-24 group-hover:bg-primary md:col-span-3">
              <h3 className="text-left font-semibold text-dark group-hover:text-white">
                {data.key}
              </h3>
            </div>
            <div className="p-12 text-left md:col-span-9">
              <p>{data.value}</p>
            </div>
          </div>
        ))}
      </div>
      <ButtonLink
        additionalClasses="bg-secondary hover:bg-secondary-hover mt-12"
        href="#Form"
      >
        Schedule A Developer Interview
      </ButtonLink>
    </>
  );
};

export default TechnicalExpertise;
