import React, {useState} from 'react';

//style:
import './TodoItem.sass';

//icons:
import ToDo from '../../Icons/ToDo.svg';
import RemoveIcon from '../../Icons/RemoveIcon.svg';


const TodoItem = ({item, RemoveItem}) => {
    let {value} = item;
    const [task, setTask] = useState(value);
        
    //On focus out save task:
    return (
        <section className = 'TodoItemLabel'>
            <img 
                src = {ToDo} 
                className = 'ToDoCheckedIcon' 
                alt = ''
            />

            <input 
                className = 'TodoItem' 
                value = {task} 
                type = 'text' 
                onChange = { e => setTask(e.target.value)}
            />

            <img 
                src = {RemoveIcon} 
                onClick = {() => RemoveItem(item.id)}
                className = 'RemoveIcon' 
                alt = ''
            />
        </section>
    );
};

export default TodoItem;