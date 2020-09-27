const { Component } = require("react");

//private routes only
import SingUp from './Routes/Auth/LogIn'
const routes = [
    {
        path: '/',
        component: SingUp
    },
    {
        path: '/settings'
    },
    {
        path: '/about'
    }
];