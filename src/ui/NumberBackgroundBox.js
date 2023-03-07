const NumberBackgroundBox = ({ additionalClasses, data }) => {
  const allClasses = `[counter-reset:my-counter] grid text-left mt-16${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <div className={allClasses}>
      {data.map((item, i) => (
        <div
          key={i}
          className="[counter-increment:my-counter] before:[content:'0'counter(my-counter)] before:absolute before:text-[max(80px,7.813vw)] before:text-[#6969690d] before:bottom-0 before:right-0 before:leading-[max(50px,5.104vw)] before:font-bold relative overflow-hidden border border-gray p-10"
        >
          <h3 className="mb-6 font-semibold text-light-blue">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberBackgroundBox;
