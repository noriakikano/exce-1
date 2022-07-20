import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";

export const CompleteTodo = (props) => {
  const { a, onClickAddTodos } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <ul>
        {a.map((todo, index) => {
          return (
            <div key="todo" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickAddTodos(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
