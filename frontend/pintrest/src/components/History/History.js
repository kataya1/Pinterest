import axios from "axios";
import React from 'react';
import Masonry from 'react-masonry-css'
import HistoryDisplay from "../History/HistoryDisplay";
import'../Home/pin.css';
import styles from './history.module.css'; 
import AnQ from "../Home/Anq-btns";



class History extends React.Component {

    constructor(){
        super()
        this.state = {
            events: [],
            token:'bfa079b117486766b43df3e3c05a97b26f531e8d'
        }
        
    }

    componentDidMount(){
        this.History();
    };
    
    History= () =>  {
   
        var self = this;  
        axios.get('http://localhost:8000/profile/history/',{
            headers:{
                'Authorization': `Token ${self.state.token}`,
                "Content-type": "application/json"
            },
        } )
        .then(res => {self.setState({events: res.data},() => console.log(self.state))})
        }

        getTime = (tm)=>{
            let res = new Date(tm).getTime()/1000;
            let currentTime = Math.floor(Date.now() /1000)
            let timeInSeconds = currentTime - res;
            if(timeInSeconds <60){
                res="seen " +Math.round(timeInSeconds)+ " Seconds ago"
            }else if(timeInSeconds <60*60){
                res="seen " +Math.round(timeInSeconds/60)+" Mins ago"
            }else if(timeInSeconds<60*60*24){
                res="seen " +Math.round(timeInSeconds/60/60) +' Hours ago'
            }else{res= new Date(tm).toISOString()}
            
            return res;
      
          }

          onClickHandler = (e,id)=>{
            e.stopPropagation();
            e.preventDefault()
            console.log(id)
            const url = `http://localhost:8000/profile/history/${id}`
            fetch(url,{
                method:"delete",
                headers:{
                    'Authorization': `Token ${this.state.token}`,
                    "Content-type": "application/json"
                }
            }).catch(console.error)
          }  


    render() { 
        const breakpointColumnsObj = {
            default: 3,

          };
        return (
            <>

<div className={styles.container_fluid}>
        <div className={styles.for_container}>
            <div className={styles.row}>
                <div className={styles.head}>
                    <h3>Tune your home feed</h3>
                    <p>Your home feed is based on your boards, topics, 
                        browsing history, and the creator profiles you follow. 
                        Edit your preferences to improve your feed!</p>

                </div>
            </div>
        </div>
        </div>

        <div className={styles.container_fluid}>
        <div className={styles.for_container}>
            <div className={styles.row}>
                <div className={styles.lable}>
                    <div><div className={styles.history}>History</div></div>
                    <div><div>Boards</div></div>
                    <div><div>Topics</div></div>
                    <div><div>Profiles</div></div>
                </div>
            </div>
        </div>
        </div>


                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {this.state.events.map((item)=>{

                    return <HistoryDisplay 

                    onMouseEnterHandler={this.onMouseEnterHandler} 
                    onMouseLeaveHandler={this.onMouseLeaveHandler}
                    onClickHandler={this.onClickHandler}
                    key = {item.id}
                    id = {item.id}
                    image={item.pin.image} 
                    time={this.getTime(item.time)}
                    />
                    
                    })}
                </Masonry>

                <AnQ/>
                </> )
    }
}
 
export default History;