import React, {useState, useCallback, useContext, useEffect} from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import firebase from '../../Firebase';
import validator from 'validator';

//style:
import './Auth.sass';

//Context:
import {AuthContext} from '../../Context/AuthContext';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [signInError, setSignInError] = useState('');

    const IfEmailTyped = (arg) => {
        if(arg === undefined || arg.length === 0){
            setEmailError('Email is required');
            return false;
        }
        
        return true;
    };

    const IfPassTyped = (arg) => {
        if(arg === undefined || arg.length === 0){
            setPassError('Password is required');
            return false;
        }
        
        return true;
    };

    const EmailValidator = (arg) => {
        if(!validator.isEmail(arg)){
            setEmailError('Enter valid email adress');
            return false;
        }
        
        return true;
    };

    const PassValidator = (arg) => {
        if(arg.length < 8 || arg.length > 20){
            setPassError('Password should contain 8-20 symbols');
        }
        else
            return(true);
    };

    const SubmitHandler = useCallback( 
        async e => {
            e.preventDefault();
            const {emailInput, passInput} = e.target.elements;
            
            if(
                IfEmailTyped(emailInput.value) === false 
                || IfPassTyped(passInput.value) === false
                || EmailValidator(emailInput.value) === false
                || PassValidator(passInput.value) === false
            ) 
                return false;

            try{
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(emailInput.value, passInput.value);
            }
            catch (error){
                setSignInError(error.message);
            };
        }, []
    ); 

    useEffect(() => {
        EmailValidator(email);
        PassValidator(pass);

        if(email.length === 0 || pass.length === 0){
            setEmailError('');
            setPassError('');
        }
    }, [email, pass]);

    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return(
            <Redirect to = '/'/>
        );
    };

    return (
        <form onSubmit = {SubmitHandler} className = 'LogInForm'>
            <h1 className = 'AuthHeader'>Log in to continue</h1>

            <input 
                className = 'AuthInput' 
                name = 'emailInput' 
                type='text'
                placeholder = 'Email'
                value = {email}
                onChange = {e => {
                    setEmail(e.target.value)
                }}
            />
        
            <input 
                className = 'AuthInput' 
                name = 'passInput'
                type='password'
                placeholder = 'Password'
                value = {pass}
                onChange = { e => setPass(e.target.value)}
            />

            <span className = 'hint'>
                Your email and password must be valid
            </span>

            <button
                className = 'AuthSubmitBtn'
                type = 'submit'
            >
                Log in
            </button>

            <NavLink className = 'AuthLink' to = '/sign-up'>
                Don't have account? You can create one now.
            </NavLink>
        </form>
    )
};

export default LogIn;