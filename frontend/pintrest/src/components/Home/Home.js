import axios from "axios";
import React from 'react';
import Masonry from 'react-masonry-css'
import PinDisplay from "./PinDisplay";
import'./logo.css'
import'./pin.css'
import AnQ from "./Anq-btns";

class Home extends React.Component {
constructor(){
    super()
    this.state = {
        events: []
    }
    this.myRef = React.createRef()
}

componentDidMount(){
    this.Home();
};

Home= () =>  {
var self = this;  
axios.get('http://localhost:8000/accounts/api/v1/home' )
.then(res => {
 
    self.setState({events: res.data},() => console.log(self.state))
        
        })
    }

    onMouseEnterHandler = (e) => {
        
        e.target.nextElementSibling.classList.toggle('overlay-on')

    }
    onMouseLeaveHandler = (e) => {
       
        e.target.nextElementSibling.classList.toggle('overlay-on')
    }

    onClickHandler =(e, id) => {
        console.log(id)
        const data = {'pin': id}
        e.target.style.backgroundColor = 'black'
        const url = "http://localhost:8000/accounts/api/v1/save/"
        fetch(url,{
            method:"post",
            headers:{
                'Authorization': 'Token bfa079b117486766b43df3e3c05a97b26f531e8d',
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        }).catch(console.error)
    }


    render() { 
        const breakpointColumnsObj = {
            default: 5,
            1259: 4,
            1100: 3,
            755: 2
          };
        return (
            <>

<Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
    {this.state.events.map((item)=>{

    return <PinDisplay 

    onMouseEnterHandler={this.onMouseEnterHandler} 
    onMouseLeaveHandler={this.onMouseLeaveHandler}
    onClickHandler={this.onClickHandler}
    key = {item.id}
    id = {item.id}
    image={item.image} 
    avatar={item.creator.avatar} 
    title={item.title}
    name={item.creator.username}/>
      
    })}
</Masonry>
    
<AnQ/>


    </> 
        );
    }
}
 
export default Home;

 
