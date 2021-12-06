
// import React from "react"
import { useState } from 'react'
import Header from "./components/Header"
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'




const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Doctors',
      day: 'Feb 6th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'meeting',
      day: 'Feb 7th at 6:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'shoping',
      day: 'Feb 6th at 2:30pm',
      reminder: false
    }
  ])


  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() *10000) + 1
    
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  //Delete Todo 
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo)
    )
  }


  return (
    <div className='container'>
      <Header 
      onAdd = {()=>setShowAddTodo(!showAddTodo)} 
      showAdd={showAddTodo}/>
      {showAddTodo && <AddTodo onAdd = {addTodo}/>}
      {todos.length > 0 ?
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} /> : 'No todo to show'
      }
    </div>
  )
}



// class App extends React.Component{
//   render(){
//     return <h1>Hello form a class</h1>
//   }
// }


export default App