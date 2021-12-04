import React, { Component } from "react";
import { injectTooltip } from "../Tooltip/Tooltip";

class OrganisedIdea extends Component {
  render() {
    return (
      <div>
        <div style={{ paddingBottom: "16px", width: "100%" }}>
          <div style={{ width: "100%" }}></div>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <div className='col'>
              <div style={{ height: "48px", width: "48px" }}>
                <button
                  style={{ cursor: "text" }}
                  type='button'
                  className='btn btn rounded-pill'
                >
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    Unorganised ideas
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='col'>
              <div>
                <button
                  style={{ backgroundColor: "#efefefea" }}
                  type='button'
                  onClickCapture={injectTooltip}
                  className='btn btn-light rounded-pill'
                >
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>
                    Organise
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganisedIdea;
