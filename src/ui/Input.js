const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="block w-full border border-gray px-5 py-4 text-base placeholder:text-primary placeholder:opacity-50 focus:outline-none bg-white"
      placeholder={placeholder}
    />
  );
};

export default Input;
