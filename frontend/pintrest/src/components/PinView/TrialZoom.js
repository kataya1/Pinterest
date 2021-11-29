import React, { Component } from "react";
import Home from "../Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

class TrialZoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.likes.length,
      clicked: `${this.props.likes.length} like this`,
      bgcolor: "",
    };
    console.log(`sahar${this.state.count}`);
  }

  handleClick = () => {
    if (this.state.count === this.props.likes.length) {
      this.setState(prev => ({ count: prev.count + 1 }));
      this.setState({ bgcolor: "#E60023" });
      this.setState({ clicked: `You and ${this.state.count} like this` });
    } else if (this.state.count === this.props.likes.length + 1) {
      this.setState(prev => ({ count: prev.count - 1 }));
      this.setState({ bgcolor: "black" });
      this.setState({ clicked: `${this.state.count - 1} like this` });
    }
  };

  render() {
    return (
      <div>
        <div>
          {" "}
          {/* className={style.container + " " + "container"} */}
          <div
            className='row d-flex justify-content-center flex-wrap'
            style={{
              margin: "0 10%",
              boxShadow: "6px 6px 3px  rgba(0,0,0,0.2)",
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
                src={`http://localhost:8000${this.props.image}`}
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
                        class='svg-inline--fa fa-heart fa-w-16 fa-2x '
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
                  <div className='up-arrow' style={{ width: "48px" }}>
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
                  <div className='star'>
                    <div style={{ height: "48px", width: "48px" }}>
                      <svg
                        //  onClick={this.props.incrementingCount}
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
                  <button
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      padding: "0px 16px",
                    }}
                    className='btn btn rounded-pill dropdown-toggle '
                  >
                    Profile
                  </button>
                  <button
                    className='btn btn rounded-pill'
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
                      src={`http://localhost:8000${this.props.creator.avatar}`}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                      }}
                    />
                    <span>{console.log("@", this.props)}</span>
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
                <div className='col follow-icon'>
                  <button
                    style={{ backgroundColor: "#E2E2E2", float: "right" }}
                    className='btn btn rounded-pill'
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
                    }}
                  >
                    Note to self
                  </span>
                  <br />
                  <p style={{ fontSize: "1rem", float: "left" }}>
                    What do you want to remember about this Pin?
                  </p>
                </div>
                <button
                  style={{ backgroundColor: "#E2E2E2", float: "right" }}
                  className='btn btn rounded-pill'
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Add note
                  </span>
                </button>
              </div>
              <div className='comment-container' style={{ marginTop: "80px" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    float: "left",
                  }}
                >
                  Comments
                </div>
                <div style={{ float: "left", marginLeft: "1%" }}>
                  <svg
                    height='18'
                    width='18'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    aria-label=''
                    role='img'
                  >
                    <path d='M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z'></path>
                  </svg>
                </div>
              </div>
              <div
                className='comment-added row'
                style={{ width: "100%", marginTop: "20%" }}
              >
                <div className='col-2 user'>
                  <img
                    src={`http://localhost:8000${this.props.creator.avatar}`}
                    alt=''
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      float: "left",
                    }}
                  />
                </div>
                <div className='col-10'>
                  <div className='row'>
                    <input
                      type='text'
                      placeholder='Add a comment'
                      style={{
                        width: "80%",
                        height: "50px",
                        padding: "12px",
                        borderRadius: "30px",
                        border: "0.5px solid #767676",
                      }}
                    />
                  </div>
                  <div className='row' style={{ marginTop: "10px" }}>
                    <div className='d-flex'>
                      <div className='heart-emoji px-1'>
                        <svg
                          fill='#767676'
                          height='16'
                          width='16'
                          viewBox='0 0 24 24'
                          aria-label='like icon'
                          role='img'
                        >
                          <path d='m22.178 13.583-9.131 8.992a1.502 1.502 0 0 1-2.094 0l-9.131-8.992a6.192 6.192 0 0 1 0-8.773c2.439-2.413 6.395-2.413 8.834 0L12 6.154l1.344-1.344c2.439-2.413 6.395-2.413 8.834 0a6.192 6.192 0 0 1 0 8.773'></path>
                        </svg>
                      </div>
                      <div className='comment-icon px-1'>
                        <svg
                          fill='#767676'
                          height='16'
                          width='16'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                          aria-label=''
                          role='img'
                        >
                          <path d='M12 0C5.85 0 .75 4.94.75 11.08c0 2.7.9 5.24 2.7 7.19L2.1 23.51c-.15.3.3.6.6.45l5.25-2.55c1.35.45 2.7.75 4.05.75 6.15 0 11.25-4.94 11.25-11.08S18.15 0 12 0'></path>
                        </svg>
                      </div>
                      <div className='dotted-icon px-1'>
                        <svg
                          fill='#767676'
                          height='16'
                          width='16'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                          aria-label=''
                          role='img'
                        >
                          <path d='M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'></path>
                        </svg>
                      </div>
                      <div className='px-1' style={{ marginLeft: "56%" }}>
                        <div className='like-icon'>
                          <svg
                            fill='#767676'
                            height='16'
                            width='16'
                            viewBox='0 0 24 24'
                            aria-label='helpful icon'
                            role='img'
                          >
                            <path d='M21 14.09a2.1 2.1 0 01-2.11 2.08 2.1 2.1 0 012.11 2.1 2.1 2.1 0 01-2.11 2.08H16.5c1.02 0 1.85.82 1.85 1.82 0 1.01-.83 1.83-1.85 1.83H9.9A7.87 7.87 0 012 16.17c0-2.2.93-4.2 2.41-5.61 2.19-2.3 3.4-5.3 3.4-8.47A2.1 2.1 0 019.9 0a2.1 2.1 0 012.12 2.09c0 1.99-.37 3.92-1.05 5.74h7.9A2.1 2.1 0 0121 9.9a2.1 2.1 0 01-2.11 2.1A2.1 2.1 0 0121 14.09z'></path>
                          </svg>
                        </div>
                        <p style={{ fontFamily: "Helvetica Neue" }}>
                          {" "}
                          &nbsp;Helpful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
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
              </div>

              <div className='d-flex user-save' style={{ marginTop: "100%" }}>
                <img
                  src={`http://localhost:8000${this.props.creator.avatar}`}
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
                <p style={{ marginLeft: "10px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    You
                  </span>
                  saved this pin
                </p>
              </div>
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
          {/* <button onClick={this.handleClick}>click{this.state.count}</button> */}
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
