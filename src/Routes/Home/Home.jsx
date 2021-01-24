import React from 'react'

// Route layout:
import '../RouteLayout.sass';

//Routes:
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <section className = 'Homepage'>
            <Menu />
        </section>
    );
};

export default Home;