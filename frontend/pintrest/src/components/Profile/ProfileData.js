import React, { Component } from 'react'
import './UserInfo.css'

class ProfileData extends Component {
    render() {
        return (
            <div>
                <div className="Profile-container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col" align="center">
                        
                                <div >
                                    <img className="profile-image" src={`http://localhost:8000${this.props.avatar}`} />
                                </div>
                                <div className="profile-name pt-1">
                                    <h1>{this.props.username}</h1>
                                </div>
                                <div className="profile-mail pt-1">
                                    <span>@{this.props.fname}{this.props.lname}</span>
                                </div>
                                <div className="profile-following-count pt-1">
                                    <h6>{this.props.following.length} following</h6>
                                </div>
                                
                            
                            
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
            </div>
            
        )
    }
}

export default ProfileData
