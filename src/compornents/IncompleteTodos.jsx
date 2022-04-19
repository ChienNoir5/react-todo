import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incompleteArea">
      <p className="title">未完了のTODO</p>
      <ul className="list">
        {todos.map((todo, i) => {
          return (
            <li key={todo} className="list__item">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(i)}>完了</button>
              <button onClick={() => onClickDelete(i)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
