const BannerHeading = ({ data, children }) => {
  return (
    <div className="flex flex-col justify-center space-y-8 md:col-span-5 lg:pr-24">
      <h1
        className="text-6xl text-dark"
        dangerouslySetInnerHTML={{ __html: data.heading }}
      ></h1>
      <h4
        dangerouslySetInnerHTML={{
          __html: data.descriptionList,
        }}
      ></h4>
      {children}
    </div>
  );
};

export default BannerHeading;
