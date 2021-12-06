// import React from 'react'

const Todo = ({ todo, onDelete, onToggle }) => {
    return (
        <div 
        className={`todo ${todo.reminder ?
        'reminder' : ''}`} 
        onDoubleClick={() => onToggle(todo.id)}>
            <h3 onClick={() => onDelete(todo.id)}>{todo.text}</h3>
            <p>{todo.day}</p>
        </div>
    )
}

export default Todo
