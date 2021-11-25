import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFlex from '../Button/ButtonFlex'
export default function Welcome() {


    return (
        <div style={{display: 'grid', placeContent: "center", textAlign: "center"}}>
            <h1>Welcome to Pinterest</h1>
            <h3> Home of ideas </h3>
            <div>
            <Link to='/signup'><ButtonFlex>Sign up</ButtonFlex></Link>
            
            <Link to='/login'><ButtonFlex>Sign in</ButtonFlex></Link>
            </div>
        </div>
    )
}
