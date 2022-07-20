import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";
import "./style.css";

const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incompleteTodo, setIncompleteTodo] = useState(["aaa", "iii"]);
  const [completeTodo, setConmpleteTodo] = useState(["ううう", "iii"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを追加"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
