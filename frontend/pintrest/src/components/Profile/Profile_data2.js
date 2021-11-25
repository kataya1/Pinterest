import React, { Component } from 'react'
import './UserInfo.css'

export class Profile_data2 extends Component {

    render() {
        return (
            <div className="Profile-container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col" align="center">
                        {this.props.users.map((user) => {
                            return (<div>
                                <div >
                                    <img className="profile-image" src={`http://localhost:8000${user.avatar}`} />
                                </div>
                                <div className="profile-name pt-1">
                                    <h1>{user.username}</h1>
                                </div>
                                <div className="profile-mail pt-1">
                                    <span>@{user.first_name}{user.last_name}</span>
                                </div>
                                <div className="profile-following-count pt-1">
                                    <h6>{user.following.length} following</h6>
                                </div>
                            </div>
                            )
                        })
                        }
                        <div className="share-edit pt-1">

                            <button type="button" className="btn btn-light rounded-pill" ><h6>Share</h6></button>
                            <div>
                                <button type="button" className="btn btn-light rounded-pill" ><h6>Edit profile</h6></button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}
