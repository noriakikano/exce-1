import React, { StrictMode } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="todoを追加" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
