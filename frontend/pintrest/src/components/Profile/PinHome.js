import React, { Component } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import PinDisplay from "./PinDisplay";

class PinHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPins: [],
      savedPins: [],
      errormsg: "",
    };
  }
  onMouseEnterHandler = e => {
    e.target.nextElementSibling.classList.toggle("overlay-on");
  };

  onMouseLeaveHandler = e => {
    e.target.nextElementSibling.classList.toggle("overlay-on");
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8000/accounts/api/v1/save/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.setState({ userPins: response.data });
        console.log(response.data[0].saved_pins);
        this.setState({ savedPins: response.data[0].saved_pins });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errormsg: "error retreiving data" });
      });
  }
  render() {
    const breakpointColumnsObj = {
      default: 3,
      //   1259: 4,
      //   1100: 3,
      //   755: 2,
    };
    return (
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {this.state.savedPins.map(item => {
            return (
              <PinDisplay
                key={item.id}
                id={item.id}
                image={item.image}
                desc={item.description}
              />
            );
          })}
        </Masonry>
      </div>
    );
  }
}

export default PinHome;
