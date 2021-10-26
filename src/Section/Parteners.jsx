import React from "react";
import "./../scss/Parteners.scss";
import img_nova from "./../img/parteners/logo_nova2.png";

import img_tozobenga from "./../img/parteners/logo_tozobenga.png";
import img_corea from "./../img/parteners/logo_corea2.png";
import img_doxa from "./../img/parteners/logo_doxa2.png";

const Parteners = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center container_parteners" data-aos="fade-up">
        <div className="partener_card">
          <img src={img_nova} className="img-fluid" alt="projet" />
        </div>

       
    
        <div className="partener_card">
          <img src={img_tozobenga} alt="projet" />
        </div>
         <div className="partener_card">
          <img src={img_doxa} alt="projet" />
        </div>
        <div className="partener_card">
          <img src={img_corea} alt="projet" />
        </div>
      </div>
    </>
  );
};
export default Parteners;
