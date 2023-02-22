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
      <div
        className="overflow-hidden text-base transition-all duration-500"
        style={{ maxHeight: open ? toogleHeight.current.scrollHeight : "0" }}
      >
        <ul ref={toogleHeight} className="ml-4 space-y-[12px] pt-3">
          {links.map((link) =>
            link.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="block">
                  {item.name}
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
