import { Children } from "react";

const Button = ({ onclick = () => {}, children }) => {
  return (
    <>
      <button
        onClick={() => onclick()}
        className="bg-white text-black rounded-full p-2 px-4 font-medium cursor-pointer hover:bg-white/95 transition-all active:bg-white/80"
      >
        {Children.map(children, (child) => child)}
      </button>
    </>
  );
};

export default Button;
