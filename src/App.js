import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4 } from 'uuid';
import "./style.css"


const LOCAL_STORAGE_KEY = [];

  

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()




  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //alert("INSIDE GET-ITEM USEEFFECT!");
    if (storedTodos) {setTodos( prevTodos => [...prevTodos, ...storedTodos] );  /*console.log(storedTodos);*/ /*console.log("Prev is stored Todos if storedTodos");*/}
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    //alert("INSIDE SET-ITEM USEEFFECT!");
  }, [todos])


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  
  function clearAll(){
    setTodos([])
  }
/*
  function handleEnter(key) {
    if(key === "enter"){
      handleAddTodo();
    }

    var inputSelect = document.getElementById("inputField");
    inputSelect.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("AddTodoBtn").click();
    }


  });



  } 
*/

  return (
    <>
      <h1>Todo list: </h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input id="inputField" /*onKeyPress={handleEnter(key)}*/ ref={todoNameRef} type="text" placeholder="ADD YOUR TODO HERE"/>
      <button id="AddTodoBtn" onClick={handleAddTodo} style={{marginRight:"10px",}}>Add todo</button>
      <br/>
      <button onClick={handleClearTodos} style={{marginTop:"10px",marginBottom:"10px",}}>Clear completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left todo</div>
      <button onClick={clearAll} style={{marginRight:"100px", float:"right"}}>CLEAR ALL</button>
    </>
  );
}

export default App;
