import React from 'react'
import'./Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const STYLES = [
    'btn--standard',
    'btn--icon',
    'btn--text',
    'btn--red',
    'btn--down',
    'btn--logo',
    'btn--none'
]

const ButtonFlex = ({children,type,onClick,buttonStyle}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]   
    return(
        <React.Fragment>
            <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type} >
                {children}
            </button>
        </React.Fragment>
    )
}
export default ButtonFlex