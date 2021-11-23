import React, { Component } from 'react'
import { Profile_data2 } from './Profile_data2'
import axios from 'axios'

class Fetch2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users:[],
            errormsg:""

        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/accounts/api/v1/list/3')
        .then(response=>{
            console.log(response)
        this.setState({users:response.data})})
        .catch(error=>{
            console.log(error)
           this.setState({errormsg:"error retreiving data"}) })
    }

    render() {
        const {users,errormsg} = this.state

        return (
            <div>
                <Profile_data2 users={this.state.users} />
                
            </div>
        )
    }
}

export default Fetch2
