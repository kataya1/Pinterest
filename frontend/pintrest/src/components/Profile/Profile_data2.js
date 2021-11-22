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
                <div style={{ paddingBottom: '16px', width: '100%' }}>
                    <div style={{ width: '100%' }}>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div><div className='col'>
                        <div style={{ height: "48px", width: "48px" }}>
                            <button type="button" className="btn btn-light rounded-circle" >
                                <svg className="svg-img" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path></svg>
                            </button>
                        </div>
                    </div></div>
                    <div></div>
                    <div>
                        <div className='col'>
                            <div style={{ height: "48px", width: "48px" }}>
                                <button type="button" className="btn btn-light rounded-circle" >
                                    <svg className="svg-img" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path></svg>
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
