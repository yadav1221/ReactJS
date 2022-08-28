import React from 'react'
import './Todo.css'
function Todo() {
  return (
    <div className='todo'>
       <div className="todo-logo">
        <h3>Todo App</h3>
       </div>
        <div className="todo-form">
            <form>
                <input type="text" className='task' name='task'/>
                <input type="button" className='button' value="Enter" />
            </form>
        </div>
        <div className="todo-lists">
            <h3>Task List</h3>
            <ul >
                <li>Take a walk</li>
                <li>Make a Presentation</li>
                <li>Cook Food</li>
                <li>Feed a dog</li>
            </ul>
        </div>
    </div>
  )
}

export default Todo