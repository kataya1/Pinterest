import React, { Component } from "react";
import axios from "axios";
import TrialZoom from "./TrialZoom";

class PassingImg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      errormsg: "",
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8000/accounts/api/v1/pin/${this.props.pinId}`)

      .then(response => {
        this.setState({ pins: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errormsg: "error retreiving data" });
      });
  }

  render() {
    const { pins } = this.state;
    return (
      <div>
        {pins.map(item => {
          return (
            <TrialZoom
              key={item.id}
              image={item.image}
              creator={item.creator}
              likes={item.reactees}
            />
          );
        })}
      </div>
    );
  }
}

export default PassingImg;
