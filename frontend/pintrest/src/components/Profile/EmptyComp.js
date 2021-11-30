import React, { Component } from "react";
import ProfileData from "./ProfileData";
import axios from "axios";
import BoradFetchTrial from "./BoradFetchTrial";
import Buttons from "./Buttons";
import OrganisedIdea from "./OrganisedIdea";
import PinHome from "./PinHome";
import AnQ from "../Home/Anq-btns";

class EmptyComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      errormsg: "",
    };
  }

  componentDidMount() {
    this.bringUserData();
  }

  bringUserData = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/accounts/api/v1/profile", {
        headers: {
          Authorization: `Token ${token}`,
          "Content-type": "application/json",
        },
      })
      .then(response => {
        this.setState({ users: [response.data] });
      })
      .catch(error => {
        this.setState({ errormsg: "error retreiving data" });
      });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        {users.map(user => {
          return (
            <div key={user.id}>
              <ProfileData
                userId={user.id}
                username={user.username}
                avatar={user.avatar}
                fname={user.first_name}
                lname={user.last_name}
                following={user.following}
              />
              <Buttons />
              <BoradFetchTrial id={user.id} />
              <hr></hr>
              <OrganisedIdea />
              <PinHome id={user.id} />
              <AnQ />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EmptyComp;
