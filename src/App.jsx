import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";
import "./style.css";

const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setConmpleteTodo] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickDone = (index) => {
    const newTodosDone = [...completeTodo, incompleteTodo[index]];
    setConmpleteTodo(newTodosDone);
    onClickDelete(index);
  };

  const onClickAddTodos = (index) => {
    const newTodos = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newTodos);

    const newTodosDone = [...completeTodo];
    newTodosDone.splice(index, 1);
    setConmpleteTodo(newTodosDone);
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
          {incompleteTodo.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickAddTodos(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
