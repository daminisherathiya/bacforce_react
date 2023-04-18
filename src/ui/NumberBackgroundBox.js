const NumberBackgroundBox = ({ data }) => {
  return (
    <div className="relative h-full overflow-hidden border border-gray p-10 [counter-increment:my-counter] before:absolute before:bottom-0 before:right-0 before:text-[max(80px,7.813vw)] before:font-bold before:leading-[max(50px,5.104vw)] before:text-[#6969690d] before:[content:'0'counter(my-counter)]">
      <h3 className="mb-6 font-semibold text-light-blue">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default NumberBackgroundBox;
