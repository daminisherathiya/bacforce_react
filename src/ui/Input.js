const Input = ({ type, placeholder, innerRef }) => {
  return (
    <input
      type={type}
      className="block w-full border border-gray bg-white px-5 py-4 text-base text-primary placeholder:text-gray focus:outline-none"
      placeholder={placeholder}
      ref={innerRef}
    />
  );
};

export default Input;
