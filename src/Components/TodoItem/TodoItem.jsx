import React, {useState} from 'react';

//style:
import './TodoItem.sass';

//components:
import Input from '../UIComponents/Input';

//icons:
// import ToDo from '../../Icons/ToDo.svg';
import RemoveIcon from '../../Icons/RemoveIcon.svg';

const TodoItem = ({item, RemoveItem, UpdateItem}) => {
    let {task} = item;
    const [text, setText] = useState(task);

    const OnChange = e => {
        if (e.target.value.length > 20)  
            setText(e.target.value.slice('0', '20'));
        else
            setText(e.target.value);
    };

    return (
        <section draggable = 'true' className = 'TodoItemLabel'>
            {/* <img 
                src = {ToDo} 
                className = 'ToDoCheckedIcon' 
                alt = ''
            /> */}

            <Input 
                className = 'TodoItem' 
                value = {text} 
                type = 'text' 
                onChange = { e => OnChange(e)}
                onBlur = { () => UpdateItem(item.id, text)}
            />

            <img 
                onClick = {() => RemoveItem(item.id)}
                src = {RemoveIcon} 
                className = 'RemoveIcon' 
                alt = ''
            />
        </section>
    );
};

export default TodoItem;