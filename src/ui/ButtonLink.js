const ButtonLink = ({ additionalClasses, href = "#", children }) => {
  const allClasses =
    "px-10 py-5 uppercase text-white text-base inline-block text-center " +
    additionalClasses;
  return (
    <div>
      <a href={href} className={allClasses}>
        {children}
      </a>
    </div>
  );
};
export default ButtonLink;
