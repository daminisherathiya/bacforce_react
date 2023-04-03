import { Fragment, useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const Tabs = ({ data }) => {
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
                item={item}
                index={index}
                openIndex={openIndex}
                openHandler={openHandler}
              />
              <div className="md:hidden">
                <TabPanel
                  item={item}
                  index={index}
                  openIndex={openIndex}
                />
              </div>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="hidden md:col-span-5 md:block">
        {data.map((item, index) => (
          <TabPanel
            key= {index}
            item={item}
            index={index}
            openIndex={openIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
