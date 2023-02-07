const ButtonLink = ({ additionalClasses, href = "#", children }) => {
  const allClasses =
    "px-[max(15px,2.083vw)] py-[max(12px,0.938vw)] uppercase text-white text-[max(12px,0.833vw)] inline-block text-center " +
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
