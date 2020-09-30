import React from 'react'

// Route layout:
import '../RouteLayout.sass';

// Components:
import MainHeader from '../../Components/MainHeader/MainHeader';
import TaskViewer from '../../Components/TasksViewer/TaskViewer';

const Home = () => {
    return (
        <section className = 'RouteLayout'>
            <MainHeader />

            <TaskViewer />
        </section>
    );
};

export default Home;