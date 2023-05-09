// todo background
const HireSalesforceDeveloper = ({ children, id, bgColor = "bg-black", additionalClasses }) => {
  return (
    <section
      className={`scroll-mt-28 bg-cover bg-top pb-64 text-white ${bgColor} ${
        additionalClasses ? additionalClasses : ""
      }`}
      id={id}
    >
      {children}
    </section>
  );
};

export default HireSalesforceDeveloper;
