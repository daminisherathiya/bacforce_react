import ImageSection from "@/ui/ImageSection";

const DescriptionWithIcon = ({ data, iconSize }) => {
  return (
    <div className="-mx-2 flex flex-wrap justify-center mt-16">
      {data.map((item, index) => (
        <div key={index} className="p-2 sm:w-1/2 lg:w-1/3">
          <div className="group h-full cursor-pointer space-y-6 border border-gray p-8 text-left hover:bg-primary hover:shadow-blue">
            <div className="flex items-center">
              <ImageSection
                divClasses="pr-4"
                imageAlt={item.title}
                imageSrc={item.icon}
                imageClasses={`${iconSize} group-hover:invert`}
              />
              <h4 className="font-semibold group-hover:text-white">
                {item.title}
              </h4>
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
