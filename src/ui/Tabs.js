import { Fragment, useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const Tabs = ({ data, theme }) => {
  const [openIndex, setopenIndex] = useState(0);
  const openHandler = (index) => {
    return setopenIndex(index);
  };

  return (
    <div className="grid md:grid-cols-7">
      <div className="md:col-span-2">
        <ul className="text-left">
          {data.map((item, index) => (
            <Fragment key={index}>
              <Tab
                theme={theme}
                index={index}
                openIndex={openIndex}
                openHandler={openHandler}
              >
                {item.title}
              </Tab>
              <div className="md:hidden">
                <TabPanel index={index} openIndex={openIndex}>
                  {item.description}
                </TabPanel>
              </div>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="hidden md:col-span-5 md:block">
        {data.map((item, index) => (
          <TabPanel key={index} item={item} index={index} openIndex={openIndex}>
            {item.description}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
