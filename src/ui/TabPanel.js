import ImageSection from "@/ui/ImageSection";

const TabPanel = ({ item, index, openIndex }) => {
  return (
    <>
      <div
        key={index}
        className={`p-3.5 md:pl-11 text-left ${
          index === openIndex ? "" : "hidden"
        }`}
      >
        <h3 className="mb-7 font-bold">{item.description.heading}</h3>
        <p className="mb-10 text-xl text-secondary">
          {item.description.paragraph}
        </p>
        <div className="flex flex-wrap items-center space-x-10">
          {item.description.images.map((image, index) => (
            <ImageSection
              divClasses="py-2"
              key={index}
              imageAlt={image.alt}
              imageSrc={image.logoImg}
              imageClasses={image.size}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabPanel;
