import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'>{
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${disabled ? 'bg-red-600/55' : 'bg-green-600'} cursor-pointer p-1 rounded-md`}>
            {children}
        </button>
    );
};

export default Button;