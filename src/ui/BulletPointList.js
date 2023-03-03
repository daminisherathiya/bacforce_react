const BulletPointList = ({ additionalClasses, data }) => {
  const allClasses = `after:content[''] relative pl-7 after:absolute after:left-0 after:h-2.5 after:w-2.5 after:rounded-full after:bg-primary after:bg-contain after:bg-center after:bg-no-repeat${
    additionalClasses ? " " + additionalClasses : ""
  }`;

  return (
    <ul className="space-y-6">
      {data.map((item) => (
        <li
          key={item}
          className={allClasses}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletPointList;
