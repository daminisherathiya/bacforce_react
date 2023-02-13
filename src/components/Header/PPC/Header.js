import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import ButtonLink from "../../../ui/ButtonLink";
import { services } from "@/data/PPC/header";
import { useState } from "react";

const Header = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  const toggleMenuHandler = () => {
    setmenuToggle(!menuToggle);
  };
  return (
    <div className="fixed z-10 w-full bg-light-blue px-14 py-8 ">
      <div className="flex items-center justify-between">
        <a href="https://bacforce.com/">
          <Image
            src={logo}
            alt="Bacforce"
            className="relative z-10 w-[max(100px,10.417vw)]"
            priority
          />
        </a>
        <div className="hidden items-center space-x-12 lg:flex">
          <ul className="flex space-x-12 text-base">
            {services.map((service, i) => (
              <li key={service.id} className="text-secondary hover:text-primary">
                <a href={service.href}>{service.title}</a>
              </li>
            ))}
          </ul>
          <ButtonLink
            additionalClasses="bg-primary hover:bg-primary-hover"
            href="#Form"
          >
            Start 15 Days Risk-Free Trial
          </ButtonLink>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle collapsible navigation"
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
        className={`fixed top-0 h-screen w-screen bg-white px-14 py-28 pb-6 text-xl text-secondary transition-all duration-500 xs:w-96 lg:hidden ${
          menuToggle ? "left-0" : "-left-full xs:-left-96"
        }`}
      >
        <div className="no-scrollbar mt-28 h-full overflow-y-auto">
          <ul className="space-y-[18px]">
            {services.map((service, i) => (
              <li key={service.id}>
                <a href={service.href} className="block">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            additionalClasses="bg-primary hover:bg-primary-hover mt-6 text-xl"
            href="#Form"
          >
            Start 15 Days Risk-Free Trial
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Header;