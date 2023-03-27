const Textarea = ({ registerProps, placeholder, innerRef, additionalClasses }) => {
  return (
    <textarea
      rows="3"
      className={`w-full border border-gray p-5 text-base text-primary placeholder:text-gray focus:outline-none${additionalClasses ? " " + additionalClasses : ""}`}
      placeholder={placeholder}
      ref={innerRef}
      {...registerProps}
    ></textarea>
  );
};

export default Textarea;
