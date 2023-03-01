const Input = ({ additionalClasses, type, placeholder, innerRef }) => {
  const allClasses = `block w-full border border-gray bg-white px-5 py-4 text-base text-primary placeholder:text-gray focus:outline-none${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <input
      type={type}
      className={allClasses}
      placeholder={placeholder}
      ref={innerRef}
    />
  );
};

export default Input;
