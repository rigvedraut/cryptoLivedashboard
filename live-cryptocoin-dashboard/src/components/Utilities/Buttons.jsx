import React from "react";
import "./styles.css";
export function ButtonOutlined({ children, onClick }) {
  return (
    <button className="button button-outlined" onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonFilled({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
