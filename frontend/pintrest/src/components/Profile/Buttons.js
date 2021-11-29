import React, { Component } from 'react'
import './Button.css'

class Buttons extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid' style={{backgroundColor:'transparent'}} >
                <div className="dropdown">

                    <button className="btn btn-light rounded-circle " type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
                        <svg className="svg-img" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path></svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{borderRadius: '15px', width:' 180px', height: '150px'}}>

                        <span style={{fontWeight:'lighter'}}> Sort boards by</span>

                        <li><button className="dropdown-item" type="button">A to Z</button></li>

                        <li>

                            <button className="dropdown-item" type="button">Drag and drop</button>

                        </li>

                        <li>

                            <button className="dropdown-item" type="button">Last saved to</button>

                        </li>

                    </ul>





                </div>

                <div className="dropdown">

                    <button className="btn btn-light rounded-circle " type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
                    <svg className="svg-img" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path></svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{borderRadius: '15px', width:' 180px', height: '150px'}}>

                        <span style={{fontWeight:'lighter'}}> Create</span>

                        <li>

                            <button className="dropdown-item" type="button">Pin</button>

                        </li>

                        <li>

                            <button className="dropdown-item" type="button">Board</button>

                        </li>

                    </ul>





                </div>
                </div>
            </div>


        )
    }
}

export default Buttons
