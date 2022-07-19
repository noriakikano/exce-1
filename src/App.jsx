import React, { StrictMode } from "react";
import ReactDom from "react-dom";
// import ColufulMessage from "./componets/ColourfulMessage";

const App = () => {
  return (
    <>
      <div>
        <input placeholder="todoを追加" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のtodo</p>
        <ul>
          <div>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のtodo</p>
        <ul>
          <div>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
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
