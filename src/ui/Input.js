const Input = ({ registerProps, additionalClasses, type, placeholder }) => {
  const allClasses = `block w-full border border-gray bg-white px-5 py-4 text-base text-primary placeholder:text-gray focus:outline-none${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <input
      {...registerProps}
      type={type}
      className={allClasses}
      placeholder={placeholder}
    />
  );
};

export default Input;