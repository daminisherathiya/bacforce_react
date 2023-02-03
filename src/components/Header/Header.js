import Image from "next/image";
import logo from "../../../public/images/logo.png";
import ButtonLink from "../../ui/ButtonLink";
import { services } from "@/data/header";
import { useState } from "react";
import SubHeader from "@/components/Header/SubHeader";

const Header = () => {
  const [openIndex, setopenIndex] = useState(-1);
  const openHandler = (i) => {
    if (openIndex === i) {
      return setopenIndex(-1);
    }
    return setopenIndex(i);
  };
  return (
    <div className="relative w-full bg-gradient-to-r from-white to-water px-[max(20px,2.917vw)] py-[max(20px,1.771vw)] ">
      <div className="flex items-center justify-between">
        <a href="https://bacforce.com/">
          <Image
            src={logo}
            alt="Bacforce"
            className="w-[max(100px,10.417vw)]"
            priority
          />
        </a>
        <div className="flex items-center space-x-[max(25px,2.500vw)]">
          <ul className="flex space-x-[max(25px,2.500vw)] text-[max(15px,0.833vw)]">
            {services.map((service, i) => (
              <li
                key={service.id}
                onClick={openHandler.bind(null, i)}
                className="text-charcoal"
              >
                {service.href ? (
                  <a href={service.href}>{service.title}</a>
                ) : (
                  <>
                    <button>{service.title}</button>
                    <SubHeader open={i === openIndex} services={service} />
                  </>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink additionalClasses="bg-green-blue" href="https://bacforce.com/contactus">
            Get Quote
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
