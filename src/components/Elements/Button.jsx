import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const Button = (props) => {
  const { children, className, style, type } = props;
  return (
    <button
      type={type}
      style={style}
      // Pastikan tidak ada class shadow-md atau sejenisnya di sini
      className={`${className} p-3 rounded-md font-bold transition-all hover:opacity-90`}
    >
      {children}
    </button>
  );
};

export default Button;