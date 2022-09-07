import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div >  
      <label>
        
        <div className="todoItem">
          <input className="todoCheckBox" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
          <div>
            -TODO: {todo.name}
          </div>
        </div>
      </label>
      
    </div>
  )
}
