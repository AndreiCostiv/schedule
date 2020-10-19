import React, {useState} from 'react';

//style:
import './TodoItem.sass';

//components:
import Input from '../UIComponents/Input';

//icons:
import ToDo from '../../Icons/ToDo.svg';
import RemoveIcon from '../../Icons/RemoveIcon.svg';

const TodoItem = ({item, RemoveItem, UpdateItem}) => {
    let {task} = item;
    const [text, setText] = useState(task);

    //On focus out save task:
    return (
        <section className = 'TodoItemLabel'>
            <img 
                src = {ToDo} 
                className = 'ToDoCheckedIcon' 
                alt = ''
            />

            <Input 
                className = 'TodoItem' 
                value = {text} 
                type = 'text' 
                onChange = { e => setText(e.target.value)}
                onBlur = { () => UpdateItem(item.id, text)}
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