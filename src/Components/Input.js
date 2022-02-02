import React from "react";

export default function Input({ title, type, placeholder, ...rest }) {
  return (
    <>
      <h2>{title}</h2>
      <input type={type} placeholder={placeholder} {...rest} />
    </>
  );
}
