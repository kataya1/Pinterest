import React, { Component } from 'react'
import axios from 'axios'
import './BoardFetchTri.css'

class BoradFetchTrial extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: [],
            // Bpins:[],
            errormsg: ""

        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/accounts/api/v1/board/3')
            .then(response => {
                
                this.setState({ boards: response.data })
                // this.setState({ Bpins: response.data[0].pins })
                // console.log(response.data[1].pins)
              
            })
            .catch(error => {
                console.log(error)
                this.setState({ errormsg: "error retreiving data" })
            })
    }

    render() {
        const { boards, errormsg } = this.state
        return (
            <div>
                <div className="board-container">
                    
                    
                {
                boards.map(board =>
                    <section className="Bcontainer">
                        <div className='board-grid' key={board.id}>{board.pins.map((pin, index) => <div key={index}>
                            <div>
                             <img className='board-image2' src={`http://localhost:8000${pin.image}`}/>
                           
                        </div></div>)}
                         </div><p style={{fontWeight:'bold',fontSize:'18px'}}>{board.name}</p></section>)               
    }
    

 
                
            </div>
            </div>
        )
    }
}

export default BoradFetchTrial
