export const BannerHeading = ({ data, children }) => {
  return (
    <div className="flex flex-col justify-center space-y-8 md:col-span-5 lg:pr-24">
      <h1
        className="text-6xl text-dark"
        dangerouslySetInnerHTML={{ __html: data.heading }}
      ></h1>
      {data.descriptionList.map((description, index) => (
        <h4 key={index}>{description}</h4>
      ))}
      {children}
    </div>
  );
};
