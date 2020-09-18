import React from 'react';

const Header = ({children, size}) => {
    return (
        <>
            {(size === 1) && (<h1> {children} </h1>)}
            {(size === 2) && (<h2> {children} </h2>)}
            {(size === 3) && (<h3> {children} </h3>)}
            {(size === 4) && (<h4> {children} </h4>)}
            {(size === 5) && (<h5> {children} </h5>)}
        </>
    );
};

export default Header;
