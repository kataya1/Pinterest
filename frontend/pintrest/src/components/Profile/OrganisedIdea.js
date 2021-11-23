import React, { Component } from 'react'

class OrganisedIdea extends Component {
    render() {
        return (
            <div>
                <div style={{ paddingBottom: '16px', width: '100%' }}>
                    <div style={{ width: '100%' }}>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                <div><div className='col'>
                <div style={{height: "48px",width: "48px"}}>
                <button style={{cursor:'text'}} type="button" className="btn btn-light rounded-pill" >
                    <h5>Unorganised ideas</h5>
                </button>
                   </div>
                </div></div>
                <div>
                <div className='col'>
                <div>
                <button style={{backgroundColor:'#efefefea'}} type="button" className="btn btn-light rounded-pill" >
                   <h5>Organise</h5>
                   </button>
                   </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OrganisedIdea
