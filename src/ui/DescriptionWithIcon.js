import ImageSection from "@/ui/ImageSection";

const DescriptionWithIcon = ({
  additionalClassesForHeading,
  data,
  iconSize,
  boxSize = "sm:w-1/2 lg:w-1/3",
  boxBgColor = "",
}) => {
  return (
    <div className="-mx-2 mt-16 flex flex-wrap sm:justify-center">
      {data.map((item, index) => (
        <div key={index} className={`w-full p-2 ${boxSize}`}>
          <div className={`group h-full cursor-pointer space-y-6 border border-gray p-8 text-left hover:bg-primary hover:shadow-blue ${boxBgColor}`}>
            <div className="flex items-center">
              <ImageSection
                divClasses="pr-4"
                imageAlt={item.title}
                imageSrc={item.icon}
                imageClasses={`${iconSize} group-hover:invert`}
              />
              {item.title && (
                <h4
                  className={`font-semibold group-hover:text-white${
                    additionalClassesForHeading
                      ? " " + additionalClassesForHeading
                      : ""
                  }`}
                >
                  {item.title}
                </h4>
              )}
            </div>
            {item.description && (
              <p className="text-secondary group-hover:text-white">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionWithIcon;
