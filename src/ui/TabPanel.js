const TabPanel = ({ index, openIndex, children }) => {
  return (
    <>
      <div
        className={`p-3.5 text-left md:pl-11 ${
          index === openIndex ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default TabPanel;
