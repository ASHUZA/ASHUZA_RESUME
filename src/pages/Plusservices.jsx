import React from "react";
import "./../scss/Services.scss";
import "./../scss/Pluspages.scss";
import { Link } from "react-router-dom";
import img_service1 from "./../img/citation compresser/L'ENFANCE carre 3.png";
import img_service2 from "./../img/citation compresser/sdsdsd.png";
import img_service3 from "./../img/citation compresser/L'ENFANCE carre2.png";
import img_service4 from "./../img/citation compresser/L'ENFANCE carre 3.png";
import img_service5 from "./../img/citation compresser/teee.png";
import img_service6 from "./../img/citation compresser/fffdfd.png";
import img_service7 from "./../img/citation compresser/L'ENFANCE carre.png";
import img_service8 from "./../img/citation compresser/technologie magie.png";
import img_service9 from "./../img/citation compresser/teee.png";
import img_service10 from "./../img/services/S (1).jpg";
import img_service11 from "./../img/services/S (1).png";
import img_service12 from "./../img/services/S (16).png";

import img_service13 from "./../img/services/S (17).png";
import img_service14 from "./../img/services/S (18).png";
import img_service15 from "./../img/services/S (19).png";
import img_service16 from "./../img/services/S (20).png";
import img_service17 from "./../img/services/S (21).png";
import img_service18 from "./../img/services/S (22).png";
import img_service19 from "./../img/services/S (23).png";
import img_service20 from "./../img/services/S (24).png";
import img_service21 from "./../img/services/S (25).png";
import img_service22 from "./../img/services/S (26).png";
import img_service23 from "./../img/services/S (27).png";
import img_service24 from "./../img/services/S (28).png";
import img_service25 from "./../img/services/S (29).png";

import Footer from "../Section/Footer";
import Parteners from "../Section/Parteners";

const Plusservices = () => {
  return (
    <>
      <div className="container-fluid section_service_bg">
        <div className="container">
          <div className="plus-header d-flex justify-content-between align-items-center">
          <div className="section-title mt-5" data-aos="fade-up">
            <h2> SERVICES</h2>
            <p> MY SERVICES </p>
          </div>

          <Link className="btn-get-return d-flex align-items-center justify-content-center" to="/">
          Home page
          </Link>
          </div>
          <div className="row card_service_box">
            <div className="services_card">
              <img src={img_service8} alt="projet" />
            </div>
            <div className="services_card">
              <img src={img_service10} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service11} alt="projet" />
            </div>
                <div className="services_card">
              <img src={img_service18} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service12} alt="projet" />
            </div>
                <div className="services_card">
              <img src={img_service1} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service13} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service14} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service15} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service16} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service17} alt="projet" />
            </div>
          

  <div className="services_card">
              <img src={img_service19} alt="projet" />
            </div>

  <div className="services_card">
              <img src={img_service21} alt="projet" />
            </div>
              <div className="services_card">
              <img src={img_service22} alt="projet" />
            </div>

 




            <div className="services_card">
              <img src={img_service11} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service3} alt="projet" />
            </div>
            <div className="services_card">
              <img src={img_service4} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service1} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service5} alt="projet" />
            </div>
            <div className="services_card">
              <img src={img_service6} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service7} alt="projet" />
            </div>

          
            <div className="services_card">
              <img src={img_service9} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service1} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service2} alt="projet" />
            </div>
        

            <div className="services_card">
              <img src={img_service2} alt="projet" />
            </div>
          </div>
        </div>
      </div>
      <Parteners></Parteners>
      <Footer></Footer>
    </>
  );
};
export default Plusservices;
