import React, { Component } from 'react'
import axios from 'axios';
import BoradFetchTrial from './BoradFetchTrial';
import Buttons from './Buttons';
import OrganisedIdea from './OrganisedIdea';
import PinHome from './PinHome';
import ProfileData from './ProfileData';


class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            errormsg: ""

        }
    }

    componentDidMount() {
        this.bringUserData();
    };

    bringUserData = () => {
        const host="http://localhost:8000"
        const path='/accounts/api/v1'
        const endpoint=`/users/${this.props.id}`
       
        axios.get(`${host}${path}${endpoint}`, {
            headers: {
                "Content-type": "application/json"
            },
        })
            .then(response => { this.setState({ users: [response.data,] }, () => console.log(this.state)) })
            .catch(error => {
                console.log(error)
                this.setState({ errormsg: "error retreiving data" })
            })
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) => {

                    return (<div>
                        <ProfileData
                            userId={user.id}
                            username={user.username}
                            avatar={user.avatar}
                            fname={user.first_name}
                            lname={user.last_name}
                            following={user.following}

                        />
                    <Buttons/>
                    <BoradFetchTrial id={user.id}/>
                    <hr></hr>
                    <OrganisedIdea />
                    <PinHome id={user.id}/>
                       
                    </div>)

                })}
            </div>
        )
    }
}

export default UserProfile
