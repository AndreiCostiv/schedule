import React from 'react';

//libraries:
import { ReactSortable } from 'react-sortablejs';

//style:
import './TaskViewer.sass';

//components:
import NewTodoItem from '../NewTodoItem/NewTodoItem';
import TodoItem from '../TodoItem/TodoItem';

//custom hook:
import useFirebase from '../../Hooks/useFirebase';

const TaskViewer = () => {
    const {tasks, UpdateList, RemoveItem, UpdateItem} = useFirebase();
    
    return (
        <section className = 'TaskViewer'>
            
            <section className = 'TodoList'>
                <ReactSortable
                    handle = '.dNdIconBody'
                    list = {tasks}
                    setList = {newData => UpdateList(newData)}
                >
                    {tasks.map( (item) =>
                    <TodoItem
                        item = {item} 
                        key = {item.id}
                        RemoveItem = {RemoveItem}
                        UpdateItem = {UpdateItem}
                    />
                    )}  
                </ReactSortable>
            </section>

            <NewTodoItem />
        </section>
    );
};

export default TaskViewer;