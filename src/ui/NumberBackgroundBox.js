const NumberBackgroundBox = ({ additionalClasses, data }) => {
  const allClasses = `counter-reset grid text-left mt-16${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <div className={allClasses}>
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-number relative overflow-hidden border border-gray p-10"
        >
          <h3 className="mb-6 font-semibold text-light-blue">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberBackgroundBox;
