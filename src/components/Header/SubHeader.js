import Image from "next/image";
import HeaderFooter from "./HeaderFooter";

const SubHeader = ({ open, service }) => {
  const { title, links, img } = service;
  return (
    <div
      className={`absolute left-0 top-full bg-white px-[max(15px,2.917vw)] ${
        open ? "" : "hidden"
      }`}
    >
      <div className="text-charcoal grid grid-cols-2 p-[max(10px,1.042vw)]">
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
              <h2 className="text-[max(28px,1.875vw)] leading-normal">
                Let’s grow together
                <b className="block">Partner with us</b>
              </h2>
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
