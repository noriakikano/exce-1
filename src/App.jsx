import React, { StrictMode, useState } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";
import "./style.css";
import { InputTodo } from "./componets/InputTodo";
import { IncompleteTodo } from "./componets/IncompleteTodo";
import { CompleteTodo } from "./componets/CompleteTodo";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 && (
        <p className="maximam">登録の上限は５個まで</p>
      )}
      <IncompleteTodo
        inTodo={incompleteTodo}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo a={completeTodo} onClickAddTodos={onClickAddTodos} />
    </>
  );
};

export default App;
