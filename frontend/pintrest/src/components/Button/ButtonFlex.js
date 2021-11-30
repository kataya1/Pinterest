import React from 'react'
import'./Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const STYLES = [
  "btn--standard",
  "btn--icon",
  "btn--text",
  "btn--red",
  "btn--down",
  "btn--logo",
  "btn--none",
];

const ButtonFlex = ({ children, type, buttonStyle, onClick }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
export default ButtonFlex;
