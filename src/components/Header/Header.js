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
            className="relative z-10 w-[max(100px,10.417vw)]"
            priority
          />
        </a>
        <div className="hidden items-center space-x-[max(25px,2.500vw)] lg:flex">
          <ul className="flex space-x-[max(25px,2.500vw)] text-[max(15px,0.833vw)]">
            {services.map((service, i) => (
              <li key={service.id} className="text-secondary">
                {service.href ? (
                  <a href={service.href}>{service.title}</a>
                ) : (
                  <>
                    <button onClick={() => openHandler(i)}>
                      {service.title}
                    </button>
                    <SubHeader open={i === openIndex} service={service} />
                  </>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink
            additionalClasses="bg-primary"
            href="https://bacforce.com/contactus"
          >
            Get Quote
          </ButtonLink>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenuHandler}
            className={`hamburger z-40 block outline-none focus:outline-none lg:hidden ${
              menuToggle ? "open" : ""
            }`}
          >
            <span
              className={`hamburger-top bg-dark ${
                menuToggle ? "xs:bg-white" : ""
              }`}
            ></span>
            <span
              className={`hamburger-middle bg-dark ${
                menuToggle ? "xs:bg-white" : ""
              }`}
            ></span>
            <span
              className={`hamburger-bottom bg-dark ${
                menuToggle ? "xs:bg-white" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div
        className={`sidebar-backdrop lg:opacity-0 ${
          menuToggle ? "block opacity-50" : "hidden"
        }`}
      ></div>
      {/* mobile menu */}
      <div
        className={`fixed top-0 h-screen w-screen bg-white px-5 pb-5 pt-28 text-[max(18px,2.344vw)] text-secondary transition-all duration-500 xs:w-[min(max(274px,73.067vw),500px)] lg:hidden ${
          menuToggle ? "left-0" : "-left-full xs:-left-[73.067vw]"
        }`}
      >
        <div className="no-scrollbar h-full overflow-y-auto">
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li key={service.id} onClick={() => openHandler(i)}>
                {service.href ? (
                  <a href={service.href} className="block">
                    {service.title}
                  </a>
                ) : (
                  <MobileSubHeader open={i === openIndex} service={service} />
                )}
              </li>
            ))}
          </ul>
          <ButtonLink
            additionalClasses="bg-primary mt-6 text-[max(18px,2.344vw)]"
            href="https://bacforce.com/contactus"
          >
            Get Quote
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
