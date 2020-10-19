import React, {useState} from 'react';

const ToDoItem = ({task, taskId, removeItem}) => {
    const [inputData, setInputData] = useState(task);

    return (
        <section
            className = 'ToDoItemBody'
        >
            <section className='ToDoItemCheckBox'></section>
            
            <input
                className = 'ToDoItem'
                value = {inputData}
                onChange = {e => setInputData(e.target.value)}
                onBlur = {() => console.log(inputData)}
            />
                        
            <button
                className = 'ToDoRemoveItem' 
                onClick = {() => removeItem(taskId)} 
            > 
                - 
            </button>
        </section>
    );
};

export default ToDoItem;