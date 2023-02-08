const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="block w-full border border-gray p-5 text-base placeholder:text-primary placeholder:opacity-50 focus:outline-none bg-white"
      placeholder={placeholder}
    />
  );
};

export default Input;
