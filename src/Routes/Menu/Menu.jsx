import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.sass';

const Menu = () => {

    React.useEffect(() => {
    }, [])
    return (
        <menu className = 'Menu'>
            {/* <h1 className = 'Logo'>Tasksful</h1>

            <NavLink to = '/notes'>Notes</NavLink>
            <NavLink to = '/running_list'>Runnig list</NavLink>
            <NavLink to = '/settings'>Settings</NavLink> */}
        </menu>
    );
};

export default Menu;