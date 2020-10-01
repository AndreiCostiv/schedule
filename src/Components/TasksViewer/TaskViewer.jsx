import React from 'react';

//style:
import './TaskViewer.sass';

//components:
import NewTodoItem from '../NewTodoItem/NewTodoItem';
import TodoItem from '../TodoItem/TodoItem';

//custom hook:
import useFirebase from '../../Hooks/useFirebase';

const TaskViewer = () => {
    const {tasks, RemoveItem} = useFirebase();

    return (
        <section className = 'TaskViewer'>
            <section className = 'TodoList'>
                {tasks.map( (item, i) =>
                    <TodoItem 
                        item = {item} 
                        key ={i}
                        RemoveItem = {RemoveItem}
                    />
                )}
            </section>

            <NewTodoItem />
        </section>
    );
};

export default TaskViewer;