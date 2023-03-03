import ImageSection from "@/ui/ImageSection";

const DescriptionWithIcon = ({ data, iconSize }) => {
  return (
    <div className="flex flex-wrap justify-center -mx-2">
      {data.map((item, index) => (
        <div className="sm:w-1/2 lg:w-1/3 p-2">
          <div
            key={index}
            className="group cursor-pointer space-y-6 border border-gray p-8 hover:bg-primary h-full"
          >
            <div className="flex items-center">
              <ImageSection
                divClasses="pr-4"
                imageAlt={item.title}
                imageSrc={item.icon}
                imageClasses={`w-${iconSize} h-${iconSize}  group-hover:invert`}
              />
              <h4 className="font-semibold group-hover:text-white">
                {item.title}
              </h4>
            </div>
            {item.description && (
              <p className="text-left text-secondary group-hover:text-white">
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
