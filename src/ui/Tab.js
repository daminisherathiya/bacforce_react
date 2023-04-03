const Tab = ({ item, index, openHandler, openIndex }) => {
  return (
    <>
      <li
        key={index}
        className={`cursor-pointer px-6 py-5 text-xl hover:border-r-[4px] hover:border-r-primary hover:bg-light-blue hover:text-light-blue md:border-r md:border-r-gray hover:font-bold${
          openIndex === index
            ? " !border-r-[4px] !border-r-primary bg-light-blue font-bold text-light-blue"
            : ""
        }`}
        onClick={() => {
          openHandler(index);
        }}
      >
        {item.tabName}
      </li>
    </>
  );
};

export default Tab;
