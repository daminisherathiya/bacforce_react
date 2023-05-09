import ImageSection from "@/ui/ImageSection";

const DescriptionWithIcon = ({
  additionalClassesForHeading,
  data,
  iconSize,
  boxSize,
  boxAdditionalClasses,
  additionalClassesForDescription,
  mainDivClasses,
  imgDivClasses
}) => {
  return (
    <div className={`-mx-2 flex flex-wrap sm:justify-center${
      mainDivClasses ? " " + mainDivClasses : ""
    }`}>
      {data.map((item, index) => (
        <div key={index} className={`w-full p-2 ${boxSize}`}>
          <div
            className={`group h-full cursor-pointer p-8 text-left hover:bg-primary hover:shadow-blue${
              boxAdditionalClasses ? " " + boxAdditionalClasses : ""
            }`}
          >
            <div className="flex items-center">
              {item.icon && (
                <ImageSection
                  divClasses={`pr-4${
                    imgDivClasses ? " " + imgDivClasses : ""
                  }`}
                  imageAlt={item.title ? item.title : item.description}
                  imageSrc={item.icon}
                  imageClasses={`${iconSize} group-hover:invert`}
                />
              )}
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
              <p
                className={`text-secondary group-hover:text-white${
                  additionalClassesForDescription
                    ? " " + additionalClassesForDescription
                    : ""
                }`}
              >
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
