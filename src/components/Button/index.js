import { useEffect, useState } from "react";

const Button = ({ children, disabled, onClick, value, ...rest }) => {
  return (
    <button disabled={disabled} onClick={onClick} value={value} {...rest}>
      {children}
    </button>
  );
};

export default Button;
