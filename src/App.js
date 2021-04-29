import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/form";
import Todolist from "./Components/todolist";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Pending":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const handleChange = (value) => {
    setInputText(value);
  };

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setInputText(todo.text);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    const todoIndex = todos.findIndex((todo) => todo.id === selectedTodo.id);

    if (todoIndex > -1) {
      todos[todoIndex] = { ...selectedTodo, text: inputText };
      setTodos([...todos]);
    }
    setSelectedTodo()
    setInputText("");
  };


  console.log("----->rendering ");

  return (
    <div className="App">
      <header>
        <h2>Ashwin's Todo list</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setSelectedTodo={setSelectedTodo}
        status={status}
        setStatus={setStatus}
        selectedTodo={selectedTodo}
        updateTodo={updateTodo}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
