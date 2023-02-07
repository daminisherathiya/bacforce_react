const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="block w-full border border-gray p-[max(10px,0.964vw)] text-[max(14px,0.833vw)] placeholder:text-primary placeholder:opacity-50 focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
