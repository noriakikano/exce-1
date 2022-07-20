import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="todoを追加"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
