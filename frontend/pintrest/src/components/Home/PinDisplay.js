import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authentication/Authcontext";
import { injectTooltip } from "../Tooltip/Tooltip";


const PinDisplay = props => {
  const { media } = useContext(Authcontext)
  return (
    <div className='pins'>
      <div className='pin'>
        <Link
          to={`/pin/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className='pin-image'>
            <img
              src={`${media}${props.image}`}
              alt='pin'
            />
            <div
              className='overlay-on'
              onClick={e => props.saveHistory(e, props.id)}
            >
              <input
                type='submit'
                href='#'
                onClick={e => props.onClickHandler(e, props.id)}
                value='Save'
                className='btn btn-danger'
              />
              <div className='one' style={{ cursor: "pointer" }} onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); injectTooltip(e) }}>
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
              <div className='two' style={{ cursor: "pointer" }} onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); injectTooltip(e) }}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </div>
          </div>

          <p className='title'>{props.title}</p>
          <div className='user'>
            {props.avatar && <img
              className='avatar'
              src={`${media}${props.avatar}`}
              alt='avatar'
            />}
            {!props.avatar && <img
              className='avatar'
              src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
              alt='avatar'
            />}
            <p className='name'>{props.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PinDisplay;
