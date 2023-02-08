const Textarea = ({ placeholder }) => {
  return (
    <textarea
      className="h-28 w-full border border-gray p-5 text-base placeholder:text-primary placeholder:opacity-50 focus:outline-none"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
