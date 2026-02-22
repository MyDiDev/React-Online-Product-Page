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

export const RemoveButton = ({
  onclick = () => {},
  styles,
  rounded,
  children,
}) => {
  return (
    <>
      <button
        style={styles}
        onClick={() => onclick()}
        className={
          rounded
            ? "bg-red-600 text-white rounded-full p-2 font-medium cursor-pointer hover:bg-red-800/95 transition-all active:bg-red-900/80 w-[55px] h-[55px]"
            : "bg-red-600 text-white rounded-full p-2 font-medium cursor-pointer hover:bg-red-800/95 transition-all active:bg-red-900/80"
        }
      >
        {Children.map(children, (child) => child)}
      </button>
    </>
  );
};

export default Button;
