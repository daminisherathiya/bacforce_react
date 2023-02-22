const SectionHeading = ({ additionalClasses, children }) => {
  const allClasses = `text-dark${
    additionalClasses ? " " + additionalClasses : ""
  }`;
  return <h2 className={allClasses}>{children}</h2>;
};

export default SectionHeading;
