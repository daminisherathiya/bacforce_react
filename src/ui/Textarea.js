const Textarea = ({ placeholder, innerRef }) => {
  return (
    <textarea
      rows="3"
      className="w-full border border-gray p-5 text-primary text-base placeholder:text-gray focus:outline-none"
      placeholder={placeholder}
      ref={innerRef}
    ></textarea>
  );
};

export default Textarea;
