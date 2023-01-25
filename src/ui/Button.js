const Button = ({ additionalClasses, type = "button", children }) => {
  const allClasses =
    "3xl:px-10 2xl:px-9 xl:px-8 md:px-5 px-4 3xl:py-5 2xl:py-4 xl:py-3 py-2 uppercase text-white " +
    additionalClasses;
  return (
    <div>
      <button type={type} className={allClasses}>
        {children}
      </button>
    </div>
  );
};
export default Button;
