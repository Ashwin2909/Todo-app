import React from "react";
import Todo from "./todo";
const Todolist = ({ filteredTodos, ...restProps }) => {
  return (
    <div className="todo-container">
      <ul className="Todo-list">
        {filteredTodos.map((todo) => (
          <Todo {...restProps} todo={todo} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
