import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Button from "../../ui/Button";
import SubHeader from "./SubHeader";
import {salesforce_services, salesforce_cloud} from "@/data/header"

const Header = () => {

  return (
    <div className="relative w-full bg-gradient-to-r from-white to-water px-[max(15px,2.917vw)] py-[max(15px,1.771vw)] ">
      <div className="flex items-center justify-between">
        <a href="https://bacforce.com/">
          <Image
            src={logo}
            alt="Bacforce"
            className="w-[max(100px,10.417vw)]"
          />
        </a>
        <div className="flex items-center space-x-[max(25px,2.500vw)]">
          <ul className="flex space-x-[max(25px,2.500vw)] text-[max(15px,0.833vw)]">
            <li className="text-charcoal">
              <a href="https://bacforce.com/about-us">About Us</a>
            </li>
            <li className="text-charcoal">
              <a>Salesforce Services</a>
              <SubHeader salesforce_services={salesforce_services} />
            </li>
            <li className="text-charcoal">
              <a>Salesforce Cloud</a>
              <SubHeader salesforce_services={salesforce_cloud}/>
            </li>
            <li className="text-charcoal">Expertise</li>
          </ul>
          <Button additionalClasses="bg-green-blue" type="submit">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
