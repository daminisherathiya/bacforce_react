import Image from "next/image";
import HeaderFooter from "./HeaderFooter";
import { useRef } from "react";

const SubHeader = ({ open, service }) => {
  const toogleHeight = useRef();
  const { title, links, img } = service;
  return (
    <div
      ref={toogleHeight}
      className="absolute left-0 top-full z-30 overflow-hidden bg-white px-[max(15px,2.917vw)] transition-all duration-300"
      style={{ maxHeight: open ? toogleHeight.current.scrollHeight : "0" }}
    >
      <div className="grid grid-cols-2 p-[max(10px,1.042vw)] text-secondary">
        <div className="space-y-[max(10px,1.042vw)]">
          <p className="text-black font-semibold">{title}</p>
          <div className="grid grid-cols-2">
            {links.map((link, i) => (
              <div key={i} className="space-y-[max(10px,1.042vw)]">
                {link.map((link) => (
                  <a href={link.url} className="block" key={link.name}>
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
            <div className="absolute top-1/2 -translate-y-2/4 p-[max(18px,1.250vw)]">
              <h3>
                Let’s grow together
                <b className="block">Partner with us</b>
              </h3>
              <a className="uppercase">get quote</a>
            </div>
          </div>
        </div>
      </div>
      <HeaderFooter />
    </div>
  );
};

export default SubHeader;
