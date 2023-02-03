const Button = ({ additionalClasses, href = "#", children }) => {
  const allClasses =
    "px-[max(15px,2.083vw)] py-[max(12px,0.938vw)] uppercase text-white text-[max(12px,0.833vw)] " +
    additionalClasses;
  return (
    <div>
      <a href={href} className={allClasses}>
        {children}
      </a>
    </div>
  );
};
export default Button;
