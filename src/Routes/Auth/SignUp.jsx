import React, {useCallback, useContext, useState, useEffect} from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import firebase from '../../Firebase';
import validator from 'validator';

//style:
import './Auth.sass';
import './AuthMobile.sass';

//Context:
import {AuthContext} from '../../Context/AuthContext';

//components:
import Header from '../../Components/UIComponents/Header';
import Input from '../../Components/UIComponents/Input';
import Button from '../../Components/UIComponents/Button';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [signUpError, setSignUpError] = useState('');

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
        else if (!/\d/.test(arg)){
            setPassError('Your must add digits to your password');
            return false;
        }
        else if(arg.length >= 8 & arg.length <= 20){
            setPassError('');
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
                    .createUserWithEmailAndPassword(emailInput.value, passInput.value);
            }
            catch (error){
                setSignUpError(error.message)
            }
        },
        []
    );
    
    useEffect(() => {
        if(email.length === 0 || pass.length === 0){
            setEmailError('');
            setPassError('');
        }
    }, [email, pass]);

    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return(
            <Redirect to = '/'/>
        )
    }

    return (
        <form className = 'SingUpForm' onSubmit = {SubmitHandler}>
            <Header size = {1} className = 'AuthHeader'>Sign up</Header>

            <Input
                autoComplete = 'false'
                className = 'AuthInput'
                name = 'emailInput'
                type='text'
                placeholder = 'Email'
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                onBlur = {e => EmailValidator(e.target.value)}
            />
        
            <Input
                autoComplete = 'false'
                className = 'AuthInput'
                name = 'passInput'
                type='password'
                placeholder = 'Password'
                value = {pass}
                onChange = { e => setPass(e.target.value)}
                onBlur = {e => PassValidator(e.target.value)}
            />

            <span className = 'AuthHint'>
                Your email and password must be valid
            </span>

            <span className = 'AuthError'>
                {emailError.length > 0 && emailError}
                {passError.length > 0 && passError}
                {signUpError.length > 0 && signUpError}
            </span>

            <Button
                className = 'AuthSubmitBtn'
                type = 'submit'
            >
                Create account
            </Button>

            <NavLink className = 'AuthLink' to = '/log-in'>
                If you have account already, log in to start.
            </NavLink>
        </form>
    )
};

export default SignUp;
