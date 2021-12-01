import axios from "axios";
import React from "react";
import Masonry from "react-masonry-css";
import PinDisplay from "./PinDisplay";
import "./pin.css";
import AnQ from "./Anq-btns";


// const media = localStorage.getItem('media')
const host = localStorage.getItem('host')
// const frontendhost = localStorage.getItem('frontendhost')

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.Home();
  }

  Home = () => {
    var self = this;
    axios.get(`${host}/home/`).then(res => {
      self.setState({ events: res.data });
    });
  };

  onMouseEnterHandler = e => {
    e.target.nextElementSibling.classList.toggle("overlay-on");
  };

  onMouseLeaveHandler = e => {
    e.target.nextElementSibling.classList.toggle("overlay-on");
  };

  onClickHandler = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = { pin: id };
    e.target.style.backgroundColor = "black";
    const url = `${host}/pin/save/`;
    fetch(url, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(console.error);
  };

  saveHistory = (e, id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    const data = { pin: id };
    const url = `${host}/profile/history/`;
    fetch(url, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(console.error);
    console.log("saved");
  };

  render() {
    const breakpointColumnsObj = {
      default: 5,
      1259: 4,
      1100: 3,
      755: 2,
    };
    return (
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {this.state.events.map(item => {
            return (
              <PinDisplay
                onMouseEnterHandler={this.onMouseEnterHandler}
                onMouseLeaveHandler={this.onMouseLeaveHandler}
                onClickHandler={this.onClickHandler}
                saveHistory={this.saveHistory}
                key={item.id}
                id={item.id}
                image={item.image}
                avatar={item.creator.avatar}
                title={item.title}
                name={item.creator.username}
              />
            );
          })}
        </Masonry>

        <AnQ />
      </>
    );
  }
}

export default Home;
