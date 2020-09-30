import React, {useState, useEffect, useContext} from 'react';

//style:
import './TaskViewer.sass';

//components:
import NewTodoItem from '../NewTodoItem/NewTodoItem';
import TodoItem from '../TodoItem/TodoItem';

//database:
import { db } from '../../Firebase';

//context:
import {AuthContext} from '../../Context/AuthContext';

const TaskViewer = () => {
    const [tasks, setTasks] = useState([]);
    const [readError, setReadError] = useState([]);

    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        try{
            db.ref(`tasks/${currentUser.uid}`).on('value', snapshot => {
                let data = [];
                
                snapshot.forEach(
                    snap => {
                        data.push(snap.val());
                });
                
                setTasks(() => data);
            })
        }
        catch (error) {
            setReadError(error);
            console.log(readError);
        };
        // eslint-disable-next-line
    }, []);
    
    return (
        <section className = 'TaskViewer'>
            <section className = 'TodoList'>
                {tasks.map( (item, i) =>
                    <TodoItem tasks = {item} key ={i}/>
                )}
            </section>

            <NewTodoItem />
        </section>
    );
};

export default TaskViewer;