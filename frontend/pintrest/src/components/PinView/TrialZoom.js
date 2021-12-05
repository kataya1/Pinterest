import React, { Component } from "react";
import Home from "../Home/Home";
import "./Modal.css";
import { Link } from 'react-router-dom';
import { injectTooltip } from "../Tooltip/Tooltip"
import "../Home/pin.css";
import CommentBox from "../Comment/CommentBox";


const media = localStorage.getItem('media')
const host = localStorage.getItem('host')
const userid = localStorage.getItem('userId')
// const currentUserAvatarURL = localStorage.getItem('currentUserAvatarURL')
class TrialZoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reactt: this.props.likes,
      count: this.props.likes.length,
      clicked: `${this.props.likes.length} like this`,
      bgcolor: "",
      check: false,
      text: "What do you want to remember about this Pin?",
    };
  }

  componentDidMount() {

    // console.log(`${this.state.reactt}`)
    // console.log(`USER${typeof Number(userid) }`)
    // console.log(this.state.reactt.indexOf(Number(userid)))
    if (this.state.reactt.indexOf(Number(userid)) >= 0) {
      if (this.state.count === 1) {
        this.setState({ clicked: `You like this` })
      } else {

        this.setState({ clicked: `You and ${this.state.count - 1} like this` })
      }
      this.setState({ check: true })
      this.setState({ bgcolor: "#E60023" });
    }

  }

  clickChange = e => {
    this.setState({ text: e.target.value });
  };

  handleClick = () => {
    if (this.state.check === false) {
      const token = localStorage.getItem('token')
      const url = `${host}/accounts/api/v1/pin/update/${this.props.id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Token ${token}`,
        },
      }).then(() => {

        this.setState({ check: true })
        this.setState(prev => ({
          count: prev.count + 1,
          clicked: `You ${prev.count ? `and ${prev.count}` : ""} like this`
        }));
        this.setState({ bgcolor: "#E60023" });
        // this.setState({ clicked: `You and ${this.state.count} like this` });
      })
        .catch(console.error);




    } else if (this.state.check === true) {
      const token = localStorage.getItem('token')
      const url = `${host}/accounts/api/v1/pin/update/${this.props.id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${token}`,
        },
      }).then(() => {
        this.setState({ check: false })
        this.setState(prev => ({
          count: prev.count - 1,
          clicked: `${prev.count - 1} like this`
        }));
        this.setState({ bgcolor: "black" });
      })
        .catch(console.error);
    }
  };
  handleNotesClick = () => {
    console.log(this.state.text);
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



  render() {
    return (
      <div>
        <div>
          <div
            className='row d-flex justify-content-center flex-wrap shadow-lg p-3 mb-5 bg-body'
            style={{
              margin: "0 10%",
              borderRadius: "25px",
              marginTop: "3%",
              overflow: "hidden",
            }}
          >
            <div className='col col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 zoomed-img'>
              <img
                style={{
                  width: "100%",
                  maxHeight: "auto",
                  borderRadius: "5%",
                  paddingTop: "3%",
                  minWidth: "300px",
                }}
                src={`${media}${this.props.image}`}
                alt=''
              />
            </div>

            <div
              className=' col col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 img-details'
              style={{ padding: "32px", minWidth: "300px" }}
            >
              <div
                className=' d-flex profile-save row '
                style={{ marginTop: "20px" }}
              >
                <div className='d-flex col element-star-arrow'>
                  <div className='element..' style={{ width: "48px" }}>
                    <i
                      id='pulse-click'
                      onClick={this.handleClick}
                      style={{ cursor: "pointer", fill: this.state.bgcolor }}
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='heart'
                        className='svg-inline--fa fa-heart fa-w-16 fa-2x '
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill={this.state.bgcolor}
                          d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
                        ></path>
                      </svg>
                    </i>
                  </div>
                  <div className='up-arrow' style={{ width: "48px" }} onClickCapture={injectTooltip}>
                    <svg
                      height='32'
                      width='28'
                      viewBox='0 0 24 24'
                      aria-label='Send'
                      role='img'
                    >
                      <path d='M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z'></path>
                    </svg>
                  </div>
                  <div className='star' onClickCapture={injectTooltip}>
                    <div style={{ height: "48px", width: "48px" }}>
                      <svg
                        height='32'
                        width='28'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        aria-label=''
                        role='img'
                      >
                        <path d='M10.52 3.11a2 2 0 013.59 0l2.06 4.17c.02.06.08.1.15.11l4.6.67a2 2 0 011.1 3.41l-3.32 3.25a.2.2 0 00-.06.17l.78 4.58a2 2 0 01-2.9 2.11l-4.11-2.16a.2.2 0 00-.19 0l-4.11 2.16a2 2 0 01-2.9-2.1l.78-4.59a.2.2 0 00-.06-.17l-3.32-3.25a2 2 0 011.1-3.41l4.6-.67a.2.2 0 00.15-.1zm3.9 5.15l-1.75-3.53a.4.4 0 00-.71 0L10.2 8.26a2 2 0 01-1.5 1.1l-3.9.56a.4.4 0 00-.23.69l2.83 2.75a2 2 0 01.57 1.77L7.31 19a.4.4 0 00.58.42l3.5-1.83a2 2 0 011.86 0l3.48 1.83a.4.4 0 00.59-.42l-.67-3.88a2 2 0 01.57-1.77l2.83-2.75a.4.4 0 00-.22-.69l-3.9-.56a2 2 0 01-1.51-1.1z'></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='col d-flex justify-content-end save-prof'>
                  <Link to='/profile'>
                    <button
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        padding: "10px 16px 0px 16px",
                      }}
                      className='btn btn rounded-pill dropdown-toggle '
                    >
                      Profile
                    </button>
                  </Link>
                  <button
                    className='btn btn rounded-pill'
                    onClick={e => this.onClickHandler(e, this.props.id)}
                    value='Save'
                    style={{

                      backgroundColor: "#E60023",
                      color: "#FFFFFF",

                      fontWeight: "700",

                      width: "69.22px",

                      height: "48px",

                      float: "right",

                      fontSize: "1.1rem",

                      textAlign: "center",
                      padding: "5px",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div>
                <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                  {this.state.clicked}{" "}
                </span>
              </div>
              <div className='uploaded-by' style={{ marginTop: "5%" }}>
                <span
                  style={{
                    fontSize: "21px",
                    float: "left",
                    fontWeight: "normal",
                  }}
                >
                  Uploaded By
                  <span style={{ fontWeight: "bold", fontSize: "21px" }}>
                    {" "}
                    {this.props.creator.username}
                  </span>
                </span>
              </div>
              <br />
              <div className='creator-prof row' style={{ marginTop: "30px" }}>
                <div className='col avatar-follow '>
                  <div className='col' style={{ float: "left" }}>
                    <img
                      src={`${media}${this.props.creator.avatar}`}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                      }}
                      alt='avatar'
                    />
                  </div>
                  <div className='col'>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {this.props.creator.username}
                    </span>
                    <br />
                    <span>{this.props.creator.following.length} followers</span>
                  </div>
                </div>
                <div className='col avatar-info'></div>
                <div className='col follow-icon' >
                  <button
                    style={{ backgroundColor: "#E2E2E2", float: "right" }}
                    className='btn btn rounded-pill'
                    onClickCapture={injectTooltip}
                  >
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Follow{" "}
                    </span>
                  </button>
                </div>
              </div>
              <div className='note' style={{ marginTop: "10%" }}>
                <div style={{ marginRight: "50%" }}>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      float: "left",
                      padding: "0",
                    }}
                  >
                    Note to self
                  </span>
                  <br />
                  <p style={{ fontSize: "1rem", float: "left", width: "100%" }}>
                    {this.state.text}
                  </p>
                </div>
                <button
                  style={{ backgroundColor: "#E2E2E2", float: "right" }}
                  className='btn btn rounded-pill'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Add note
                  </span>
                </button>
                {/* modal */}
                <div
                  className='modal fade center'
                  id='exampleModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content' style={{ textAlign: "center" }}>
                      <div className='modal-header d-flex justify-content-center'>
                        <span className='modal-title' id='exampleModalLabel' style={{ fontSize: '25px', fontWeight: 'bold' }}>
                          Add note to self
                        </span>
                      </div>

                      <div className='modal-body'>
                        <div className='form-floating'>
                          <textarea
                            className='form-control'
                            id='floatingTextarea2'
                            style={{ height: "100px" }}
                            placeholder="Add a private note -such as 'show Tim?' or 'Needs more salt' "
                            onChange={this.clickChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-danger rounded-pill'
                          onClick={this.handleNotesClick}
                          data-bs-dismiss='modal'
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* comment-container */}
              </div>
              <CommentBox pin_id={this.props.pin_id}/>
            


              {/* <div
                className='d-flex justify-content-end done-cancel'
                style={{ marginTop: "3%", marginLeft: "60%" }}
              >
                <button
                  style={{ backgroundColor: "#E2E2E2", marginRight: "2%" }}
                  className='btn btn rounded-pill'
                >
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    Cancel
                  </span>
                </button>
                <button
                  style={{ backgroundColor: "#E2E2E2" }}
                  className='btn btn rounded-pill'
                >
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    Done
                  </span>
                </button>
              </div> */}

              {/* <div
                className='d-flex user-save'
                style={{
                  marginTop: "80%",
                }}
              >
                <img
                  src={`${media}${currentUserAvatarURL}`}
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                  alt='avatar'
                />
                <p style={{ marginLeft: "10px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    You
                  </span>
                  saved this pin
                </p>
              </div> */}
            </div>
          </div>
        </div>
        {/* 2nd Level container */}
        <div
          className='2nd-level'
          style={{
            padding: "5% 32px",
            margin: "0px 0px 4px",
          }}
        >
          <h3 style={{ fontWeight: "700", textAlign: "center" }}>
            More like this
          </h3>
        </div>
        {/* 3nd Level container */}

        <Home />


      </div>
    );
  }
}

export default TrialZoom;
