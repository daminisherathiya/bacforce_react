const Textarea = ({ registerProps, placeholder, innerRef }) => {
  return (
    <textarea
      rows="3"
      className="w-full border border-gray p-5 text-base text-primary placeholder:text-gray focus:outline-none"
      placeholder={placeholder}
      ref={innerRef}
      {...registerProps}
    ></textarea>
  );
};

export default Textarea;
