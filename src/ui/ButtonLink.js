const ButtonLink = ({ additionalClasses, href = "#", children }) => {
  const allClasses = `px-10 py-4 capitalize text-white text-lg inline-block text-center${
    additionalClasses ? " " + additionalClasses : ""
  }`;
  
  return (
    <div>
      <a href={href} className={allClasses}>
        {children}
      </a>
    </div>
  );
};
export default ButtonLink;
