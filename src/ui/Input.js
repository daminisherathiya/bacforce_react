const Input = ({
  registerProps,
  additionalClasses,
  type,
  placeholder,
  errorMessage,
}) => {
  const allClasses = `block w-full border border-gray bg-white px-5 py-4 text-base text-primary placeholder:text-gray focus:outline-none${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <>
      <input
        {...registerProps}
        type={type}
        className={allClasses}
        placeholder={placeholder}
      />
      <p className="pl-2 text-base text-[#e42d3f]">{errorMessage}</p>
    </>
  );
};

export default Input;
