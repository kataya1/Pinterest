import React, { Component } from 'react'
import Fetch2 from './Fetch2'
import BoradFetchTrial from './BoradFetchTrial'
import OrganisedIdea from './OrganisedIdea'
import PinHome from './PinHome'

class Profile extends Component {
    render() {
        return (
            <div>
                <Fetch2 />
                <BoradFetchTrial />
                <hr></hr>
                <OrganisedIdea />
                <PinHome />
            </div>
        )
    }
}

export default Profile
