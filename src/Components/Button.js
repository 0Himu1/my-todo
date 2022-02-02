import React from "react";

export default function Button({ text, type, className, handelChange }) {
  return (
    <button type={type} className={className} onClick={handelChange}>
      {text}
    </button>
  );
}
