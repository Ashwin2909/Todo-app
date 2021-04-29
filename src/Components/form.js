import React from "react";
const Form = (props) => {
  const {
    setInputText,
    todos,
    setTodos,
    inputText,
    setStatus,
    selectedTodo,
    updateTodo,
  } = props;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => setStatus(e.target.value);

  const clearInput = (e) => setInputText("");

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={clearInput} className="todo-button" type="submit">
        <i className="fas fa-cross"></i>
      </button>
      {selectedTodo ? (
        <button onClick={updateTodo} className="todo-button" type="submit">
          <i className="fas fa-check"></i>
        </button>
      ) : (
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      )}
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
