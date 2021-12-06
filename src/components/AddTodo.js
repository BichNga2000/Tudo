import { useState } from "react"


const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a todu')
            return
        }
        
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    
    return (
        <form className='add-form' onSubmit ={ onSubmit}> 
            <div className='form-control'>
                <label>Todo </label>
                <input type='text' placeholder='Add Todo' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>             
            <div className='add-control'>
                <label>Day & Time </label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>             
            <div className='add-control'>
                <label>Set Reminder </label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>             
            <input type='submit' value='Save Todo'></input>
        </form>
    )
}

export default AddTodo

