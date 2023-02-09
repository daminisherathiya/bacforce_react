import { useRef } from "react";

const MobileSubHeader = ({ service, open }) => {
  const toogleHeight = useRef();
  const { links, title } = service;
  return (
    <>
      <button className={`submenu w-full text-left ${open ? "open" : ""}`}>
        {title}
      </button>
      {/* https://stackoverflow.com/questions/73833316/add-transition-to-accordion-with-react-tailwind */}
      <div className="overflow-hidden transition-all duration-500 text-base" style={{ maxHeight: open ? toogleHeight.current.scrollHeight : "0" }}>
        <ul
          ref={toogleHeight}
          className="ml-4 pt-3 space-y-[12px]"
        >
          {links.map((link) =>
            link.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block">
                  {link.name}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default MobileSubHeader;
