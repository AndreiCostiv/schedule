import React from 'react'

const Button = ({type, className, children, ...rest}) => {
    return (
        <button type = {type} className = {className} {...rest}>
            {children}
        </button>
    );
};

export default Button;