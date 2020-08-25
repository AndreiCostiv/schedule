import React from 'react';
import {NavLink} from 'react-router-dom';

//Styles:
import './AuthLinks.sass';

const AuthLinks = () => {
    return (
        <nav className = 'AuthLinks'>
            <NavLink 
                className = 'AuthLink' 
                activeClassName = 'ActiveAuthLink'
                to = 'log-in'
            >
                Log in
            </NavLink>

            <NavLink 
                className = 'AuthLink' 
                activeClassName = 'ActiveAuthLink'
                to = 'sign-up'
            >
                Sign up  
            </NavLink>
        </nav>
    );
};

export default AuthLinks;