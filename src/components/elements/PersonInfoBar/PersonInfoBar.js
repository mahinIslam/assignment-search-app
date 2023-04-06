import React from "react";
import "./PersonInfoBar.css";
import { BASE_IMG } from "../../../config";
import { Image, Row, Col } from "react-bootstrap";
import no_img from '../img/no_image.jpg';
import Proptypes from 'prop-types';
import { editReleaseDate } from '../../../Functions/CommonFunctions/commonFunctions';


const PersonInfoBar = ({ info }) => {

  const isPropsNull = value => {
    if (value === null || value === "") {
      return "No information"
    }
    else {
      return value;
    }
  }

  return (
    <div className="p-4 person-info-bar-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={4} className="animated fadeInLeftBig">
          <Image
            src={info.profile_path ? `${BASE_IMG}${info.profile_path}` : `${no_img}`}
            roundedCircle
            className="person-img"
          />
        </Col>
        <Col sm={8} className="person-info animated fadeInRightBig">
          <h5> Name : <small> {isPropsNull(info.name)} </small></h5>
          <h5>Date of birth: <small> {editReleaseDate(info.birthday)} </small></h5>
          {
            info.deathday ? <h5>Date of death : <small> {info.deathday} </small> </h5> : null
          }
          <h5>Place Of Birth : <small> {isPropsNull(info.place_of_birth)} </small></h5>
          <h5>Biography : <small> {isPropsNull(info.biography)} </small></h5>
        </Col>
      </Row>
    </div>
  );
};

PersonInfoBar.propTypes = {
  info: Proptypes.object
}

export default PersonInfoBar;
