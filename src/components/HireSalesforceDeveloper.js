import SectionHeading from "@/ui/SectionHeading";

// todo background
const HireSalesforceDeveloper = ({ children, id }) => {
  return (
    <section
      className="scroll-mt-28 bg-black bg-cover bg-top pb-64 text-center text-white"
      id={id}
    >
      
      {children}
    </section>
  );
};

export default HireSalesforceDeveloper;
