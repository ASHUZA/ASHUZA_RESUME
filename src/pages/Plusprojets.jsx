import React from "react";
import "./../scss/Pluspages.scss";
import { Link } from "react-router-dom";
import img_projet1 from "./../img/card compresser/PKD.png";
import img_projet2 from "./../img/card compresser/PCINEMA.png";
import img_projet3 from "./../img/card compresser/PENVIRONEWS.png";
import img_projet4 from "./../img/card compresser/PCOREA.png";
import img_projet5 from "./../img/card compresser/PBAC.png";
import img_projet6 from "./../img/card compresser/PTOZOBENGA.png";

import img_projet7 from "./../img/card compresser/PBERHEE.png";
import img_projet8 from "./../img/card compresser/CBS.png";
import img_projet9 from "./../img/card compresser/PKESHO.png";

import Footer from "../Section/Footer";
import Parteners from "../Section/Parteners";

const Plusprojets = () => {
  return (
    <>
      <section id="projects" className="projects_plus">
        <div className="container" data-aos="fade-up">
        <div className="plus-header d-flex justify-content-between align-items-center">
          <div className="section-title">
            <h2>PROJECTS</h2>
            <p>MY PROJECTS</p>
          </div>

          <Link className="btn-get-return d-flex align-items-center justify-content-center" to="/">
          Home page
          </Link>
          </div>
          <div
            className="row d-flex flex-wrap justify-content-center align-items-center"
            id="projects_elements"
          >
            <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet1} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>

         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://cinema-three.vercel.app/">
                  <img src={img_projet2} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://environnews-itya81rwr-mechacktambwe.vercel.app/">
                  <img src={img_projet3} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
               <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet9} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet4} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet5} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet6} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet8} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>
            
         <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet7} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Parteners></Parteners>
      <Footer></Footer>
    </>
  );
};
export default Plusprojets ;
