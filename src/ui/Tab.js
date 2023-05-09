const Tab = ({ index, openHandler, openIndex, children, theme }) => {
  return (
    <>
      <li
        className={`cursor-pointer px-6 py-5 text-xl hover:border-r-[max(4px,0.208vw)] hover:border-r-primary hover:bg-light-blue hover:text-light-blue md:border-r md:border-r-gray hover:font-bold${
          openIndex === index
            ? ` !border-r-[max(4px,0.208vw)] !border-r-primary bg-light-blue font-bold text-light-blue ${theme === "blue" ? "bg-white":""}`
            : ""
        } ${theme === "blue" ? "hover:bg-white":""}`}
        onClick={() => {
          openHandler(index);
        }}
      >
        {children}
      </li>
    </>
  );
};

export default Tab;
