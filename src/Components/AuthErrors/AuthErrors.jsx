import React from 'react';

import './AuthErrors.sass';

const AuthErrors = ({children}) => {
    return (
        <section className = 'AuthErors'>
            {children}          
        </section>
    );
};

export default AuthErrors;
