import React, {useState, useEffect, createContext} from 'react';

//database:
import firebase from '../Firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(null);
    
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
        
    }, []);

    if(pending){
        return <>Loading...</>
    }
    else if(!pending){        
        return(
            <AuthContext.Provider
                value = {{
                    currentUser
                }}
            >
            {children}
            </AuthContext.Provider>
        );
    }
};