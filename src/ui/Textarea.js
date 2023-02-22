const Textarea = ({ placeholder, innerRef }) => {
  return (
    <textarea
      rows="3"
      className="w-full border border-gray p-5 text-base placeholder:text-primary placeholder:opacity-50 focus:outline-none"
      placeholder={placeholder}
      ref={innerRef}
    ></textarea>
  );
};

export default Textarea;
