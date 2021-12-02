import React, { Component } from 'react'

const media = localStorage.getItem('media')
 class ProfileData2 extends Component {
    render() {
        return (
            <div>
                 <div>
        <div className='Profile-container'>
          <div className='row'>
            <div className='col'></div>
            <div className='col' align='center'>
              <div>
                <img
                  className='profile-image'
                  src={`${media}${this.props.avatar}`}
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
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default ProfileData2
