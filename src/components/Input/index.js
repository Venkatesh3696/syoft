import React from "react";

const Input = ({ className, ...rest }) => {
  return <input {...rest} className={`${className} border-2`} />;
};

export default Input;
