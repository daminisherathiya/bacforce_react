const Button = ({ additionalClasses, type = "button", children }) => {
  const allClasses =
    "px-10 py-5 uppercase text-white text-base inline-block text-center " +
    additionalClasses;
  return (
    <div>
      <button className={allClasses}>
        {children}
      </button>
    </div>
  );
};
export default Button;

