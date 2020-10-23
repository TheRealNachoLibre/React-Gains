import React from 'react'
import '../Components/Buttons.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]
export const Button = ({
    children,
    type,
    onClick,
    buttonSytle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonSytle) ? buttonSytle : STYLES[0]
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
