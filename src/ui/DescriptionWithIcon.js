const { default: ImageSection } = require("./ImageSection");

const DescriptionWithIcon = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="group flex items-center border border-gray py-8 px-10 hover:bg-primary"
        >
          <ImageSection
            divClasses="pr-6"
            imageAlt={item.title}
            imageSrc={item.icon}
            imageClasses="w-[max(30px,2.083vw)] h-[max(30px,2.083vw)]  group-hover:invert"
          />
          <h4 className="font-semibold group-hover:text-white">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default DescriptionWithIcon;
