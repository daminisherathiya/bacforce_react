const Button = ({ additionalClasses, type = "button", children }) => {
  const allClasses =
    "px-10 py-4 capitalize text-white text-base inline-block text-center " +
    additionalClasses;
  return (
    <div>
      <button className={allClasses} type={type}>
        {children}
      </button>
    </div>
  );
};
export default Button;

