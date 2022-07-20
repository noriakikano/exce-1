import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";

export const IncompleteTodo = (props) => {
  const { inTodo, onClickDone, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のtodo</p>
      <ul>
        {inTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickDone(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
