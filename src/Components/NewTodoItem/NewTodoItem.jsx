import React, {useState, useContext} from 'react';

//components:
import Input from '../UIComponents/Input';
import Button from '../UIComponents/Button';

//style:
import './NewTodoItem.sass';

//icon:
import NewTask from '../../Icons/NewTask.svg';
import useFirebase from '../../Hooks/useFirebase';

const NewTodoItem = () => {
    const [data, setData] = useState('');

    const {SaveTask} = useFirebase();

    const OnChange = (e) => 
        setData(e.target.value);

    return (
        <section className = 'NewTodoItem'>
            <Input 
                className = 'InputNewTodoItem' 
                value = {data} name = 'task'
                onChange = {e => OnChange(e)} 
                onKeyUp = {e => SaveTask(e, data, setData)}
                autoComplete = 'false'
                type = 'text'
            />

            <Button 
                type = 'submit' 
                className = 'AddNewTask' 
                onClick = {e => SaveTask(e)} 
            >
                <img 
                    src = {NewTask} 
                    alt = 'NewTask' 
                    className = 'AddNewTaskIcon'
                />
            </Button>
        </section>
    );
};

export default NewTodoItem;