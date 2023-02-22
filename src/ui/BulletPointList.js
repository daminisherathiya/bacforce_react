const BulletPointList = ({data}) => {
  return (
    <ul className="space-y-6">
      {data.banner.map((feature) => (
        <li
          key={feature}
          className="after:content[''] relative pl-7 after:absolute after:left-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-2/4 after:rounded after:bg-primary after:bg-contain after:bg-center after:bg-no-repeat"
        >
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default BulletPointList;
