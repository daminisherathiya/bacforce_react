const MobileSubHeader = ({ services, open }) => {
  const { links, title } = services;
  return (
    <>
      <button className={`submenu w-full text-left ${open ? "open" : ""}`}>{title}</button>
      <ul className={`ml-4 space-y-3 ${open ? "" : "hidden"}`}>
        {links.map((link) =>
          link.map((link) => (
            <li key={link.name} className="text-[max(14px,1.758vw)]">
              <a href={link.url} className="block">
                {link.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default MobileSubHeader;
