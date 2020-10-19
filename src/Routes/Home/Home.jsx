import React from 'react'

// Route layout:
import '../RouteLayout.sass';

// Components:
import MainHeader from '../../Components/MainHeader/MainHeader';
import ToDoList from '../../Components/ToDoList/ToDoList';
import TaskViewer from '../../Components/TasksViewer/TaskViewer';


const Home = () => {
    return (
        <section className = 'RouteLayout'>
            <MainHeader/>

            {/* <ToDoList /> */}
            <TaskViewer />
        </section>
    );
};

export default Home;