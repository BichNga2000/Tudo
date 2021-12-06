// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors',
//         day: 'Feb 6th at 2:30pm',
//         reminder: true
//     },
//     {
//         id: 12,
//         text: 'meeting',
//         day: 'Feb 7th at 6:30pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'shoping',
//         day: 'Feb 6th at 2:30pm',
//         reminder: false
//     }
// ]
import Todo from "./Todo"

const Todos = ({todos, onDelete, onToggle}) => {
    
    return (
        <>
            {todos.map((todo) => (
            <Todo 
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete} 
            onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Todos
