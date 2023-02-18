const Input = ({ type, placeholder, value, isValid, innerRef }) => {
  return (
    <input
      type={type}
      className={`block w-full border border-gray bg-white px-5 py-4 text-base placeholder:text-primary placeholder:opacity-50 focus:outline-none ${
        isValid ? "border-white" : ""
      }`}
      placeholder={placeholder}
      value={value}
      ref={innerRef}
    />
  );
};

export default Input;
