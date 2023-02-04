import Image from "next/image";
import logo from "../../../public/images/logo.png";
import ButtonLink from "../../ui/ButtonLink";
import { services } from "@/data/header";
import { useState } from "react";
import SubHeader from "@/components/Header/SubHeader";
import MobileSubHeader from "./MobileSubHeader";

const Header = () => {
  const [openIndex, setopenIndex] = useState(-1);
  const [menuToggle, setmenuToggle] = useState(false);

  const openHandler = (i) => {
    if (openIndex === i) {
      return setopenIndex(-1);
    }
    return setopenIndex(i);
  };
  const toggleMenuHandler = () => {
    setmenuToggle(!menuToggle);
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
        <div className="hidden items-center space-x-[max(25px,2.500vw)] lg:flex">
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
                    <SubHeader open={i === openIndex} service={service} />
                  </>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink
            additionalClasses="bg-green-blue"
            href="https://bacforce.com/contactus"
          >
            Get Quote
          </ButtonLink>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenuHandler}
            className={`hamburger z-40 block focus:outline-none lg:hidden ${
              menuToggle ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div className="fixed top-0 left-0 h-screen w-[min(max(274px,73.067vw),500px)] bg-white px-5 pt-28 text-[max(18px,2.344vw)] text-secondary lg:hidden">
        <ul className="space-y-3">
          {services.map((service, i) => (
            <li
              className="space-y-3"
              key={service.id}
              onClick={openHandler.bind(null, i)}
            >
              {service.href ? (
                <a href={service.href} className="block">
                  {service.title}
                </a>
              ) : (
                  <MobileSubHeader open={i === openIndex} services={service} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
