import Contacts from "../Contacts";
import {contacts} from "@/data/header.js";

const HeaderFooter = () => {
  return (
    <div className="border-t border-gray border-opacity-30 p-5">
      <div className="grid grid-cols-4">
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};

export default HeaderFooter;
