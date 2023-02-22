import TrustedCompany from "@/components/TrustedCompany";

const Banner = ({ id, children }) => {
  return (
    <>
      <section className="bg-light-blue pt-60 pb-40" id={id}>
        <div className="grid gap-16 md:grid-cols-9 md:gap-5">{children}</div>
      </section>
      <TrustedCompany />
    </>
  );
};

export default Banner;
