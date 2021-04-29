import React, {useState,useEffect} from "react";
import './App.css';
import Form from "./Components/form";
import Todolist from "./Components/todolist";
function App() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos]= useState([]);
  useEffect(()=>{
    getLocalTodos();
    },[] 
  );  

  useEffect(()=>{
      filterHandler();
      saveLocalTodos();
    },[todos,status]
  );  
  const filterHandler = () => {
    switch(status) {
          case 'Completed':
            setFilteredTodos(todos.filter(todo=> todo.completed === true ));
            break;
          case 'Pending':
            setFilteredTodos(todos.filter(todo=> todo.completed === false ));
            break;
          default:
            setFilteredTodos(todos);
            break;
         };
  }
  const saveLocalTodos =() =>{
    localStorage.setItem('todos',JSON.stringify(todos));
  };
  const getLocalTodos =() =>{
    if (localStorage.getItem('todos')===null){
        localStorage.setItem('todos',JSON.stringify([]));
    }else{
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
      <h2>Ashwin's Todo list</h2>
      </header>
      <Form 
        inputText ={inputText} 
        todos ={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        status={status} 
        setStatus={setStatus} 
      />
      <Todolist 
        todos ={todos} 
        setTodos ={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
