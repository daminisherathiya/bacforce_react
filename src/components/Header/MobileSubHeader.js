import { useRef } from "react";

const MobileSubHeader = ({ service, open }) => {
  const toogleHeight = useRef();
  const { links, title } = service;
  return (
    <>
      <button
        className={`relative w-full text-left before:absolute before:right-0 before:top-2/4 before:h-[2px] before:w-[15px] before:-translate-y-2/4 before:rotate-[270deg] before:bg-[black] before:transition-all before:duration-300 before:ease-in before:content-[""] after:absolute after:right-0 after:top-2/4 after:h-[2px] after:w-[15px] after:-translate-y-2/4 after:bg-[black] after:transition-all after:duration-300 after:ease-in after:content-[""] ${
          open ? "before:!rotate-0" : ""
        }`}
      >
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
