import React, {useState, useContext} from 'react';

//components:
import Input from '../UIComponents/Input';
import Button from '../UIComponents/Button';

//style:
import './NewTodoItem.sass';

//icon:
import NewTask from '../../Icons/NewTask.svg';

//context:
import {AuthContext} from '../../Context/AuthContext';

//database:
import {db} from '../../Firebase';

const NewTodoItem = () => {
    const [data, setData] = useState('');
    const {currentUser} = useContext(AuthContext);

    const OnChange = (e) => {
        setData(e.target.value);
    };

    const  SaveTask = async (e) => {
        e.preventDefault();

        if( data.length === 0 || e.keyCode !== 13)
            return false;
            
        try{
            await db.ref(`tasks/${currentUser.uid}`).push({
                value: data,
                finished: false,
                listOrder: false
            });
            setData('');
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <section className = 'NewTodoItem'>
            <Input 
                className = 'InputNewTodoItem' 
                value = {data} name = 'task'
                onChange = {e => OnChange(e)} 
                onKeyUp = {e => SaveTask(e)}
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