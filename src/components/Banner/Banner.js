import TrustedCompany from "@/components/TrustedCompany";

const Banner = ({ additionalClasses, id, children, cols = "md:grid-cols-11" }) => {
  const allClasses = `bg-light-blue pt-60 pb-40 text-left${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <>
      <section className={allClasses} id={id}>
        <div className={`grid gap-16 ${cols} md:gap-0`}>
          {children}
        </div>
      </section>
      <TrustedCompany />
    </>
  );
};

export default Banner;
