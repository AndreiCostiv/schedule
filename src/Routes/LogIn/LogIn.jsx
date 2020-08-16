import React, {useCallback, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';

//context:
import {AuthContext} from '../../Context/AuthContext';

const LogIn = () => {
    const SubmitHandler = useCallback( 
        async e => {
            e.preventDefault();
            const {email, pass} = e.target.elements;

            try{
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, pass.value);
            }
            catch (error){
                alert(error);
            }
        }
    );
    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return(
            <Redirect to = '/'/>
        )
    }

    return(
        <form onSubmit = {SubmitHandler}>
            <input type = 'text' name = 'email' />
            <input type = 'password' name = 'pass'/>

            <button type = 'submit'>
                Log In
            </button>
        </form>
    );
};

export default LogIn;