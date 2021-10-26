import React from "react";
import { Link } from "react-router-dom";
import "./../scss/Skills.scss"
import img_node from "./../img/icons skills2/nodejs-1-logo-svg-vector.svg";
import img_css from "./../img/icons skills2/css.png";
import img_sass from "./../img/icons skills2/sass.png";
import img_react from "./../img/icons skills2/react.png";
import img_js from "./../img/icons skills2/js.png";
import img_html from "./../img/icons skills2/html.png";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills d-flex flex-column justify-content-center align-items-center">
        <div className="container" data-aos="fade-up">
          <div className="section-title_projet">
            <h2>SKILLS</h2>
            <p>MY SKILLS</p>
          </div>

          <div className="row d-flex flex-wrap justify-content-center align-items-center">
           
          <div
              className="col-lg-4 col-md-6 col-10 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box skills_card">
                <div className="icon">
                  <img
                    className="card-img-top img--skills"
                    src={img_js}
                    alt="Card image cap"
                  />
                </div>
                <h4>
                  <a href="">MY SQL</a>
                </h4>
                <p>
                  JavaScript is a scripting or programming language that allows
                  us to implement complex features on web pages
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-10 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box skills_card">
                <div className="icon">
                  <img
                    className="card-img-top img--skills"
                    src={img_node}
                    alt="Card image cap"
                  />
                </div>
                <h4>
                  <a href="">NODE JS</a>
                </h4>
                <p>
                  Node.js is a JavaScript runtime built on Chrome's V8
                  JavaScript engine.
                </p>
              </div>
            </div>

          

        

            <div
              className="col-lg-4 col-md-6 col-10 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box skills_card">
                <div className="icon">
                  <img
                    className="card-img-top img--skills"
                    src={img_react}
                    alt="Card image cap"
                  />
                </div>
                <h4>
                  <a href="">REACT JS</a>
                </h4>
                <p>
                  React is a popular JavaScript library developed by Facebook
                  for building web application user interfaces.{" "}
                </p>
              </div>
            </div>

      

          
          </div>
         
        </div>
        <Link className="btn-get-seemore mt-3" to="/Plusskills">See more</Link>
  
      </section>
    </>
  );
};
export default Skills;
