const Textarea = ({ placeholder }) => {
  return (
    <textarea
      className="h-[max(80px,6.250vw)] w-full border border-gray p-[max(10px,0.964vw)] text-[max(14px,0.833vw)] placeholder:text-primary placeholder:opacity-50 focus:outline-none"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
