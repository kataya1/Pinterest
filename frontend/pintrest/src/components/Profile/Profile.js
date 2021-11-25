import React, { Component } from 'react'
import Fetch2 from './Fetch2'
import BoradFetchTrial from './BoradFetchTrial'
import OrganisedIdea from './OrganisedIdea'
import PinHome from './PinHome'
import Buttons from './Buttons';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
                <Fetch2 />
                <Buttons/>
                <BoradFetchTrial />
                <hr></hr>
                <OrganisedIdea />
                <PinHome />
               
            </div>
        )
    }
}

export default Profile
