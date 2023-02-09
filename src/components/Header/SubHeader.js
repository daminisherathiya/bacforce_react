import Image from "next/image";
import HeaderFooter from "./HeaderFooter";
import { useRef } from "react";

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
                {link.map((link) => (
                  <a href={link.href} className="block" key={link.name}>
                    {link.name}
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
            <div className="absolute top-1/2 -translate-y-2/4 p-6 space-y-2">
              <h2 className="text-primary">
                Let’s grow together
                <b className="block">Partner with us</b>
              </h2>
              <a href="https://bacforce.com/contactus" className="uppercase text-light-blue block">get quote <span className="long-arrow-icon-css ml-2"></span></a>
            </div>
          </div>
        </div>
      </div>
      <HeaderFooter />
    </div>
  );
};

export default SubHeader;
