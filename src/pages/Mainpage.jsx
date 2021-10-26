import React from "react";
import About from "../Section/About";
import Cover from "../Section/Cover";
import Footer from "../Section/Footer";
import Parteners from "../Section/Parteners";
import Projets from "../Section/Projets";
import Services from "../Section/Services";
import Skills from "../Section/Skills";
import Blogs from "./Blog";
import Tools from "./Tools";

const Mainpage = () => {
  return (
    <>
      <Cover></Cover>

      <About />
      <Skills />
      <Services></Services>
     
      <Projets></Projets>
      {/* <Blog></Blog> */}
      {/* <Tools></Tools> */}
      {/* <Blogs></Blogs> */}
      <Parteners></Parteners>
      <Footer></Footer>
    </>
  );
};
export default Mainpage;
