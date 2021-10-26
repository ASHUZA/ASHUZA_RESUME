import React from "react";
import "./../scss/Projets.scss";
import "./../scss/Blogs.scss";
import { Link } from "react-router-dom";
import Plusprojets from "../pages/Plusprojets";
import img_blog from "./../img/post-2.jpg"
import img_projet1 from "./../img/card compresser/PKD.png";
import img_projet2 from "./../img/card compresser/PCINEMA.png";
import img_projet3 from "./../img/card compresser/PENVIRONEWS.png";
import img_projet4 from "./../img/card compresser/PCOREA.png";
import img_projet5 from "./../img/card compresser/PBAC.png";
import img_projet6 from "./../img/card compresser/PTOZOBENGA.png";

import img_projet7 from "./../img/card compresser/PBERHEE.png";

const Blogs = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-title_projet">
            <h2>Blog</h2>
            <p>MY Blog</p>
          </div>

          <div
            className="row d-flex flex-wrap justify-content-center align-items-center"
            id="projects_elements"
          >
       
       <div
              className="blog-box col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="blog-img">
                <img src={img_blog} className="img-item" alt="projet" />
              </div>
              <div className="blog-title">
                  <p>
                
                You don't find the happy life. You make it
                </p>
                    <Link className="btn-get-more" to="/Plusprojets">
                  More
                </Link>
              </div>
              <div className="blog-btn">
               
              </div>
            </div>

            <div
              className="blog-box col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="blog-img">
                <img src={img_blog} className="img-item" alt="projet" />
              </div>
              <div className="blog-title">     <p>
                
                You don't find the happy life. You make it
                </p>
                <Link className="btn-get-more" to="/Plusprojets">
                  More
                </Link>
              </div>
              <div className="blog-btn">
               
              </div>
            </div>

            <div
              className="blog-box col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="blog-img">
                <img src={img_blog} className="img-item" alt="projet" />
              </div>
              <div className="blog-title">     <p>
                
                You don't find the happy life. You make it
                </p>
                <Link className="btn-get-more" to="/Plusprojets">
                  More
                </Link>
              </div>
              <div className="blog-btn">
               
              </div>
            </div>
          </div>
        </div>
        <Link className="btn-get-seemore" to="/Plusprojets">
          See more
        </Link>
      </section>
    </>
  );
};
export default Blogs;
