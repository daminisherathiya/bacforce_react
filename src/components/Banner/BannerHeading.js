import ButtonLink from "@/ui/ButtonLink";
export const BannerHeading = ({
  additionalClasses,
  data,
  children,
  headingColor = "text-dark",
}) => {
  const allClasses = `flex flex-col justify-center space-y-10${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <div className={allClasses}>
      <div className="space-y-6">
        <h1
          className={headingColor}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        ></h1>
        {data.subHeading && (
          <h4 className={data.subHeading.additionalClasses}>
            {data.subHeading.description}
          </h4>
        )}
        {data.description && data.description.map((item, index) => (
          <p
            key={index}
            className={item.additionalClasses && item.additionalClasses}
          >
            {item.paragraph}
          </p>
        ))}
      </div>
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
