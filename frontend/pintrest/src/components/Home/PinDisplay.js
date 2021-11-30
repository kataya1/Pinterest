import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PinDisplay = props => {
  return (
    <div className='pins'>
      <div className='pin'>
        <Link
          to={`/pin/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className='pin-image'>
            <img
              src={`http://127.0.0.1:8000${props.image}`}
              onMouseOver={props.onMouseEnterHandler}
              onMouseOut={props.onMouseLeaveHandler}
              alt='pin'
            />
            <div
              className='overlay'
              onClick={e => props.saveHistory(e, props.id)}
            >
              <input
                type='submit'
                href='#'
                onClick={e => props.onClickHandler(e, props.id)}
                value='Save'
                className='btn btn-danger'
              />
              <div className='one'>
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
              <div className='two'>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </div>
          </div>

          <p className='title'>{props.title}</p>
          <div className='user'>
            <img
              className='avatar'
              src={`http://localhost:8000${props.avatar}`}
              alt='avatar'
            />
            <p className='name'>{props.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PinDisplay;
