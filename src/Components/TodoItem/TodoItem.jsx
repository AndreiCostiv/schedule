import React, {useState} from 'react';

//style:
import './TodoItem.sass';

//icons:
import ToDo from '../../Icons/ToDo.svg';

const TodoItem = ({tasks}) => {
    // finished, listOrder
    let {value} = tasks;
    const [task, setTask] = useState(value);
    
    //On focus out save task
    return (
        <label className = 'TodoItemLabel'>
            <img src={ToDo} alt = 'CheckIcon' className = 'ToDoCheckedIcon'/>

            <input 
                className = 'TodoItem' 
                value = {task} 
                type = 'text' 
                onChange = { e => setTask(e.target.value)}
            />
        </label>
    );
};

export default TodoItem;