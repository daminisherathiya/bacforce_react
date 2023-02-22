const NumberBackgroundBox = ({ data }) => {
  return (
    <div className="counter-reset grid gap-4 text-left md:grid-cols-2">
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
