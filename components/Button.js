const Button = ({ children, href = "", type, disabled }) => {
  return (
    <>
      {href !== "" ? (
        <a
          href={href}
          className="px-3 py-2 md:px-4 md:py-2 rounded-full font-primary  font-medium text-gray-600 dark:text-gray-200 transition duration-500 lowercase md:uppercase text-base tracking-widest hover:shadow-xl  dark:hover:bg-gray-700 hover:-translate-y-2"
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className="px-3 py-2 md:px-4 md:py-2 rounded-full text-md font-primary font-medium text-gray-500 dark:text-gray-200 transition duration-500 lowercase md:uppercase  tracking-widest hover:shadow-xl  dark:hover:bg-gray-700 hover:-translate-y-2"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
