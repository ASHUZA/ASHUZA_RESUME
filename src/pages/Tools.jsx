import React from "react";
import { Link } from "react-router-dom";

import "./../scss/Tools.scss";

import img_nova from "./../img/parteners/logo_nova2.png";

import img_tozobenga from "./../img/parteners/logo_tozobenga.png";
import img_corea from "./../img/parteners/logo_corea2.png";
import img_doxa from "./../img/parteners/logo_doxa2.png";

const Tools = () => {
  return (
    <>
      <div className="container-fluid section_service_bg">
        <div className="container">
          <div className="section-title mt-5" data-aos="fade-up">
            <h2> TOOLS</h2>
            <p> MY TOOLS</p>

            <sliderbtn></sliderbtn>
          </div>
          <div
            className="container d-flex align-items-center justify-content-center container_tools"
            data-aos="fade-up"
          >
            <div className="tool_card">
              <img src={img_nova} className="img-fluid" alt="projet" />
            </div>

            <div className="tool_card">
              <img src={img_tozobenga} alt="projet" />
            </div>
            <div className="tool_card">
              <img src={img_doxa} alt="projet" />
            </div>
            <div className="tool_card">
              <img src={img_corea} alt="projet" />
            </div>
          </div>
        </div>
<div className="tools-footer"></div>
        <Link className="btn-get-seemore" to="/Plusservices">
          See more
        </Link>
      </div>
    </>
  );
};
export default Tools;
