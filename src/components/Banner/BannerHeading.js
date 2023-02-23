import ButtonLink from "@/ui/ButtonLink";
export const BannerHeading = ({ additionalClasses, data, children }) => {
  const allClasses = `flex flex-col justify-center space-y-8${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <div className={allClasses}>
      <h1
        className="text-6xl text-dark"
        dangerouslySetInnerHTML={{ __html: data.heading }}
      ></h1>
      {data.descriptionList.map((description, index) => (
        <h4 key={index}>{description}</h4>
      ))}
      {children}
      {data.buttonName && (
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          href={data.buttonHref}
        >
          {data.buttonName}
        </ButtonLink>
      )}
    </div>
  );
};
