const ErrorMessage = ({ additionalClasses, message }) => {
  const allClasses = `pl-2 text-base text-[#e42d3f]${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return <p className={allClasses}>{message}</p>;
};

export default ErrorMessage;
