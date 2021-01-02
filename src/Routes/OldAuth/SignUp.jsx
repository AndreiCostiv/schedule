import React, {useCallback, useContext, useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';
import validator from 'validator';

//Context:
import {AuthContext} from '../../Context/AuthContext';

// Components:
import AuthLinks from '../../Components/AuthLinks/AuthLinks';
import Input from '../../Components/UIComponents/Input';
import AuthErrors from '../../Components/AuthErrors/AuthErrors';
import Button from '../../Components/UIComponents/Button'; 

//Style:
import './Auth.sass';

const SingUp = () => {
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
        else
            return(true);
    };

    const SubmitHandler = useCallback( 
        async e => {
            e.preventDefault();
            const {emailInput, passInput} = e.target.elements;
            
            EmailValidator(emailInput.value);
            PassValidator(passInput.value);

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
        )
    }

    return(
        <form onSubmit = {SubmitHandler} className = 'AuthForm'>
            <AuthLinks />

            <Input 
                type = 'text' 
                name = 'emailInput' 
                className = 'AuthInput'
                placeholder = 'email@temp.com'
                value = {email}
                onChange = {e => {
                    setEmail(e.target.value)
                }}
            />

            <AuthErrors>
                {emailError}
            </AuthErrors>

            <Input 
                type = 'password' 
                name = 'passInput' 
                className = 'AuthInput'
                placeholder = 'password'
                value = {pass}
                onChange = { e => setPass(e.target.value)}
            />

            <AuthErrors>
                {passError}
            </AuthErrors>

            <AuthErrors>
                {signUpError}
            </AuthErrors>

            <Button type = 'submit' className = 'AuthBtn'>
                Log In
            </Button>
        </form>
    )
};

export default SingUp;