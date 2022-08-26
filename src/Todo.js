import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div style={
        { backgroundColor:"gray", 
          marginTop: "10px",
          marginBottom:"10px", 
          marginLeft:"auto", 
          marginRight:"auto", 
          width:"50%", 
          borderRadius:"10px",


        }
      }>  
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        -TODO: {todo.name} -ID: {todo.id}
      </label>
      
    </div>
  )
}
