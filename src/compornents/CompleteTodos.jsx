import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="completeArea">
      <p className="title">完了のTODO</p>
      <ul className="list">
        {todos.map((todo, i) => {
          return (
            <li key={todo} className="list__item">
              <p>{todo}</p>
              <button onClick={() => onClickBack(i)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
