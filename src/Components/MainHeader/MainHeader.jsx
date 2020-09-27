import React from 'react';
import {NavLink} from 'react-router-dom';
import firebase from '../../Firebase';

//style:
import './MainHeader.sass';

//components:
import Header from '../UIComponents/Header';

//icons:
import AboutUs from '../../Icons/AboutUs.svg';
import Settings from '../../Icons/Settings.svg';
import SignOut from '../../Icons/Sign_Out.svg';

const MainHeader = () => {
    return (
        <menu className = 'headerMenu'>
            <NavLink to = '/' className = 'headerLink'>
                <Header size = {1} className = 'headerTitle'>
                    Schedule
                </Header>
            </NavLink>
            
            <NavLink to = '/about' className = 'headerIcon'>
                <img 
                    src ={AboutUs}  
                    alt = 'about' 
                    className = 'aboutIcon'
                />
            </NavLink>
            
            <NavLink to = '/settings' className = 'headerIcon'>
                <img 
                    src ={Settings} 
                    alt = 'settings' 
                />
            </NavLink>

            <img 
                src ={SignOut} 
                alt = 'sing out'
                className = 'headerIcon' 
                onClick = { () => firebase.auth().signOut()}
            />
        </menu>
    );
};

export default MainHeader;
