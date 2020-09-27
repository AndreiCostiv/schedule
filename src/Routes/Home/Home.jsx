import React from 'react'

// Route layout:
import '../RouteLayout.sass';

// Components:
import MainHeader from '../../Components/MainHeader/MainHeader';

const Home = () => {
    return (
        <section className = 'RouteLayout'>
            <MainHeader/>
        </section>
    );
};

export default Home;