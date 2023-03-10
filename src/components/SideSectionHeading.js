import ButtonLink from "@/ui/ButtonLink";
const SideSectionHeading = ({ data, children }) => {
  return (
    <div>
      <div className="sticky top-48 space-y-8 md:text-left">
        <h2
          className="text-dark"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <p className="text-xl">{data.description}</p>
        {children}
        <ButtonLink
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          href="#Form"
        >
          {data.button}
        </ButtonLink>
      </div>
    </div>
  );
};

export default SideSectionHeading;
