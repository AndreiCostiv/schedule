import React, {useState, useEffect, useContext} from 'react'

//database:
import {db} from '../../Firebase';

//context:
import {AuthContext} from '../../Context/AuthContext';

//compoennts:
import ToDoItem from './ToDoItem';

//style:
import './ToDoList.sass';

const ToDoList = () => {
    const {currentUser} = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const CreateTask = (e) => {
        e.preventDefault();

        if (newTask.length > 0) {
            try {
                db.ref(`tasks/${currentUser.uid}`).push({
                    task: newTask,
                    ifFinished: false
                })                
            } catch (error) {
                console.log(error);
            }
        }
    };

    const getData = async () => {
        try {
            await db.ref(`tasks/${currentUser.uid}`).on('value', snapshot => {
                let receivedData = [];

                snapshot.forEach(item => {
                    receivedData.push({
                        task: item.val().task,
                        ifFinished: item.val().ifFinished,
                        key: item.key
                    })
                });

                setTasks(() => receivedData);
            })
        } catch (error) {
            console.log(error);
        }
    };

    const removeItem  = async (key) => {
        try {
            db.ref(`tasks/${currentUser.uid}`).child(`${key}`).remove()
        } catch (error) {
            console.log(error);
        }
    };

    const updateItem = (key, newData) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <section className = 'ToDoComponent'>
            <section className = 'ToDoList'>
                {tasks.map( item =>
                    <ToDoItem
                        key = {item.key}
                        task = {item.task}
                        taskId = {item.key}
                        removeItem = {removeItem}
                    />
                )}
            </section>
            
            <form
                className = 'NewToDoItem' 
                onSubmit = { e => CreateTask(e)} 
            >
                <input 
                    onChange = { e => setNewTask(e.target.value)} 
                    value = {newTask}
                    type='text'
                />
 
                <button type = 'submit'>Save</button>
            </form>

        </section>
    );
};

export default ToDoList;
