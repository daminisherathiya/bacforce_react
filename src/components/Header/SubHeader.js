import Image from "next/image";
import { useRef } from "react";
import arrowNarrowRight from "../../../public/images/arrow-narrow-right.svg";
import HeaderFooter from "./HeaderFooter";

const SubHeader = ({ open, service }) => {
  const toogleHeight = useRef();
  const { title, links, img } = service;
  return (
    <div
      ref={toogleHeight}
      className="absolute left-0 right-0 top-full z-30 overflow-hidden bg-white px-14 transition-all duration-300"
      style={{ maxHeight: open ? toogleHeight.current.scrollHeight : "0" }}
    >
      <div className="grid grid-cols-2 p-5">
        <div className="space-y-5">
          <p className="font-semibold text-primary">{title}</p>
          <div className="grid grid-cols-2">
            {links.map((link, i) => (
              <div key={i} className="space-y-5">
                {link.map((item) => (
                  <a href={item.href} className="block" key={item.name}>
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src={img}
              alt="Bacforce"
              className="w-[max(500px,45.313vw)]"
            />
            <div className="absolute top-1/2 -translate-y-2/4 space-y-2 p-6">
              <h2 className="text-primary">
                Let’s grow together
                <b className="block">Partner with us</b>
              </h2>
              <a
                href="https://bacforce.com/contactus"
                className="flex items-center uppercase text-light-blue"
              >
                get quote
                <Image
                  src={arrowNarrowRight}
                  alt="arrowNarrowRight"
                  className="ml-1 w-[max(30px,1.563vw)]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HeaderFooter />
    </div>
  );
};

export default SubHeader;
