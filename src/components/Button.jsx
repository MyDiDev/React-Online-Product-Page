import { Children } from "react";

const Button = ({ onclick = () => {}, styles, children }) => {
  return (
    <>
      <button
        style={styles}
        onClick={() => onclick()}
        className="bg-white text-black rounded-full p-2 px-4 font-medium cursor-pointer hover:bg-white/95 transition-all active:bg-white/80"
      >
        {Children.map(children, (child) => child)}
      </button>
    </>
  );
};

export default Button;
