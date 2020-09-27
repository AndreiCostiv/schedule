import React from 'react';

const Header = ({children, size, ...rest}) => {
    return (
        <>
            {(size === 1) && (<h1 {...rest}> {children} </h1>)}
            {(size === 2) && (<h2 {...rest}> {children} </h2>)}
            {(size === 3) && (<h3 {...rest}> {children} </h3>)}
            {(size === 4) && (<h4 {...rest}> {children} </h4>)}
            {(size === 5) && (<h5 {...rest}> {children} </h5>)}
        </>
    );
};

export default Header;
