import React, { Component } from "react";
import "./UserInfo.css";
import { Link } from 'react-router-dom';

class ProfileData extends Component {
  render() {
    return (
      <div>
        <div className='Profile-container'>
          <div className='row'>
            <div className='col'></div>
            <div className='col' align='center'>
              <div>
                <img
                  className='profile-image'
                  src={`http://localhost:8000${this.props.avatar}`}
                  alt='profile'
                />
              </div>
              <div className='profile-name pt-1'>
                <h1>{this.props.username}</h1>
              </div>
              <div className='profile-mail pt-1'>
                <span>
                  @{this.props.fname}
                  {this.props.lname}
                </span>
              </div>
              <div className='profile-following-count pt-1'>
                <h6>{this.props.following.length} following</h6>
              </div>

              <div className='share-edit pt-1'>
                <button type='button' className='btn btn-light rounded-pill'>
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>
                    Share
                  </span>
                </button>
                <div>
                  <Link to='/settings'>
                  <button type='button' className='btn btn-light rounded-pill'>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      Edit profile
                    </span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileData;
